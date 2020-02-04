import React, { Component } from 'react';
import Login from '../Login/Login'
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      // .then(areasData => console.log(areasData))
      .then(areasData => {
        const promises = areasData.areas.map(area => {
          // return fetch(area.details)

          console.log(`localhost:3000${area.details}`);
        })
      })
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
