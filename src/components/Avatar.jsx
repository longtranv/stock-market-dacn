import React, { useState } from 'react'
import Ava from './../assets/avatar.png'

const Avatar = () => {

    const [isHidden, SetisHidden] = useState(true);

    const toggleVisibility = ()=>{
        SetisHidden(!isHidden)
    }



  return (
    <>
    
<button onClick={toggleVisibility} id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className={`flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 ${!isHidden?"focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600":""}`} type="button">
    <span className="sr-only">Open user menu</span>
    <img className="w-8 h-8 rounded-full" src={Ava} alt="user photo"/>
</button>
{isHidden? null : (
<div onMouseLeave={toggleVisibility} id="dropdownAvatar" className="right-5 absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div className="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>)}

    </>
  )
}

export default Avatar