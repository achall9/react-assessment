import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { MemoryRouter, Route, browserHistory } from 'react-router-dom';
import App from './App';


describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('App component', () => {
  it('increments count by 1 when the increment button is clicked', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );
    
    const incrementBtn = wrapper.find('App');
    incrementBtn.simulate('click');
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Sign in');
  });
});