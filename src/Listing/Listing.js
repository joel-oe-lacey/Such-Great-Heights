import React from 'react';
import './Listing.scss'
import { Link } from "react-router-dom";

const Listing = ({ id, name, selectListing }) => {
    return (
      <section className="listing">
        <h3>{name}</h3>
        <img src={`../../images/${id}_a.jpg`} alt={name} />
        <Link to={`/details`}>
          <button onClick={() => selectListing(id)}>View Details</button>
        </Link>
      </section>
    );
}

export default Listing;
