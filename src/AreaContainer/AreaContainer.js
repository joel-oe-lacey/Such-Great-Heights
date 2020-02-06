import React, { Component } from 'react';
import './AreaContainer.scss'
import Area from '../Area/Area'
import { fetchListingData } from '../helpers.js';



export default class AreaContainer extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
    };
  }

  render() {
    let areas = this.props.data.map(area => {
      return <Area
        shortName={area.shortName}
        name={area.name}
        description={area.description}
        fetchListings={this.props.fetchListings}
        />
    })
    return (
      <section>
      <div className='welcome-message'>
      <h1 className='welcome-h1'>Welcome!</h1>
      <h3 className='message-h3'>We hope you find the perfect room for your {this.props.tripType}. Please select an area to view it's listings.</h3>
      </div>
      <section className='area-card-container'>
      {areas}
      </section>
      </section>
    )
  }
}
