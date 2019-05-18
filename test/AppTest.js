import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import App, { Button } from '../src/App';

let wrapper, sandbox;

describe('App Component', () => {
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('renders h1', () => {
        wrapper = shallow(<App />);
        expect(wrapper.find('h1').text()).toEqual('Hello, World!');
    });

    it('renders p', () => {
        wrapper = shallow(<App mode='test' />);
        expect(wrapper.find('p').text()).toEqual('Running in test mode');
    });

    it('renders button', () => {
        wrapper = shallow(<App mode='test' />);
        expect(wrapper.find(Button).text()).toEqual('Click me');
    });

    it('changes button text label when clicked', () => {
        wrapper = shallow(<App mode='test' />);
        const setStateSpy = sandbox.spy(wrapper, 'setState');

        wrapper.find(Button).simulate('click');

        expect(wrapper.find(Button).text()).toEqual('Ouch!');
        expect(setStateSpy.calledWith({ clicked: true })).toBe.true;
    });
});
