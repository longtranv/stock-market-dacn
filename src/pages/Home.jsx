import React from 'react'
import Navbar from '../components/Navbar'
import StockList from '../components/StockList'
import Footer from '../components/Footer'
import MarketOverview from '../components/MarketOverview'

function Home() {
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

export default Home