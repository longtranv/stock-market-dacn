import React from 'react'
import Logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import NavLink from './NavLink'
import Avatar from './Avatar'
import Lookup from './Lookup'
import { BiSolidWallet } from 'react-icons/bi'
import { RiFileList3Fill } from 'react-icons/ri'
import { IoIosGift } from "react-icons/io";
import { useSelector } from 'react-redux'

function Navbar() {

  const user = useSelector((state)=>state.user.currentUser);
  const navigate = useNavigate()


  return (
    <nav className='bg-white'>
      <div className='flex items-center font-medium justify-between'>
        <div className='flex flex-1 items-center'>
        <div className='z-50 p-5 md:w-auto w-full'>
          <img src={Logo} alt='logo' className='md:cursor-pointer h-9'></img>
        </div>
        <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
          <li>
            <Link to="/" className='py-7 px-3 inline-block'> Market </Link>
          </li>
          <NavLink />
        </ul>
        </div>
        <div className='flex flex-1 items-center justify-end mr-12'>

        
        <div className='flex'>
          <div className='mr-4'>
            <Lookup />
          </div>
          {user?
          <div className='flex flex-1 items-center justify-end mr-12'><Link to="/wallet">
            <div className='mx-8'>
              <BiSolidWallet className="hover:text-[#FCD535]" size={25} />
            </div>
          </Link>
          <div>
            <Link to='/order'>
            <RiFileList3Fill size={25} /></Link>
          </div><div className='md:block hidden mx-4'>
          <Avatar />
        </div></div>:<button onClick={()=>navigate('/login')} className='bg-yellow flex items-center justify-center h-10 w-20 text-black rounded'>
            <IoIosGift size={14}/>
            <span>login</span>
            </button>}
        </div>


        
        </div>
        {/*MOBILE*/}
        <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4`}>
          <li>
            <Link to="/" className='py-7 px-3 inline-block'>Home</Link>
          </li>
          <NavLink />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar