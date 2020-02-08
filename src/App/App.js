import React, { Component } from 'react';
import Login from '../Login/Login';
import Details from '../Details/Details';
import './App.scss';
import { fetchAreasData, fetchListings } from '../helpers.js';
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
        this.setState({ areas })
        fetchListings(this.state.areas)
        .then(listings => this.setState({ listings }))
      })

    
    //want to load all the listings at the start 
    //store them in listings as an array of obj
    //each obj has a key of areaID and a value of array of listings
    
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
        <Route path='/areas' render={() =>
          <AreaContainer data={this.state.areas} tripType={this.state.tripType} />} />
        <Route exact path='/area/:id' render={({ match }) => {
          const selectedListings = this.state.listings.filter(listing => listing.area_id === parseInt(match.params.id))
          return <AreaContainer selectListing={this.selectListing} listings={selectedListings} tripType={this.state.tripType} />
          } 
        } />
        } 
        <Route exact path='/details' render={() => 
          <Details {...this.state.chosenListing} />} />
      </section>
    )
  }
}
