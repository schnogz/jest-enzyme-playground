import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';

import Post from './Post';

describe('Post component', () => {
	it('tree renders correctly with title', () => {
		const component = shallow(<Post title='Unit Testing 101' excerpt='Learn how to unit test today!'/>);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});

	it('tree renders correctly with title and link', () => {
		const component = shallow(<Post title='Unit Testing 101' titleLink/>);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});