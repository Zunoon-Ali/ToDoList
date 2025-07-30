import React from 'react'
import Navbar from './components/Navbar'
import ToDoContainer from './components/ToDoContainer'

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-300">
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full overflow-hidden">
        <ToDoContainer />
      </main>
    </div>
  )
}

export default App
