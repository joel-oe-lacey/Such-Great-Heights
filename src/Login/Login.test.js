import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
    })

    it('should equal snapshot ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should update state input values on user inputs', () => {
        const mockedEvent = {
            target: {
                name: 'name',
                value: 'Dolph Lundgren'
            }
        }

        wrapper.instance().validateField(mockedEvent);

        expect(wrapper.state('name')).toEqual('Dolph Lundgren');
    });

    it('should update errors in state if inputs are empty', () => {
        const mockedEvent = {
            target: {
                name: 'email', 
                value: 'iSmellCrime@gmail.com'
            }}

        wrapper.instance().validateField(mockedEvent);

        expect(wrapper.state().formErrors.name).toEqual('Please enter a name');
    });

    it('should determine if the whole form is on each input', () => {
        const mockedEvent = {
            target: {
                name: 'email',
                value: 'iSmellCrime@gmail.com'
            }
        }

        wrapper.instance().validateForm = jest.fn();
        wrapper.instance().validateField(mockedEvent);
        expect(wrapper.instance().validateForm).toHaveBeenCalled();
    });

    it('should call updateUser on App', () => {
        const mockUpdateUser = jest.fn();
        wrapper = shallow(<Login updateUser={mockUpdateUser} />);
        wrapper.instance().submitForm();
        expect(mockUpdateUser).toHaveBeenCalled();
    });
})


