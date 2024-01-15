import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { AAPL } from '../../TimeSeriesTest';

function LineChartCompo({tradeStock}) {

  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(tradeStock?.series);
  },[tradeStock])
  return (
    <div className='flex-1'>
        <LineChart width={1000} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="linear" dataKey="open" stroke='#8884d8'/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="timestamp"/>
            <YAxis/>
            <Tooltip/>
        </LineChart>
    </div>
  )
}

export default LineChartCompo