import './App.css'
import MainPage from './pages/MainPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter basename="/MyProfileSite">
      <Routes>
      <Route path = "/" element = {<MainPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
