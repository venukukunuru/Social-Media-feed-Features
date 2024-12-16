import React from "react";
import "./VideoHandler.css";

function VideoHandler({ videoUrl }) {
  return (
    <div className="video-container">
      <video
        width="100%"
        height="auto"
        controls
        aria-label="Video player"
        onError={() => console.error("Video failed to load.")}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoHandler;
