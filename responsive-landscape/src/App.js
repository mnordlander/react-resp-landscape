import React, { useState, useEffect } from 'react';
import "./index.css";
import Player from './components/Player';
import Chat from './components/Chat';

function App() {
  const [mobileLandscape, setMobileLandscape] = useState(false)
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  useEffect(() => {
    function handleResize() {
      const newDimensions = {
        height: window.innerHeight,
        width: window.innerWidth
      };
      setDimensions(newDimensions);

      setMobileLandscape(newDimensions.width > newDimensions.height);

    }

    window.addEventListener('resize', handleResize)


    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="wrapper">
      {isMobileDevice && mobileLandscape ? (
        <Player string={<p>Mobile is in landscape mode</p>} width={dimensions.width} height={dimensions.height} />
      ) : (
        <>
          <Player string={<p>Mobile is not in landscape mode</p>} width={dimensions.width} height={dimensions.height} />
          <Chat />
        </>
      )}
    </div>
  );
}

export default App;
