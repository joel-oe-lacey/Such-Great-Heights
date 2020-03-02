import React from 'react';
import './Nav.scss'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';



const Nav = ({ userName }) => {
  return (
    <section className='nav-bar'>
      <img className='logo-nav' src="/../../Images/mountain.svg" alt="A lofty mountain"></img>
      <h2 className='username'>{`Welcome, ${userName}!`}</h2>
      <NavLink to='/favorites'><button className='view-favorites-btn'>View Favorites</button></NavLink>
      <NavLink to='/areas'><button className='view-areas-btn'>View Areas</button></NavLink>
      <NavLink to='/'><button className='log-out-btn'>Log Out</button></NavLink>
    </section>
  )
}

export default Nav;

Nav.propTypes = {
  userName: PropTypes.string,
};
