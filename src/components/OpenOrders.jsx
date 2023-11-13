import React from 'react'

function OpenOrders() {
  return (
    <table className='table-auto w-full'>
        <thead>
            <tr>
                <td className='cursor-pointer'>
                    Date
                </td>
                <td>
                    Symbol
                </td>
                <td>
                    Type
                </td>
                <td>
                    Side
                </td>
                <td>
                    Price
                </td>
                <td>
                    Amount
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>15/01/2002</td>
                <td>AAPL</td>
                <td>Market</td>
                <td>BUY</td>
                <td>22.1</td>
                <td>300</td>
            </tr>
        </tbody>
    </table>
  )
}

export default OpenOrders