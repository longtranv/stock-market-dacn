import React from 'react'
import Navbar from '../components/Navbar'
import OpenOrders from '../components/OpenOrders'

function Orders() {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col'> 
            <p className='leading-10 text-3xl'>Open Orders</p>
            <OpenOrders/>
        </div>


    </div>
  )
}

export default Orders