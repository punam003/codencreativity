"use client";
import React, { useEffect, useState } from "react";

const VideoService = ({ videoUris }) => {
  const [loadedVideo, setLoadedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideo = (uri) => {
      return new Promise((resolve, reject) => {
        const vid = document.createElement("video");
        vid.src = uri;
        vid.onloadeddata = () => resolve(uri);
        vid.onerror = reject;
      });
    };

    loadVideo(videoUris.src)
      .then((loadedUri) => {
        setLoadedVideo(loadedUri);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load video", error));
  }, [videoUris]);

  return (
    <div className="relative">
      {loading ? (
        <div className="min-h-[60vh] min-w-[24.5vmax] bg-neutral-700"></div>
      ) : (
        <video
          src={loadedVideo}
          autoPlay
          loop
          muted
          className="max-w-[40vmax] lg:max-w-[24.5vmax]"
        ></video>
      )}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-neutral-900 bg-opacity-60">
        <h1 className="capitalize text-neutral-100 text-[5vmin] sm:text-[3vmin] font-bold text-center">
          {videoUris.h1}
        </h1>
      </div>
    </div>
  );
};

export default VideoService;
