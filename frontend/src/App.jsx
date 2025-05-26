import './App.css'
import MainPage from './pages/MainPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    document.addEventListener('mousemove', updatePosition, { passive: true });
    return () => document.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div className="custom-cursor" style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
    }} />
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
