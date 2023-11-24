import React from 'react'
import {BiSolidDownArrow} from 'react-icons/bi'

function OpenOrders() {
  return (
    <div>
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Pair
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className='flex'>
                    <div className='basis-0 flex flex-row items-center cursor-pointer '>
                        <p className='mr-2'>Type</p>
                        <BiSolidDownArrow size={10}/>
                    </div>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                <div className='flex'>
                    <div className='basis-0 flex flex-row items-center cursor-pointer '>
                        <p className='mr-2'>Type</p>
                        <BiSolidDownArrow size={10}/>
                    </div>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</div>

    </div>
  )
}

export default OpenOrders