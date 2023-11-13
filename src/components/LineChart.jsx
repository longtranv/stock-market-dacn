import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { AAPL } from '../../TimeSeriesTest';

function LineChartCompo() {
  return (
    <div className='flex-1'>
        <LineChart width={1000} height={300} data={AAPL} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="linear" dataKey="close" stroke='#8884d8'/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="timestamp"/>
            <YAxis/>
            <Tooltip/>
        </LineChart>
    </div>
  )
}

export default LineChartCompo