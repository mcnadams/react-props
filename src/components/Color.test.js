import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders a Color', () => {
    const wrapper = shallow(<Color name='fuschia' hex='#CA2C92' rgb={{
      red: 202,
      green: 44,
      blue: 126
    }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
