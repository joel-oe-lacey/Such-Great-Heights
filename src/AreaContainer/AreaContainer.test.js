import React from 'react';
import { render } from '@testing-library/react';
import AreaContainer from './AreaContainer.js';
import { shallow } from 'enzyme';

describe ('AreaContainer', ()=> {
  let wrapper;

  beforeEach(() => {
    let props = {
      tripType: 'vacation',
      data: [{id: 5, shortName: 'shortname', name:'name', description:'this is a description'}, {id: 52, shortName: 'shortnam2e', name:'name2', description:'this is a description2'}],
    }
    wrapper = shallow(<AreaContainer {...props} />)
    });

  it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

  it('should match the snapshot when there are props', () => {
      expect(wrapper).toMatchSnapshot();
    })
})
