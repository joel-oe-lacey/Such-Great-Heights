import React, { Component } from 'react';
import Login from '../Login/Login'
import './App.scss';
import { fetchAreasData } from '../helpers.js'
import Area from '../Area/Area'
import AreaContainer from '../AreaContainer/AreaContainer'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      areas: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areasData => fetchAreasData(areasData))
      .then(areas => this.setState({ areas }))
  }

  updateUser = userName => {
    this.setState({ name: userName })
  }

  render() {
    return (
      <section className="app">
        <AreaContainer data={this.state.areas}/>

      </section>
    )
  }
}
