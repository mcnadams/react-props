import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog component', () => {
  it('renders a Dog', () => {
    const wrapper = shallow(<Dog name="spot" age={5} weight="20 lbs" />);
    expect(wrapper).toMatchSnapshot();
  });
});
