import React, { Component } from 'react';
import './Login.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormErrors } from './FormErrors';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            email:'',
            travelingFor: 'business',
            formErrors: { name: 'Please enter a name', email: 'Please enter an email'},
            nameValid: false,
            emailValid: false,
            formValid: false,
            errorsDisp: false
        }
    }

    submitForm = e => {
        const { updateUser } = this.props;
        updateUser(this.state.name, this.state.travelingFor);
    }

    validateField = e => {
        let inputName = e.target.name;
        let value = e.target.value
        let fieldPresentErr = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;

        switch (inputName) {
            case 'name':
                nameValid = value;
                fieldPresentErr.name = nameValid ? '' : 'Please enter a name';
                break;
            default:
                emailValid = value;
                fieldPresentErr.email = emailValid ? '' : 'Please enter an email';
                break;
        }

        this.setState({
                [inputName]: value,
                formErrors: fieldPresentErr,
                emailValid,
                nameValid
        }, this.validateForm)
    }

    validateForm = () => {
        this.setState({ formValid: this.state.emailValid && this.state.nameValid });
    }

    showErrors = e => {
        e.preventDefault();
        this.setState({ errorsDisp: true })
    }

    render() {
        const submitBtn = this.state.formValid ? <Link to='/areas' className='log-in-btn'><button className='log-in-btn' onClick={this.submitForm}>Submit</button></Link> : <button className='log-in-btn' onClick={this.showErrors}>Submit</button>;

        const errors = this.state.errorsDisp ? <FormErrors formErrors={this.state.formErrors} /> : '';

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
                        onChange={this.validateField}
                    />
                    <input
                        className='email-input'
                        type="text"
                        name="email"
                        placeholder="Email..."
                        value={this.state.email}
                        onChange={this.validateField}
                    />
                    <label className='type-label'>Reason for Traveling</label>
                    <select
                        className='travel-input'
                        name="travelingFor"
                        autoFocus={this.state.travelingFor}
                        onChange={this.validateField}
                    >
                        <option value="business trip">Business</option>
                        <option value="vacation">Vacation</option>
                        <option value="trip">Other</option>
                    </select>
                    {errors}
                    {submitBtn}
                </form>
            </section>
        )
    }
}

Login.propTypes = {
    updateUser: PropTypes.func,
};
