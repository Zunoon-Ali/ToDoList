import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='w-full flex items-center justify-between py-1 bg-violet-800 text-white'>
        <div className="logo mx-6">
          <span className='text-xl font-bold'>Task Tracker</span>
        </div>
        <div className="navLinks mx-8">
          <ul className='flex gap-8 text-sm'>
            <li><a href="#" className='line font-bold  text-white'> Home </a></li>
            <li><a href="#" className='line font-bold  text-white'> Todo List</a> </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
