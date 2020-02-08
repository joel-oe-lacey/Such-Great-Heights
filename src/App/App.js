import React, { Component } from 'react';
import Login from '../Login/Login';
import Details from '../Details/Details';
import './App.scss';
import { fetchAreasData } from '../helpers.js';
import AreaContainer from '../AreaContainer/AreaContainer';
import Nav from '../Nav/Nav';
import { Route, NavLink, Switch } from 'react-router-dom'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'user1',
      tripType: 'vacation',
      areas: [],
      listings: [],
      chosenListing: {}
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areasData => fetchAreasData(areasData))
      .then(areas => {
        this.setState({ areas })})
  }

  fetchListings = (areaName) => {
    const currentArea = this.state.areas.find(area => {
      return area.shortName === areaName;
    })
    const promises = currentArea.listings.map(listing => {
      return fetch(`http://localhost:3001${listing}`)
        .then(res => res.json())
        .then(info => {return {
          id: info.listing_id,
          name: info.name,
          details: {
            address: `${info.address.street}, ${info.address.zip}`,
            ...info.details
          }

      }})
    })
    Promise.all(promises).then(data => {
      this.setState({ listings: data})

    })
  }

  selectListing = id => {
    const listing = this.state.listings.find(listing => {
      return listing.id === parseInt(id);
    })
    this.setState({ chosenListing: listing })
  }

  updateUser = userName => {
    this.setState({ name: userName })
  }

  render() {
    return (
      <section className="app">
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/' render={() =>  <Nav userName={this.state.name}/>} />
      </Switch>
        <Route exact path='/areas' render={() =>
          <AreaContainer fetchListings={this.fetchListings} data={this.state.areas} tripType={this.state.tripType} />} />
        <Route exact path='/listings' render={() =>
          <AreaContainer selectListing={this.selectListing} listings={this.state.listings} tripType={this.state.tripType} />} />
        <Route exact path='/details' render={() => 
          <Details {...this.state.chosenListing} />} />
      </section>
    )
  }
}
