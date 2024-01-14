import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import { AAPL } from '../../TimeSeriesTest';

function CandlestickChart({tradeStock}) {
  const [data, setData] = useState(tradeStock);

//   useEffect(() => {
//     // Replace with your MongoDB API endpoint to fetch time series data
//     axios.get('your-mongodb-api-endpoint')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);


  const series = [{
    data: data.series?.map((item) => {
      // Convert ISO string to a Date object
      const dateObject = new Date(item.timestamp);

      // Extract year, month, and day
      const year = dateObject.getFullYear();
      const month = dateObject.getMonth() + 1; // Months are zero-based, so add 1
      const day = dateObject.getDate();

      // Construct the date part string
      const datePart = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
      return{
      x: datePart,
      y: [item.open, item.high, item.low, item.high],
    }}),
  }];

  const options = {
    chart: {
      type: 'candlestick',
      height: 300,
    },
    title: {
      text: 'Candlestick Chart',
    },
    xaxis: {
      type: 'datetime',
    },
  };

  return (
    <div className="flex-1">
      <ReactApexChart options={options} series={series} type="candlestick" height={350} width={1000} />
    </div>
  );
}

export default CandlestickChart;
