import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='h-screen bg-cover font-[Poppins] md:bg-top bg-center'>
      <Navbar></Navbar>
      <div className='flex flex-col justify-center text-center items-center h-3/4'>
        DCMM
      </div>
    </section>
  )
}

export default App
