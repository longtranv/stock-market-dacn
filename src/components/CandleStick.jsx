import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import { AAPL } from '../../TimeSeriesTest';

function CandlestickChart() {
  const [data, setData] = useState(AAPL);

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
    data: data.map((item) => ({
      x: new Date(item.timestamp).getTime(),
      y: [item.open, item.high, item.low, item.close],
    })),
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
