import React from 'react'
import { shallow } from 'enzyme'

import About from './About'

describe('About component', () => {
  it('renders correctly', () => {
    const component = shallow(<About />);
    expect(component.contains('About Component')).toBe(true);
		expect(component.contains('Unit testing rocks!')).toBe(true);
  })
});