import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <img src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png" alt="" />
        <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default Navbar