import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='w-full flex items-center justify-between mx-10 py-4'>
        <div className="logo">
             <span>Task Tracker</span>
        </div>
        <div className="navLinks">
            <ul>
                <li>Home </li>
                <li>Todo List</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
