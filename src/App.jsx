import React from 'react'
import Navbar from './components/Navbar'
import ToDoContainer from './components/ToDoContainer'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,       // animation duration (in ms)
  once: true,          // whether animation should happen only once
});


function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-violet-400 to-blue-900 text-gray-800">
      {/* <Navbar /> */}
      <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
        <ToDoContainer />
      </main>
    </div>
  )
}

export default App
