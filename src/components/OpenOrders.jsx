import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { useSelector } from 'react-redux';

function OpenOrders() {
  const [sortByType, setSortByType] = useState('asc'); // 'asc' or 'desc'
  const [sortByDate, setSortByDate] = useState('asc'); // 'asc' or 'desc'
  const [orders, setOrders] = useState([])
  const [disable, setDisable] = useState(false)

  const user = useSelector((state)=>state.user.currentUser);

  useEffect(()=>{
    const fetchData = async ()=>{
        const {data} = await axios.get('https://market-stock.onrender.com/orderlist', {
            params:{
              userId: user.user.id
            },
            headers: {
              Authorization: `Bearer ${user?.tokens.access.token}`
            }
        })
        setOrders(data)
    }
    fetchData();
  },[])

  // Dummy data for illustration
  const handleSortByType = () => {
    setSortByType((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const handleSortByDate = () => {
    setSortByDate((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const handleCancel = async (e, id)=>{
    e.preventDefault();
    setDisable(true);
    await axios.post('https://market-stock.onrender.com/cancel-order', {
      id: id
    }, {
      headers: {
        Authorization: `Bearer ${user?.tokens.access.token}`
      }
    }).then().catch((error)=>{});

    setDisable(false);
  }

  const sortedOrders = [...orders].sort((a, b) => {
    // Sorting logic based on the type and date

    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    if (sortByDate === 'asc') {
      return a.orderType.localeCompare(b.orderType) || dateA - dateB;
    } else {
      return b.orderType.localeCompare(a.orderType) || dateB - dateA;
    }
  });

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          {/* Add filter components or buttons here */}
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Pair
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center cursor-pointer" onClick={handleSortByType}>
                  <p className="mr-2">Type</p>
                  {sortByType === 'asc' ? <BiSolidDownArrow size={10} /> : <BiSolidUpArrow size={10} />}
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center cursor-pointer" onClick={handleSortByDate}>
                  <p className="mr-2">Date</p>
                  {sortByDate === 'asc' ? <BiSolidDownArrow size={10} /> : <BiSolidUpArrow size={10} />}
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedOrders.map((order, index) => (
              <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <td className="px-6 py-3">{order.status}</td>
                <td className="px-6 py-3">{order.symbol}</td>
                <td className="px-6 py-3">{order.orderType}</td>
                <td className="px-6 py-3">{order.created_at}</td>
                <td className="px-6 py-3">${order.price}</td>
                <td className="px-6 py-3">{order.quantity}</td>
                <td className='px-6 py-3'><button onClick={(event)=>handleCancel(event, order._id)} disabled={disable} className={`bg-red_button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${disable?'opacity-50 cursor-not-allowed':''}`}>
                {disable?<svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  </svg>:<p className="mx-auto tracking-wide">cancel</p>}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OpenOrders;
