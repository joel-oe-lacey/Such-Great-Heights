import React from 'react';
import './Nav.scss'

const Nav = ({ userName }) => {
  return (
    <section className='nav-bar'>
      <img className='logo-nav'></img>
      <h2 className='username'>welcome, {userName}!</h2>
      <button className='view-areas-btn'>View Areas</button>
      <button className='log-out-btn'>Log Out</button>
    </section>
  )
}

export default Nav;
