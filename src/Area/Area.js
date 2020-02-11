import React from 'react';
import './Area.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Area = (props) => {
  console.log(props);
    return (
        <div className='area-card'>
          <h2 className='short-name'>{props.shortName}</h2>
          <h3 className='area-name'>{props.name}</h3>
          <p className='area-description'>{props.description}</p>
          <NavLink to={`/areas/${props.id}`}><button className='view-listings-btn'>View Listings</button></NavLink>
        </div>
    )
}

export default Area;

Area.propTypes = {
  id: PropTypes.number,
  shortName: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
};
