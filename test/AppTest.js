import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import App from '../src/App';

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
});
