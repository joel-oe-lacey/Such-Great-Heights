import React, { Component } from 'react';
import './AreaContainer.scss'
import Area from '../Area/Area'
import Listing from '../Listing/Listing.js'

const AreaContainer = (props) => {
    let cards;
    if (!props.listings) {
    cards = props.data.map(area => {
      return <Area
      id={area.id}
      shortName={area.shortName}
      name={area.name}
      description={area.description}
      />
    })
    } else {
    cards = props.listings.map(listing => {
      return <Listing id={listing.id} name={listing.name} area_id={listing.area_id} />
    })
    }

    return (
      <section>
      <div className='welcome-message'>
      <h1 className='welcome-h1'>Welcome!</h1>
      <h3 className='message-h3'>We hope you find the perfect room for your {props.tripType}. Please select an area to view it's listings.</h3>
      </div>
      <section className='area-card-container'>
        {cards}
      </section>
      </section>
    )
  }

  export default AreaContainer;
