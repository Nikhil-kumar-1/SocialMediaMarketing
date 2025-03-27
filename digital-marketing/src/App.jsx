import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <Navbar />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App