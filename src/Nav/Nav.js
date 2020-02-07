import React from 'react';
import './Nav.scss'
import { Link } from 'react-router-dom'


const Nav = ({ userName }) => {
  return (
    <section className='nav-bar'>
      <img className='logo-nav'></img>
      <h2 className='username'>welcome, {userName}!</h2>
      <Link to='/areas'><button className='view-areas-btn'>View Areas</button></Link>
      <Link to='/'><button className='log-out-btn'>Log Out</button></Link>
    </section>
  )
}

export default Nav;
