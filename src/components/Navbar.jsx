import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import Avatar from './Avatar'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <nav className='bg-white'>
      <div className='flex items-center font-medium justify-around'> 
        <div>
          <img src={Logo} alt='logo' className='md:cursor-pointer h-9'></img>
        </div>
        <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
          <li>
            <Link to="/" className='py-7 px-3 inline-block'>Home</Link>
          </li>
          <NavLink/>
        </ul>
        <div>
          <SearchBar/>
        </div>
        <div>
          <Avatar/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar