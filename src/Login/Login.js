import React, { Component } from 'react';
import './Login.scss';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            email:'',
            travelingFor:'business'
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    //need a function on button click that does validation based on the state

    render() {
        return (
            <section className="login-container">
                <form className="login-form">
                    <h1>Welcome, please login</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name..."
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email..."
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <select
                        name="travelingFor"
                        autofocus={this.state.travelingFor}
                        onChange={this.handleChange}
                    >
                        <option value="business">Business</option>
                        <option value="vacation">Vacation</option>
                        <option value="other">Other</option>
                    </select>
                    <button>Submit</button>
                </form>
            </section>
        )
    }
}