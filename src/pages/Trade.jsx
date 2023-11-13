import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CandlestickChart from '../components/CandleStick'
import LineChartCompo from '../components/LineChart'
import ChartToggle from '../components/ChartToggle'
import OpenOrders from '../components/OpenOrders'

function Trade() {

  const [WhatChart, setWhatChart] = useState("line");
  const [OrderType, setOrderType] = useState("limit");


  const toggleCandlestick = (chartType)=>{
    setWhatChart(chartType);
  }
  const toggleOrder = (ordertype)=>{
    setOrderType(ordertype);
  }
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col bg-gray-50'>
        <div className='flex flex-row bg-gray-50 p-2 justify-around border-b'>
          <div className='flex border-r-2 border-solid p-3'>
            <h1 className='text-xl font-medium mr-6'>AAPL</h1>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-green text-lg'>200</p>
            <p className='text-xs'>$200</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-normal text-xs text-gray_blur'>24h change</p>
            <p className='text-xs'>$200</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-normal text-xs text-gray_blur'>24h high</p>
            <p className='text-xs'>$200</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-normal text-xs text-gray_blur'>24h low</p>
            <p className='text-xs'>$200</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-normal text-xs text-gray_blur'>24h volume</p>
            <p className='text-xs'>300</p>
          </div>
        </div>
        <div className='flex flex-col justify-around items-center'>
          
          <div className='flex flex-row m-6'>
            <div className={`cursor-pointer text-sm font-medium leading-5 mr-6 ${WhatChart==="line"?'text-orange':'text-gray_blur'}`} onClick={()=>toggleCandlestick("line")}>Line Chart</div>
            <div className={`cursor-pointer text-sm font-medium leading-5 mr-6 ${WhatChart==="candle"?'text-orange':'text-gray_blur'}`} onClick={()=>toggleCandlestick("candle")}>CandleStick</div>
          </div>
          {WhatChart==="candle" ? (
            <CandlestickChart/>
          ) : (
            <LineChartCompo/>
          )}
          <div className='flex flex-col bg-white w-515 justify-between'>
            <div className='flex flex-row m-4'>
              <p className={`cursor-pointer text-sm font-medium leading-5 mr-6 ${OrderType==="limit"?'text-orange':'text-gray_blur'}`} onClick={()=>toggleOrder('limit')}>Limit</p>
              <p className={`cursor-pointer text-sm font-medium leading-5 mr-6 ${OrderType==="market"?'text-orange':'text-gray_blur'}`} onClick={()=>toggleOrder('market')}>Market</p>
            </div>
            <div className='flex flex-row justify-around'>
              <div className='flex flex-col w-56'>
                <div className='hover:border-orange w-full  h-10 flex flex-row items-center leading-6 rounded bg-gray_input border border-solid my-2.5'>
                  <p className=' text-gray_text_input self-stretch mt-1.5 mr-1'>Price</p>
                  <input type="text" className='outline-none h-full bg-inherit opacity-100 border-none text-right'/>
                </div>
                <div className='hover:border-orange min-w-fit w-full h-10 flex flex-row items-center leading-6 rounded bg-gray_input border border-solid my-2.5'>
                  <p className=' text-gray_text_input self-stretch mt-1.5 mr-1'>Amount</p>
                  <input type="text" className='w-full outline-none h-full bg-inherit opacity-100 border-none text-right '/>
                </div>
                <button className='bg-green_button rounded my-4 w-full h-10 text-white'>BUY BNB</button>
              </div>
              <div className='flex flex-col w-56'>
              <div className='hover:border-orange w-full  h-10 flex flex-row items-center leading-6 rounded bg-gray_input border border-solid my-2.5'>
                  <p className=' text-gray_text_input self-stretch mt-1.5 mr-1'>Price</p>
                  <input type="text" className='outline-none h-full bg-inherit opacity-100 border-none text-right'/>
                </div>
                <div className='hover:border-orange min-w-fit w-full h-10 flex flex-row items-center leading-6 rounded bg-gray_input border border-solid my-2.5'>
                  <p className=' text-gray_text_input self-stretch mt-1.5 mr-1'>Amount</p>
                  <input type="text" className='w-full outline-none h-full bg-inherit opacity-100 border-none text-right flex-1'/>
                </div>
                <button className='bg-red_button rounded my-4 w-full h-10 text-white'>SELL BNB</button>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t flex'>
            <OpenOrders/>
        </div>
      </div>
    </div>
  )
}

export default Trade