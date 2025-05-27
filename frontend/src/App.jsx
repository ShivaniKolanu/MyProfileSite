import './App.css'
import MainPage from './pages/MainPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updatePosition = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    
    // Hide custom cursor when mouse leaves the window
    const handleMouseLeave = () => {
      setPosition({ x: -100, y: -100 });
    };
    window.addEventListener('mouseleave', handleMouseLeave);

    // Handle cursor on mobile/touch devices
    const handleTouchStart = () => {
      const style = document.createElement('style');
      style.innerHTML = '* { cursor: auto !important; } .custom-cursor { display: none !important; }';
      document.head.appendChild(style);
    };
    window.addEventListener('touchstart', handleTouchStart, { once: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className="custom-cursor" 
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }} 
    />
  );
}

function App() {
  return (
    <>
      <BrowserRouter basename="/MyProfileSite">
        <CustomCursor />
        <Routes>
          <Route path = "/" element = {<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
