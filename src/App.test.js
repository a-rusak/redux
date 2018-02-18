import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow, mount, render } from 'enzyme';

function setup() {
  const props = {
    increment: jest.fn(),
    decrement: jest.fn(),
    async: jest.fn(),
    counterValue: 0,
    warn: ``
  };

  const enzymeWrapper = mount(<App {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe(`App`, () => {
  it(`should render self and subcomponents`, () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('div.App')).toHaveLength(1);
    expect(enzymeWrapper.find('button')).toHaveLength(3);
    expect(enzymeWrapper.find('label')).toHaveLength(2);
  });

  it(`should call increment`, () => {
    const { enzymeWrapper, props } = setup();
    enzymeWrapper.find('button.plus').simulate('click');
    expect(props.increment).toBeCalled();
  });
});
