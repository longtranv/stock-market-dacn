// MarketOverview.js
import React, { useEffect, useState } from 'react';
import OverviewBox from './OverviewBox';
import axios from 'axios';

const MarketOverview = () => {

  const [stocks, setStocks] = useState([]);
  const [highlightStocks, setHighLightStock] = useState([]);
  const [topChangeStocks, settopChangeStock] = useState([]);
  const [topVolumeStocks, settopVolumeStocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stocksList = await axios.get('http://localhost:5000/stocklist');
        const changes = await axios.get('http://localhost:5000/changelist');

        const updatedStocks = stocksList.data.map((stock) => {
          const matchChange = changes.data.find((element) => element.symbol === stock.name);
          return { ...stock, ...matchChange };
        });

        setStocks(updatedStocks);
        const topPrice = updatedStocks.filter((element) => element.open > 200);
        setHighLightStock(topPrice);
        const topChange = updatedStocks.filter((element) => element.change > 4);
        settopChangeStock(topChange);
        const topVolume = updatedStocks.filter((element) => element.volume > 100);
        settopVolumeStocks(topVolume);
      } catch (error) {
        console.log(error.toJSON());
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap">
      <OverviewBox title="Highlight Stocks" stocks={highlightStocks} />
      <OverviewBox title="Top Change Stocks" stocks={topChangeStocks} />
      <OverviewBox title="Top Volume Stocks" stocks={topVolumeStocks} />
    </div>
  );
};

export default MarketOverview;
