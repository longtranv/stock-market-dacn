import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {BsSortDown, BsSortDownAlt} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const StockList = ({stocks}) => {

    const [sortKey, setSortKey] = useState('price');
    const [sortOrder, setSortOrder] = useState('asc');



    const navigate = useNavigate();
    const handleNavigate = (symbol) => {
      navigate(`/trade/${symbol}`);
    }

    useEffect(()=>{
    }, [])

    const handleSort = (key)=>{
        if(key===sortKey){
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        }else{
          setSortKey(key);
          setSortOrder('asc')
        }
    }
    const sortedStocks = [...stocks].sort((a,b )=>{
        const aValue = a[sortKey];
        const bValue = b[sortKey];

        return sortOrder === 'asc'? aValue-bValue : bValue - aValue;
    })
  return (
    <div className='overflow-x-auto w-11/12 mt-10'>
        <table className='w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
            <tr>
              <th>
              <div className='flex'>
              <div className="basis-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                Logo
              </div>
              </div>
              </th>
            <th>
              <div className='flex'>
              <div className="basis-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={()=>handleSort('name')}>
                Symbol
                {sortOrder==='asc' && sortKey==='name'? <BsSortDownAlt size={20}/>:<BsSortDown size={20}/>}
              </div>
              </div>
            </th>
            <th>
              <div className='flex'>
              <div className="basis-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={()=>handleSort('open')}>
                Price
                {sortOrder==='asc' && sortKey==='open'? <BsSortDownAlt size={20}/>:<BsSortDown size={20}/>}
              </div>
              </div>
            </th>
            <th>
              <div className='flex'>
              <div className="basis-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={()=>handleSort('change')}>
                Change
                {sortOrder==='asc' && sortKey==='change'? <BsSortDownAlt size={20}/>:<BsSortDown size={20}/>}
              </div>
              </div>
            </th>
            <th>
              <div className='flex'>
              <div className="basis-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={()=>handleSort('volume')}>
                Volume
                {sortOrder==='asc' && sortKey==='volume'? <BsSortDownAlt size={20}/>:<BsSortDown size={20}/>}
              </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedStocks.map((stock) => (
            <tr key={stock._id} onClick={()=>handleNavigate(stock.name)} className='hover:bg-slate-100 cursor-pointer'>
              <td className="px-6 py-4 whitespace-nowrap"><img src={stock.metadata?.logo} alt="dynamic logo" height={45} width={45} /></td>
              <td className="px-6 py-4 whitespace-nowrap">{stock.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">${stock.open}</td>
              <td className={`px-6 py-4 whitespace-nowrap ${stock.change<0?"text-red":"text-green"}`}>{stock.change}%</td>
              <td className="px-6 py-4 whitespace-nowrap">{stock.volume}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default StockList