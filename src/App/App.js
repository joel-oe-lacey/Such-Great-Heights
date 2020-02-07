import React, { Component } from 'react';
import Login from '../Login/Login';
import Listing from '../Listing/Listing';
import Details from '../Details/Details';
import './App.scss';
import { fetchAreasData, fetchListingData } from '../helpers.js';
import Area from '../Area/Area';
import AreaContainer from '../AreaContainer/AreaContainer';
import Nav from '../Nav/Nav';
import { Route, NavLink, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'user1',
      tripType: 'vacation',
      areas: [],
      listings: [],
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



  updateUser = userName => {
    this.setState({ name: userName })
  }


  render() {
    // let { listings } = this.state;

    /* <Details id={listings[0] ? listings[0].id : 1} name={listings[0] ? listings[0].name : 'test'} details={listings[0] ? listings[0].details : {features: []}} /> */

    // return (
    //   <section className="app">
    //     <Nav userName={this.state.name}/>
    //     <AreaContainer data={this.state.areas} tripType={this.state.tripType} />
    //   </section>
    // )



    // display login upon page load
    // upon succesful form submission, render AreasContainer
    // 'Log Out' click takes user to log in form
    // 'View Areas' click takes user to AreasContainer
    // upon 'View Listings' click display Listings component
    // upon 'View Details' click, render Details component
    return (
      <section className="app">
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/' render={() =>  <Nav userName={this.state.name}/>} />
      </Switch>
        <Route exact path='/areas' render={() =>
          <AreaContainer fetchListings={this.fetchListings} data={this.state.areas} tripType={this.state.tripType} />} />
        <Route exact path='/listings' render={() =>
          <AreaContainer listings={this.state.listings} tripType={this.state.tripType} />} />

       </section>
    )
  }
}
