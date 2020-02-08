import React from 'react';
import './Listing.scss'
import { NavLink } from "react-router-dom";

const Listing = ({ id, name, area_id }) => {
    return (
      <section className="listing">
        <h3>{name}</h3>
        <img src={`../../images/${id}_a.jpg`} alt={name} />
        <NavLink to={`/areas/${area_id}/listings/${id}`}>
          <button>View Details</button>
        </NavLink>
      </section>
    );
}

export default Listing;
