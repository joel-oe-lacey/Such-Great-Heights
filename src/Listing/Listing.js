import React from 'react';
import './Listing.scss'
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const Listing = ({ id, name, area_id }) => {
    return (
      <section className="listing">
        <h3>{name}</h3>
        <img src={`../../images/${id}_a.jpg`} alt={name} />
        <NavLink to={`/areas/${area_id}/listings/${id}`}>
          <button className='view-details-btn'>View Details</button>
        </NavLink>
      </section>
    );
}

export default Listing;

Listing.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  area_id: PropTypes.number
};
