import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';

import Post from './Post';

describe('Post component', () => {
	it('tree renders correctly with title', () => {
		const component = shallow(<Post post={{ title: 'Test', url: 'fake' }}/>);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});