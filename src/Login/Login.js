import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom'

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
        const itemChanged = e.target.name;
        this.setState({
            [itemChanged]: e.target.value,
            errors: {
                [itemChanged]: this.state[itemChanged].length ? false : true,
                ...this.state.errors

                //swap error handling to
            },
            // ...this.state
        })

        //wont work as it erases other state
        //need to pull in other state and also set the related error to false

        //to type val based on e.target.name


        //make sure a value is entered
        //then in submit form can check if empty
    }

    submitForm = e => {
        //run validation in here, check state, if entered run below, else change placeholder (keep placeholder value in state?)
        e.preventDefault();
        const { updateUser } = this.props;
        updateUser(this.state.user);
        this.resetInputs();
    }

    resetInputs = () => {
        this.setState({
            name: '',
            email: '',
            travelingFor: 'business'
        })
    }

    //need a function on button click that does validation based on the state

    render() {
        return (
            <section className="login-container">
                <form className="login-form">
                    <h1 className='login-welcome'>Login</h1>
                    <input
                        className='name-input'
                        type="text"
                        name="name"
                        placeholder="Name..."
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        className='email-input'
                        type="text"
                        name="email"
                        placeholder="Email..."
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <label className='type-label'>Reason for Traveling</label>
                    <select
                        className='travel-input'
                        name="travelingFor"
                        autoFocus={this.state.travelingFor}
                        onChange={this.handleChange}
                    >
                        <option value="business">Business</option>
                        <option value="vacation">Vacation</option>
                        <option value="other">Other</option>
                    </select>
                    <Link to='/areas' className='link-btn'><button className='log-in-btn'>Submit</button></Link>
                </form>
            </section>
        )
    }
}
