import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-gray-800'>
        <div className=''>
            <h1 className='text-2xl'>Logo</h1>
        </div>

        <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
      
    </nav>
  )
}
