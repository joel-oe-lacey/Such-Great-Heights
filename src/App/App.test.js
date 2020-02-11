import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';
import { shallow } from 'enzyme';
import { fetchAreasData, fetchListings, fetchData } from '../helpers.js';

jest.mock('../helpers.js')

describe ('App', ()=> {
  let wrapper;

  beforeEach(() => {
    fetchData.mockImplementation(() => {
    return Promise.resolve([{
    id: 590,
    name: "River North",
    location: "North of Downtown Denver",
    about: "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
    region_code: 6356834,
    quick_search: "o5kod9f5cqo0",
    listings: [
        "/api/v1/listings/3",
        "/api/v1/listings/44",
        "/api/v1/listings/221",
        "/api/v1/listings/744",
        "/api/v1/listings/90",
        "/api/v1/listings/310"
    ]
}])
  });
    fetchListings.mockImplementation(() => {
  return Promise.resolve([{
  id: 590,
  name: "River North",
  location: "North of Downtown Denver",
  about: "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
  region_code: 6356834,
  quick_search: "o5kod9f5cqo0",
  listings: [
      "/api/v1/listings/3",
      "/api/v1/listings/44",
      "/api/v1/listings/221",
      "/api/v1/listings/744",
      "/api/v1/listings/90",
      "/api/v1/listings/310"
  ]
}])
});
    });

  it('should add a favorite to state when addFav() is run', () => {
    wrapper = shallow(<App />);
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

  it('should match the snapshot', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});

  it('should remove a favorite from state when removeFav is called', () => {
    wrapper = shallow(<App />);
    let mockListing = {id: 123, name: 'cool looking house'}
    let defaultState = {
      areas: [],
      favorites: [mockListing]
    }
    let updatedState = {
      areas: [],
      favorites: [],
      listings:[{
       area_id: 1,
         details: {
           features: [],
       },
           id: 1,
           name: "",
         }],
      name: "user1",
      tripType: "vacation",
    }
    wrapper.instance().setState(defaultState)
    wrapper.instance().removeFavorite(mockListing);
    expect(wrapper.state()).toEqual(updatedState);
  })

  it('should update state.name when updateUser is invoked', () => {
    wrapper = shallow(<App />);
    wrapper.instance().setState({});
    wrapper.instance().updateUser('user123');
    expect(wrapper.state()).toEqual({areas: [], favorites: [], listings: [{area_id: 1,details: {features: [], }, id: 1,name: "", }], name: 'user123', tripType: 'vacation'})
  })

  it('should retrieve ideas after mounting', () => {
    wrapper = shallow(<App />);
    expect(fetchData).toHaveBeenCalled();
  });
});
