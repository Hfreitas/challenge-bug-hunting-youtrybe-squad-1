import React, { Component } from 'react';

function VideoThumbNailInfo() {
  const { title, channel } = this.props;

  return (
    <div className="thumbnail-info">
      <h2>{title}</h2>
      <div className="channel">{channel}</div>
      <div className="views">792K views</div>
    </div>
  );
}

export default VideoThumbNailInfo;
