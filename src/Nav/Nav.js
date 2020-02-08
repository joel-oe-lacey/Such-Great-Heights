import React from 'react';
import './Nav.scss'
import { NavLink } from 'react-router-dom'


const Nav = ({ userName }) => {
  return (
    <section className='nav-bar'>
      <img className='logo-nav'></img>
      <h2 className='username'>{`welcome, ${userName}!`}</h2>
      <NavLink to='/areas'><button className='view-areas-btn'>View Areas</button></NavLink>
      <NavLink to='/'><button className='log-out-btn'>Log Out</button></NavLink>
    </section>
  )
}

export default Nav;
