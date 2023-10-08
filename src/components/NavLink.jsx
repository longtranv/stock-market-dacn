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
                <div>
                    <h1>{link.name}</h1>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default NavLink