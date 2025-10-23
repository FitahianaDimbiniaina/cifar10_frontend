import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './page/main_page.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
