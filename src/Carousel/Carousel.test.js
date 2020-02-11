import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './Carousel';

describe('Carousel', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Carousel id={8} name={'test text'} imgTags={['a', 'b', 'c']} />);
    });

    it('Should equal snapshot', () => {
        const wrapper = shallow(<Carousel id={8} name={'test text'} imgTags={['a','b','c']} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should subtract image index for left click', () => {
        expect(wrapper.state('imageIndex')).toEqual(0);

        wrapper.instance().changeImg('left');

        expect(wrapper.state('imageIndex')).toEqual(3);
    });

    it('Should add to image index for right click', () => {
        expect(wrapper.state('imageIndex')).toEqual(0);

        wrapper.instance().changeImg('right');

        expect(wrapper.state('imageIndex')).toEqual(1);
    });
});