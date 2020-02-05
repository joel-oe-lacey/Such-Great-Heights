import React from 'react';
import './Area.scss'

const Area = (props) => {
    return (
        <div className='area-card'>
          <h2 className='short-name'>{props.shortName}</h2>
          <h3 className='area-name'>{props.name}</h3>
          <p className='area-description'>{props.description}</p>
        </div>
    )
}

export default Area;
