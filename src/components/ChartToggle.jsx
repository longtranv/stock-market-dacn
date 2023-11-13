import React from 'react'

function ChartToggle({isCandlestick, toggleCandlestick}) {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-600">Candlestick Chart</span>
      <label className="relative inline-block w-10 h-4">
        <input
          type="checkbox"
          className="w-0 h-0 opacity-0"
          checked={isCandlestick}
          onChange={toggleCandlestick}
        />
        <span className="slider w-4 h-4 rounded-full bg-gray-300 absolute left-0 top-0 transition-transform duration-300 transform">
          <span className="rounded-full w-3 h-3 bg-white absolute left-0 top-0 transition-transform duration-300 transform translate-x-0" />
        </span>
      </label>
      <span className="text-gray-600">Line Chart</span>
    </div>
  )
}

export default ChartToggle