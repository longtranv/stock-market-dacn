import React from 'react'

function NavLink() {
    const links =[
        {name: 'Wallet'},
        {name: 'Market'},
        {name: "orders"},
    ]
  return (
    <>
    {
        links.map(link=>(
            <div>
                <div className='px-3 text-left md:cursor-pointer'>
                    <h1 className='py-7'>{link.name}</h1>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default NavLink