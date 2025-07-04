import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react';
import './navbar.css'

function NavBar() {
  return (
    <div className='navbar'>
        <h2>CSI Shopping Cart</h2>
        <div className="links">
            <Link to='/'> Shop </Link>
            <Link to='/cart'> <ShoppingCart size={32}/> </Link>
        </div>
    </div>
  )
}

export default NavBar;