import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import { mount } from 'enzyme';

describe('App', () => {
  it('renders header', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.header').text()).toContain('Header content');
  });
});
