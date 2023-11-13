import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {FaSearchDollar} from 'react-icons/fa'

function Lookup() {
  const [isHidden, setIsHidden] = useState(true)
  const [searchIconColor, setSearchIconColor] = useState('black')
  const [stockSymbols, setStockSymbols] = useState([])
  const [query, setQuery] = useState([])

  useEffect(()=>{
    const FetchData = async ()=>{
    const {data} = await axios.get('https://fakestoreapi.com/products')
    .catch(function (error) {
      console.log(error.toJSON());
    });
    setStockSymbols(data)
  }
  FetchData()

  },[])

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
    setQuery(stockSymbols.filter((product)=> product.title.toLowerCase().includes(e.target.value.toLowerCase())))
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
              <div className='flex flex-row justify-between hover:bg-slate-100 cursor-pointer'>
                <div className='flex flex-row justify-between w-1/4'>
                  <img src={product.image} alt="image" className='w-8 h-8 ' />
                  <p className=''>{product.id}</p>
                </div>
                <p className=''>{product.price} $</p>
                <p className=''>quant: 100</p>
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