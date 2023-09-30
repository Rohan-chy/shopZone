import React from 'react'
import {NavLink } from 'react-router-dom';


const Header = ({searching,count}) => {

  return (
    <header className='flex justify-between p-5 bg-[#3be03b] items-center '>
        <NavLink to={"/"}><h1 className='text-white font-bold text-2xl'>ShopZone</h1></NavLink>
        <div>
        <input type="text"placeholder='search products'onChange={searching}className='p-2 outline-none' />
        <NavLink to={"/cart"}>
        <i class="fa fa-shopping-cart" aria-hidden="true" style={{color:"white",padding:"10px",marginLeft:"2px",fontSize:"40px"}}>
          {
            count!==0?<sup>{count}</sup>:''
          }
        </i>
        </NavLink>
        </div>

    </header>
  )
}

export default Header;