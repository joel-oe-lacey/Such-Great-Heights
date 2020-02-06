import React, { Component } from 'react';
import Login from '../Login/Login';
import Listing from '../Listing/Listing';
import './App.scss';
import { fetchAreasData, fetchListingData } from '../helpers.js';
import Area from '../Area/Area';
import AreaContainer from '../AreaContainer/AreaContainer';
import Nav from '../Nav/Nav';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'user1',
      tripType: 'vacation',
      areas: [],
      listingsUrl: ['http://localhost:3001/api/v1/listings/3',
        'http://localhost:3001/api/v1/listings/44',
        'http://localhost:3001/api/v1/listings/221',
        'http://localhost:3001/api/v1/listings/744',
        'http://localhost:3001/api/v1/listings/90',
        'http://localhost:3001/api/v1/listings/310' ],
      listings: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areasData => fetchAreasData(areasData))
      .then(areas => this.setState({ areas }))

    fetchListingData(this.state.listingsUrl)
      .then(listings => this.setState({ listings }))
  }

  updateUser = userName => {
    this.setState({ name: userName })
  }

  render() {
    const listings = this.state.listings.map(listing => {
      return <Listing id={listing.id} name={listing.name} />
    })
    return (
      <section className="app">
        { listings }
      </section>
    )

    // return (
    //   <section className="app">
    //     <Nav userName={this.state.name}/>
    //     <AreaContainer data={this.state.areas} tripType={this.state.tripType} />
    //   </section>
    // )
  }
}
