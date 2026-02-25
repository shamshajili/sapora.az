import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reviews from './pages/Reviews'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  )
}

export default App