import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';
import { shallow } from 'enzyme';


describe ('App', ()=> {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    });

  it('should add a favorite to state when addFav() is run', () => {
    let mockListing = {id: 123, name: 'cool looking house'}
    let defaultState = {
      areas: [],
      favorites: [],
      listings:[],
      name: "user1",
      tripType: "vacation"
    }
    let updatedState = {
      areas: [],
      favorites: [mockListing],
      listings:[],
      name: "user1",
      tripType: "vacation"
    }
    wrapper.instance().setState(defaultState)
    wrapper.instance().addFavorite(mockListing)
    expect(wrapper.state()).toEqual(updatedState)
  })

  it('should remove a favorite from state when removeFav is called', () => {
    let mockListing = {id: 123, name: 'cool looking house'}
    let defaultState = {
      areas: [],
      favorites: [mockListing]
    }
    let updatedState = {
      areas: [],
      favorites: [],
      listings:[],
      name: "user1",
      tripType: "vacation",
    }
    wrapper.instance().setState(defaultState)
    wrapper.instance().removeFavorite(mockListing);
    expect(wrapper.state()).toEqual(updatedState);
  })
  
  it('should update state.name when updateUser is invoked', () => {
    wrapper.instance().setState({});
    wrapper.instance().updateUser('user123');
    expect(wrapper.state()).toEqual({areas: [], favorites: [], listings: [], name: 'user123', tripType: 'vacation'})
  })
})
