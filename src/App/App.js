import React, { Component } from 'react';
import Login from '../Login/Login'
import './App.scss';

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
      .then(areasData => {
        const promises = areasData.areas.map(area => {
          return fetch(`http://localhost:3001${area.details}`)
            .then(response => response.json())
            .then(info => {
              return {
                shortName: area.area || area.name,
                name: info.name,
                description: info.about,
              }
            })
        })
        return Promise.all(promises)
      })
      .then(areas => this.setState({ areas })
      )
  }

  updateUser = userName => {
    this.setState({ name: userName })
  }

  render() {
    return (
      <section className="app">
        <Login updateUser={this.updateUser} />
      </section>
    )
  }
}
