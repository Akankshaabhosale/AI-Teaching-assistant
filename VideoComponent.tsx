import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import CenteredText from "./CenteredText";

const VideoComponent = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          filter: 'blur(10px)',
          transform: "scale(1.3)",
        }}
      >
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          muted
          autoPlay
          loop
          style={{ objectFit: 'cover' }}
        >
          <source src="https://videos.pexels.com/video-files/6964012/6964012-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <CenteredText text="From Queues to Queries : AITA Makes It Easy !" />
    </Box>
  );
};

export default VideoComponent;
