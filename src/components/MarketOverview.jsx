// MarketOverview.js
import React from 'react';

const MarketOverview = () => {
  // Replace this with actual market data fetching logic
  const marketData = [
    { symbol: 'BTC/USDT', price: 60000, change: 2.5 },
    { symbol: 'ETH/USDT', price: 4000, change: -1.2 },
    // Add more market data items here
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Market Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketData.map((item) => (
          <div
            key={item.symbol}
            className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{item.symbol}</h2>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className={`text-${item.change >= 0 ? 'green' : 'red'}-600`}>
              Change: {item.change}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketOverview;
