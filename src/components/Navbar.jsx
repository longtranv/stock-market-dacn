import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import Avatar from './Avatar'
import Lookup from './Lookup'
import {BiSolidWallet} from'react-icons/bi'
import {RiFileList3Fill} from 'react-icons/ri'

function Navbar() {
  return (
    <nav className='bg-white'>
      <div className='flex items-center font-medium justify-around'> 
        <div className='z-50 p-5 md:w-auto w-full'>
          <img src={Logo} alt='logo' className='md:cursor-pointer h-9'></img>
        </div>
        <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
          <li>
            <Link to="/" className='py-7 px-3 inline-block'>Home</Link>
          </li>
          <NavLink/>
        </ul>
        <div className='flex'>
          <div className=''>
            <Lookup/>
          </div>
          <div className='mx-8'>
            <BiSolidWallet size={25}/>
          </div>
          <div>
            <RiFileList3Fill size={25}/>
          </div>
        </div>
          
        
        <div className='md:block hidden'>
          <Avatar/>
        </div>
        {/*MOBILE*/}
        <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4`}>
        <li>
            <Link to="/" className='py-7 px-3 inline-block'>Home</Link>
          </li>
          <NavLink/>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar