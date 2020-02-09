import React, { Component } from 'react';
import Login from '../Login/Login';
import Details from '../Details/Details';
import './App.scss';
import { fetchAreasData, fetchListings } from '../helpers.js';
import AreaContainer from '../AreaContainer/AreaContainer';
import Nav from '../Nav/Nav';
import { Route, Switch } from 'react-router-dom'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'user1',
      tripType: 'vacation',
      areas: [],
      listings: [{ "id": 1, "area_id": 1, "name":'', "details": {"features": [] } }],
      favorites: []
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
  }
  
  addFavorite = listing => {
    if(!this.state.favorites.includes(listing)){
      this.setState({ favorites: [...this.state.favorites, listing] })
    }
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
          <AreaContainer data={this.state.areas} tripType={this.state.tripType} />} />
        <Route exact path='/areas/:id' render={({ match }) => {
          const areaListings = this.state.listings.filter(listing => listing.area_id === parseInt(match.params.id))
          return <AreaContainer listings={areaListings} tripType={this.state.tripType} />
          } 
        } /> 
        <Route exact path='/areas/:area_id/listings/:listing_id' render={({ match }) => {
          console.log('hit route')
          //this renders on mount, so component did mount doesn't run until after
          //while as with areaContainer, it mounts the areaContainer 
          //also just getting away with areaCOnt cause fetch is quick
          //should refactor to handle undefined states
          return <Details addFavorite={this.addFavorite} listings={this.state.listings} match={match} />
          } 
        }  />
        <Route exact path='/favorites' render={() => {
          return <AreaContainer listings={this.state.favorites} tripType={this.state.tripType} />
        }
        } />
      </section>
    )
  }
}
