import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('Color Picker', () => {
  it('renders a Color Button', () => {
    const wrapper = shallow(<ColorPicker color="red"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
