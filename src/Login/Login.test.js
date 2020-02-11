import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login/Login';

describe('Login', () => {
    it('should equal snapshot ', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });

    //need to test
    //use instance and mocks 
    //take listing from details 
        //create a separate mock data file?
    //componentDidMount need to mock fetch

    //selectListing
    //updateUser
    //addFavorite

})