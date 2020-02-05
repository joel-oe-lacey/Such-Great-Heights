import React, { Component } from 'react';
import Login from '../Login/Login';
import Listing from '../Listing/Listing';
import './App.scss';
import { fetchAreasData, fetchListingData } from '../helpers.js'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
    fetchListingData(this.state.listingsUrl)
      .then(listings => {
        this.setState({ listings })
        console.log(this.state)})
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
  }
}
