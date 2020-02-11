import React from 'react';
import { render } from '@testing-library/react';
import Listing from './Listing.js';
import { shallow } from 'enzyme';

describe('Listing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Listing /> );
  });

  it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

})
