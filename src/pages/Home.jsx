import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import StockList from '../components/StockList'
import Footer from '../components/Footer'
import MarketOverview from '../components/MarketOverview'
import axios from 'axios'

function Home() {

  const[stocks, setStocks] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const stocksList = await axios.get('http://localhost:5000/stocklist')
      .catch(function(error){
        console.log(error.toJSON());
      })
      const changes = await axios.get('http://localhost:5000/changelist')
      .catch(function(error){
        console.log(error.toJSON());
      })
      console.log("toi day r leliu");
      stocksList.data.map((stock)=>{
        const matchChange = changes.data.find((element)=>element.symbol===stock.name);
        Object.assign(stock, matchChange);
      })
      setStocks(stocksList.data);
    }
    fetchData();
  },[])

  return (
    <section>
      <Navbar/>
      <MarketOverview/>
      <div className='flex justify-center items-center'>
        <StockList stocks={stocks}/>
      </div>
      <Footer/>
    </section>
  )
}

export default Home