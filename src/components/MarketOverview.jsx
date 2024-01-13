// MarketOverview.js
import React, { useEffect, useState } from 'react';
import OverviewBox from './OverviewBox';
import axios from 'axios';

const MarketOverview = () => {

  const[stocks, setStocks] = useState([]);
  const[highlightStocks, setHighLightStock] = useState([]);
  const[topChangeStocks, settopChangeStock] = useState([]);
  const[topVolumeStocks, settopVolumeStocks] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const stocks = await axios.get('http://localhost:5000/stocklist')
      .catch(function(error){
        console.log(error.toJSON());
      })
      const changes = await axios.get('http://localhost:5000/changelist')
      .catch(function(error){
        console.log(error.toJSON());
      })
      console.log("toi day r leliu");
      stocks.data.map((stock)=>{
        const matchChange = changes.data.find((element)=>element.symbol===stock.name);
        console.log(stock.metadata.company)
        Object.assign(stock, matchChange);
      })
      setStocks(stocks.data);
    }
    fetchData();
    
    console.log(`kiem tra mang rong`)
    console.log(stocks)
    const topPrice = stocks.map((element)=>element.open>200);
    setHighLightStock(topPrice);
    const topChange = stocks.map((element)=>element.change>4);
    settopChangeStock(topChange);
    const topVolume = stocks.map((element)=>element.volume>100);
    settopVolumeStocks(topVolume);
  },[])

  return (
    <div className="flex flex-wrap">
      <OverviewBox title="Highlight Stocks" stocks={highlightStocks} />
      <OverviewBox title="Top Change Stocks" stocks={topChangeStocks} />
      <OverviewBox title="Top Volume Stocks" stocks={topVolumeStocks} />
    </div>
  );
};

export default MarketOverview;
