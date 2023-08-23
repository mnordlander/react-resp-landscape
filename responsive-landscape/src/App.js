import React, { useState, useEffect, useRef } from 'react';
import "./index.css";
import Player from './components/Player';
import Chat from './components/Chat';

function App() {
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);
  const playerWrapperRef = useRef(null);

  const handleOrientationChange = () => {
    setIsMobileLandscape(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
      window.innerWidth > window.innerHeight
    );
  };

  useEffect(() => {


    handleOrientationChange();

    window.addEventListener('resize', handleOrientationChange);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  const adjustPlayerWrapperDimensions = () => {
    if (playerWrapperRef.current) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const aspectRatio = 16 / 9;
      const newWidth = Math.min(screenWidth, screenHeight * aspectRatio);
      playerWrapperRef.current.style.width = newWidth + 'px';
    }
  };

  useEffect(() => {
    adjustPlayerWrapperDimensions();

    window.addEventListener('resize', adjustPlayerWrapperDimensions);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener('resize', adjustPlayerWrapperDimensions);
    };
  }, []);

  return (
    <div className="wrapper">
      <div ref={playerWrapperRef} className="player-wrapper">
        <Player />
      </div>
      {isMobileLandscape ? null : <Chat />}
    </div>
  );
};

export default App;
