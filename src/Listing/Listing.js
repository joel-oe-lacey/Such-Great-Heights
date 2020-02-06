import React from 'react';
import './Listing.scss'

const Listing = ({ id, name, viewListingInfo }) => {
    return (
        <section className='listing'>
            <h3>{name}</h3>
            <img src={`../../images/${id}_a.jpg`} alt={name}/>
            <button onClick={() => viewListingInfo(id)}>View Details</button>
        </section>
    )
}

export default Listing;
