import React, { useState, useEffect } from 'react';
import { Redirect, useParams, useLocation } from 'react-router-dom';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoPlayerDescription from './VideoPlayer/VideoPlayerDescription';
import VideoPlayerInfo from './VideoPlayer/VideoPlayerInfo';
import VideoPlayerComments from './VideoPlayerComments/VideoPlayerComments';
import VideoSideBar from './VideoSideBar/VideoSideBar';
import { getVideoInfo, getVideoComments } from '../../../services/service';

function VideoPage() {
  const { videoId: id } = useParams();
  const {
    state: { data: relatedData },
  } = useLocation();

  const [videoId, setVideoId] = useState(id);
  const [relatedVideos, setRelatedVideos] = useState(relatedData);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [videoInfo, setVideoInfo] = useState(null);
  const [videoComments, setVideoComments] = useState(null);

  const mountVideoPage = () => {
    setShouldRedirect(false);
    getVideoInfo(videoId).then(
      ({ data }) => setVideoInfo(data.items[0]),
      (message) => console.log(message),
    );
    getVideoComments(videoId).then(
      ({ data }) => setVideoComments([...data.items]),
      (message) => console.log(message),
    );
  };

  useEffect(() => {
    mountVideoPage();
    return () => {
      setVideoId(id);
      setRelatedVideos(relatedData);
      setShouldRedirect(false);
      setVideoInfo(null);
      setVideoComments(null);
    };
  }, []);

  const handleSelectedVideo = () => {
    setVideoId({ videoId }, () => {
      getVideoInfo(videoId).then(
        ({ data }) => setVideoInfo(data.items[0]),
        (message) => console.log(message),
      );
      getVideoComments(videoId).then(
        ({ data }) => setVideoComments([...data.items]),
        (message) => console.log(message),
      );
    });

    return setShouldRedirect(true);
  };

  const renderVideoPage = () => {
    return (
      <main>
        <section className="player">
          <VideoPlayer embedId={videoId} title={videoInfo.snippet.title} />
          <VideoPlayerInfo
            statisticsInfo={videoInfo.statistics}
            title={videoInfo.snippet.title}
          />
          <VideoPlayerDescription
            channelTitle={videoInfo.snippet.channelTitle}
            description={videoInfo.snippet.description}
            publishedAt={videoInfo.snippet.publishedAt}
          />
          <VideoPlayerComments
            statisticsInfo={videoInfo.statistics}
            videoComments={videoComments}
          />
        </section>
        <section className="sidebar">
          <VideoSideBar
            relatedVideos={relatedVideos}
            handleSelectedVideo={handleSelectedVideo}
          />
        </section>
      </main>
    );
  };

  if (!videoInfo || !videoComments) return <main />;

  if (shouldRedirect) {
    this.setState({ shouldRedirect: false });
    return (
      <Redirect
        to={{
          pathname: `/watch/${videoId}`,
          state: { data: relatedVideos },
        }}
      />
    );
  }

  return renderVideoPage(videoId, videoInfo, videoComments, relatedVideos);
}

export default VideoPage;
