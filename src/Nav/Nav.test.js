import React from 'react';
import { render } from '@testing-library/react';
import Nav from './Nav.js';
import { shallow } from 'enzyme';

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Nav /> );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot when there are props', () => {
    let props = {
      userName: 'user123'
    }
    wrapper = shallow(<Nav {...props} />)
    expect(wrapper).toMatchSnapshot();
  })


})
