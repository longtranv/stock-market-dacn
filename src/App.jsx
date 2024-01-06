import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import StockList from './components/StockList'
import Footer from './components/Footer'
import MarketOverview from './components/MarketOverview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Navbar/>
      <MarketOverview/>
      <div className='flex justify-center items-center'>
        <StockList/>
      </div>
      <Footer/>
    </section>
  )
}

export default App
