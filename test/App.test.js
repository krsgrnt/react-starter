import React from 'react';
import { shallow } from 'enzyme';

import { Home, Nav } from '../src/App';

let wrapper;

describe('App Component', () => {
    it('renders h1', () => {
        wrapper = shallow(<Home />);
        expect(wrapper.find('h1').text()).toEqual('Home');
    });

    it('renders p', () => {
        wrapper = shallow(<Home />);
        expect(wrapper.find('p').text()).toEqual(
            'React Starter project by Kris Grint'
        );
    });

    it('renders navigation', () => {
        wrapper = shallow(<Home />);
        expect(wrapper.find(Nav).exists()).toBe(true);
    });
});
