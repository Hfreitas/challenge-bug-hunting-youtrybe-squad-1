import React from 'react';

import '../../../../css/chanelInfo.css';

function VideoPlayer(props) {
  const { embedId, title } = props;
  const playerURL = `https://www.youtube.com/embed/${embedId}`;
  return (
    <div className="youtube-player">
      <iframe
        title={title}
        width="100%"
        height="470"
        src={playerURL}
        frameBorder="0"
        data-testid="videoplayer"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default VideoPlayer;
