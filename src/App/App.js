import React, { Component } from 'react';
import Login from '../Login/Login';
import Details from '../Details/Details';
import './App.scss';
import { fetchAreasData, fetchListings, fetchData } from '../helpers.js';
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
    fetchData()
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
  removeFavorite = listing => {
    this.state.favorites.forEach(item => {
      if (item === listing) {
        this.state.favorites.pop(item)
      }
    })
  }

  updateUser = (userName, type) => {
    if (type === 'business') {
        type = 'business trip'
    } else if (type === 'other') {
        type = 'trip'
    }
    this.setState({ name: userName, tripType: type})
  }

  render() {
    return (
      <section className="app">
      <Switch>
        <Route exact path='/' render={() => <Login updateUser={this.updateUser} />} />
        <Route path='/' render={() =>  <Nav userName={this.state.name} />} />
      </Switch>
        <Route exact path='/areas' render={() =>
          <AreaContainer data={this.state.areas} tripType={this.state.tripType} />} />
        <Route exact path='/areas/:id' render={({ match }) => {
          const areaListings = this.state.listings.filter(listing => listing.area_id === parseInt(match.params.id))
          return <AreaContainer listings={areaListings} tripType={this.state.tripType} />
          }
        } />

        <Route exact path='/areas/:area_id/listings/:listing_id' render={({ match }) => {
          return <Details addFavorite={this.addFavorite} removeFavorite={this.removeFavorite} listings={this.state.listings} match={match}/>
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
