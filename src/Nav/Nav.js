import React from 'react';

const Nav = (props) => {
  return (
    <section className='nav-bar'>
      <img className='logo-nav'>
      <h2 className='username'>Welcome, [user]!</h2>
      <button className='view-areas-btn'>View Areas</button>
      <button className='log-out-btn'>Log Out</button>
    </section>
  )
}
