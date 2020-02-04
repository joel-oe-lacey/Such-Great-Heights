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
