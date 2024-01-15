import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavLink() {
    const links =[
        {name: 'trade'},
    ]
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/trade/TSLA')
    }

  return (
    <>
    {
        links.map(link=>(
            <div>
                <div onClick={handleClick} className='px-3 text-left md:cursor-pointer'>
                    <h1 className='py-7'>{link.name}</h1>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default NavLink