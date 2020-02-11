import React from 'react';
import { render } from '@testing-library/react';
import Area from './Area.js';
import { shallow } from 'enzyme';

describe('Area', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( < Area /> );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot when there are props', () => {
    let props = {
      shortName: 'RiNo',
      name: 'River North',
      description: 'this is an area in denver',
      id: 5
    }
    wrapper = shallow(<Area {...props} />)
    expect(wrapper).toMatchSnapshot();
  })


})
