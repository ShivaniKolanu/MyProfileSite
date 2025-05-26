import './App.css'
import MainPage from './pages/MainPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const updatePosition = useCallback(
    debounce((e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }, 5),
    []
  );

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition, { passive: true });
    return () => document.removeEventListener('mousemove', updatePosition);
  }, [updatePosition]);

  return (
    <div 
      className="custom-cursor" 
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
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
