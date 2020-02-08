import React from 'react';
import './Area.scss';
import { Link } from 'react-router-dom';

const Area = (props) => {
    return (
        <div className='area-card'>
          <h2 className='short-name'>{props.shortName}</h2>
          <h3 className='area-name'>{props.name}</h3>
          <p className='area-description'>{props.description}</p>
          <Link to={`/area/${props.id}`}><button onClick={() => props.fetchListings(props.id)} className='view-listings-btn'>View Listings</button></Link>
        </div>
    )
}

export default Area;
