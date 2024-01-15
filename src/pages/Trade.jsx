import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import CandlestickChart from '../components/CandleStick'
import LineChartCompo from '../components/LineChart'
import ChartToggle from '../components/ChartToggle'
import OpenOrders from '../components/OpenOrders'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react'

function Trade() {

  const [stock, setStock] = useState(null);
  const [todayData, setTodayData] = useState(null);
  const [WhatChart, setWhatChart] = useState("line");
  const [OrderType, setOrderType] = useState("limit");
  const [priceInputValueBuy, setPriceValueBuy] = useState('');
  const [amountInputValueBuy, setAmountValueBuy] = useState('');
  const [priceInputValueSell, setPriceValueSell] = useState('');
  const [amountInputValueSell, setAmountValueSell] = useState('');
  const [message, setMessage] = useState('');
  const [serverMessage, SetServerMessage] = useState(false)

  const {ticker} = useParams();
  const user = useSelector((state)=>state.user.currentUser);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async()=>{
      const {data} = await axios.get('https://market-stock.onrender.com/stock', {
        params: {
          symbol: ticker
        }
      });
      setStock(data)
      setTodayData(data.series[data.series.length-1]);
    }
    fetchData();
  }, [ticker])


  const toggleCandlestick = (chartType)=>{
    setWhatChart(chartType);
  }
  const toggleOrder = (ordertype)=>{
    setOrderType(ordertype);
  }

  const handleInputChange = (e, whichIput) => {
    setMessage('')
    // Use a regular expression to allow only numbers
    const regex = /^\d*\.?\d*$/;

    if (e.target.value === '' || regex.test(e.target.value)) {
      // Update the state only if the input is a number or empty
      switch (whichIput) {
        case 'pricesell':
          setPriceValueSell(e.target.value);
          break;
        case 'amountsell':
          setAmountValueSell(e.target.value);
          break;
        case 'pricebuy':
          setPriceValueBuy(e.target.value);
          break
        case 'amountbuy':
          setAmountValueBuy(e.target.value);
        default:
          break;
      }
    }
  };

  const handleOpen = (value)=>SetServerMessage(value);

  const handleClick = async(e, type)=>{
    e.preventDefault();
    if(!user){
      navigate('/login');
    }
    else{
      if(type==='buy'){
        if(priceInputValueBuy===''||priceInputValueBuy==0||amountInputValueBuy===''||amountInputValueBuy==0){
          setMessage('please enter the price and amount to buy stock')
        }
        else{
          await axios.post('https://market-stock.onrender.com/order',{
            userId: user.user.id,
            symbol: ticker,
            quantity: amountInputValueBuy,
            orderType: 'buy',
            price: priceInputValueBuy,
            status: 'pending',
            created_at: new Date().toISOString(),
          }, {
            headers: {
              Authorization: `Bearer ${user.tokens.access.token}`
            }
          }).then(response=>{
            if(response.status >= 200 && response.status < 300){
              setMessage('API call was successful');
              SetServerMessage(!serverMessage);
            }
          }).catch(function(error){
            setMessage(error.response.data.message);
            SetServerMessage(!serverMessage);
          })
        }
      }
      if(type==='sell'){
        if(priceInputValueSell===''||priceInputValueSell==0||amountInputValueSell===''||amountInputValueSell==0){
          setMessage('please enter the price and amount to sell stock')
        }
        else{
          await axios.post('https://market-stock.onrender.com/order',{
            userId: user.user.id,
            symbol: ticker,
            quantity: amountInputValueSell,
            orderType: 'sell',
            price: priceInputValueSell,
            status: 'pending',
            created_at: new Date().toISOString(),
          }, {
            headers: {
              Authorization: `Bearer ${user.tokens.access.token}`
            }
          }).then(response=>{
            if(response.status >= 200 && response.status < 300){
              setMessage('API call was successful');
              SetServerMessage(!serverMessage);
            }
          }).catch(function(error){
            console.log(error)
            setMessage(error.response.data.message);
            SetServerMessage(!serverMessage);
          })
        }
      }
    }
  }

  return (
    <div>
      <Dialog open={serverMessage} handler={handleClick} size='xs'>
        <DialogHeader>MESSAGE</DialogHeader>
        <DialogBody>
          <div className='flex justify-around'>
            <img height={15} width={20} src={message==="API call was successful"?
            "https://w7.pngwing.com/pngs/238/160/png-transparent-computer-icons-advertising-business-service-email-marketing-success-angle-service-people.png"
            :`https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_640.png`} alt="" />
            <p className={message==="API call was successful"?"text-green":'text-red'}>{message}</p>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button 
          variant="text"
          color="red"
          onClick={() => handleOpen(false)}
          className="mr-1">
            <span>cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="blue"
            onClick={() => handleOpen(false)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <Navbar/>
      <div className='flex flex-col bg-gray-50'>
        <div className='flex flex-row bg-gray-50 p-2 justify-around border-b'>
          <div className='flex border-r-2 border-solid p-3'>
            <h1 className='text-xl font-medium mr-6'>{ticker}</h1>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-green text-lg'>{todayData?.open}</p>
            <p className='text-xs'>${todayData?.open}</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-normal text-xs text-gray_blur'>24h change</p>
            <p className={`text-xs ${stock?.change<0?"text-red":"text-green"}`}>${stock?.change}</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-normal text-xs text-gray_blur'>24h high</p>
            <p className='text-xs'>${todayData?.high}</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-normal text-xs text-gray_blur'>24h low</p>
            <p className='text-xs'>${todayData?.low}</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-normal text-xs text-gray_blur'>24h volume</p>
            <p className='text-xs'>{todayData?.volume}</p>
          </div>
        </div>
        <div className='flex flex-col justify-around items-center'>
          
          <div className='flex flex-row m-6'>
            <div className={`cursor-pointer text-sm font-medium leading-5 mr-6 ${WhatChart==="line"?'text-orange':'text-gray_blur'}`} onClick={()=>toggleCandlestick("line")}>Line Chart</div>
            <div className={`cursor-pointer text-sm font-medium leading-5 mr-6 ${WhatChart==="candle"?'text-orange':'text-gray_blur'}`} onClick={()=>toggleCandlestick("candle")}>CandleStick</div>
          </div>
          {WhatChart==="candle" ? (
            <CandlestickChart tradeStock={stock}/>
          ) : (
            <LineChartCompo tradeStock={stock}/>
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
                  <input 
                  value={priceInputValueBuy}
                  onChange={(e)=>handleInputChange(e, "pricebuy")}
                  type="text" className='outline-none h-full bg-inherit opacity-100 border-none text-right'/>
                </div>
                <div className='hover:border-orange min-w-fit w-full h-10 flex flex-row items-center leading-6 rounded bg-gray_input border border-solid my-2.5'>
                  <p className=' text-gray_text_input self-stretch mt-1.5 mr-1'>Amount</p>
                  <input 
                  value={amountInputValueBuy}
                  onChange={(e)=>handleInputChange(e, 'amountbuy')}
                  type="text" className='w-full outline-none h-full bg-inherit opacity-100 border-none text-right '/>
                </div>
                <div className='text-red text-sm font-normal'>{message&&message}</div>
                <button onClick={(e)=>handleClick(e, 'buy')} className='bg-green_button rounded my-4 w-full h-10 text-white'>BUY {ticker}</button>
              </div>
              <div className='flex flex-col w-56'>
              <div className='hover:border-orange w-full  h-10 flex flex-row items-center leading-6 rounded bg-gray_input border border-solid my-2.5'>
                  <p className=' text-gray_text_input self-stretch mt-1.5 mr-1'>Price</p>
                  <input 
                  value={priceInputValueSell}
                  onChange={(e)=>handleInputChange(e, 'pricesell')}
                  type="text" className='outline-none h-full bg-inherit opacity-100 border-none text-right'/>
                </div>
                <div className='hover:border-orange min-w-fit w-full h-10 flex flex-row items-center leading-6 rounded bg-gray_input border border-solid my-2.5'>
                  <p className=' text-gray_text_input self-stretch mt-1.5 mr-1'>Amount</p>
                  <input 
                  value={amountInputValueSell}
                  onChange={(e)=>handleInputChange(e, 'amountsell')}
                  type="text" className='w-full outline-none h-full bg-inherit opacity-100 border-none text-right flex-1'/>
                </div>
                <div className='text-red text-sm font-normal'>{message&&message}</div>
                <button onClick={(e)=>handleClick(e, 'sell')} className='bg-red_button rounded my-4 w-full h-10 text-white'>SELL {ticker}</button>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t flex justify-center items-center'>
            <OpenOrders/>
        </div>
      </div>
    </div>
  )
}

export default Trade