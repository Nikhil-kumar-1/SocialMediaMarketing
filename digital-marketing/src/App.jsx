import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'

import Home from './components/Home'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <Navbar />
          <Home/>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App