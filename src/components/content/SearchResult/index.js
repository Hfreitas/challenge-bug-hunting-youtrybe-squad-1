import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import VideoCard from './VideoCard/VideoCard';

import '../../../css/sideBar.css';
import { searchVideos } from '../../../services/service';

function SearchResult() {
  const [info, setInfo] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const { searchParam } = useParams();

  useEffect(() => {
    searchVideos(searchParam).then(
      ({ data }) => setInfo([...data.items.slice(0, 24)]),
      (error) => setFetchError(error),
    );
    return () => {
      setInfo([]);
      setFetchError('');
    };
  }, [searchParam]);

  if (info.length < 1) return <div>Loading...</div>;

  if (fetchError) return <div>{fetchError}</div>;

  return (
    <div>
      {info.map((item) => (
        <Link
          className="thumbnail-card"
          key={item.etag}
          to={{
            pathname: `/watch/${item.id.videoId}`,
            state: { info },
          }}
        >
          <VideoCard video={item} />
        </Link>
      ))}
    </div>
  );
}

export default SearchResult;
