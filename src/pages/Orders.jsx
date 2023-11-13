import React from 'react'
import Navbar from '../components/Navbar'

function Orders() {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col'> 
            <p className='leading-10 text-3xl'>Open Orders</p>
        </div>

    </div>
  )
}

export default Orders