import React from 'react'
import { Link } from 'react-router-dom'

const Reviews = () => {
  return (
    <div className="min-h-screen">
      <Link to="/" className="text-blue-500">
        ← Menüye qayıt
      </Link>

      <h1 className="text-xl font-bold mt-4">Rəy Bildirmə</h1>
    </div>
  )
}

export default Reviews