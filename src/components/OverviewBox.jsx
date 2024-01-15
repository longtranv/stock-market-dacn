import React, { useEffect } from 'react'

function OverviewBox({stocks, title}) {

    if (!stocks || stocks.length === 0) {
        return <div className='mx-4'></div>;
      }

    useEffect(()=>{
    },[])
  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock._id} className="flex justify-between items-center mb-2">
            <img className='' src={stock.metadata?.logo} alt="Dynamic image" height={20} width={20} />
            <span className='mx-8'>{stock.name}</span>
            <span className='mx-8'>${stock.open}</span>
            <span className={`mx-8 ${stock.change<0?"text-red":"text-green"}`}>{stock.change}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OverviewBox