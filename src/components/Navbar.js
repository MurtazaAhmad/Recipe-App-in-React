import React from 'react'
import {Link} from 'react-router-dom'
function Navbar(){

  const navstyle = {
    color:'white'
  }

  return (
    <nav className='navbar bg-dark text-light'>
    <Link to='/'>
    <h5 style={navstyle}>Logo</h5>
    </Link>
    <ul className='nav-link' >
    <Link to='/about'>
    <li className='navbar-brand' style={navstyle}>About</li>
    </Link>
    <Link to='/shop'>
    <li className='navbar-brand' style={navstyle}>Shop</li>
    </Link>
    <Link to='/contact'>
    <li className='navbar-brand' style={navstyle}>Contact</li>
    </Link>
    </ul>
    </nav>
  )
}

export default Navbar
