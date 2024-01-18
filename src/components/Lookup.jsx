import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {FaSearchDollar} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Lookup() {
  const [isHidden, setIsHidden] = useState(true)
  const [searchIconColor, setSearchIconColor] = useState('black')
  const [stockSymbols, setStockSymbols] = useState([])
  const [query, setQuery] = useState([])

  const navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async()=>{
      const stocksList = await axios.get('http://ec2-52-65-120-170.ap-southeast-2.compute.amazonaws.com:3000/stocklist')
      .catch(function(error){
        console.log(error.toJSON());
      })
      const changes = await axios.get('http://ec2-52-65-120-170.ap-southeast-2.compute.amazonaws.com:3000/changelist')
      .catch(function(error){
        console.log(error.toJSON());
      })
      stocksList.data.map((stock)=>{
        const matchChange = changes.data.find((element)=>element.symbol===stock.name);
        Object.assign(stock, matchChange);
      })
      setStockSymbols(stocksList.data);
    }
    fetchData();

  },[])

  const handleNavigate = (path)=>{
    navigate(path);
  }

  const ToggleHide = ()=>{
    setIsHidden(!isHidden)
    setQuery([])
  }
  const handleIconClick = ()=>{
    if(searchIconColor === "black"){
    setSearchIconColor('orange')
  }else setSearchIconColor('black')
  }

  const handleInputChange = (e)=>{
    setQuery(stockSymbols.filter((product)=> product.name.toLowerCase().includes(e.target.value.toLowerCase())||product.metadata?.company.toLowerCase().includes(e.target.value.toLowerCase())));
  }
  return (
    <>
    <div className='' onClick={ToggleHide}>
      <FaSearchDollar size={25} onClick={handleIconClick} style={{color: searchIconColor , cursor: 'pointer'}} />
    </div>
    {isHidden?null
    : (
      <div onMouseLeave={event => {
        ToggleHide()
        handleIconClick()
      }} className=' mt-2 right-80 absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-96 dark:bg-gray-700 dark:divide-gray-600'>
        
        <input onChange={handleInputChange} type='search' name='search' placeholder='Search ticker symbol' className='w-full border-0 border-gray-300 bg-white h-11 px-5 pr-16 rounded-lg text-sm focus:outline-none'/>
        <div className='flex flex-col h-auto'>
          <div className='flex flex-col overflow-auto h-80 no-scrollbar'>
          {query.length?
            query.map((product)=>(
              <div onClick={()=>handleNavigate(`/trade/${product.name}`)} className='flex flex-row justify-between hover:bg-slate-100 cursor-pointer'>
                <div className='flex flex-row justify-between w-1/4'>
                  <img src={product.metadata?.logo} height={16} width={16} alt="image" className='w-8 h-8 ' />
                  <p className=''>{product.name}</p>
                </div>
                <p className=''>${product.open}</p>
                <p className=''>{product.volume}</p>
              </div>

            )):null
          }
          </div>
        </div>

      </div>
    )

    }
    </>
  )
}

export default Lookup