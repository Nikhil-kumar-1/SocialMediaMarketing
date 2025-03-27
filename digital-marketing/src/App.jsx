import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <Home/>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App