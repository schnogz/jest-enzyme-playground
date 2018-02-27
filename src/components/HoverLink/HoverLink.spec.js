import React from 'react';
import HoverLink from './HoverLink';
import { shallow } from 'enzyme'
import toJson from "enzyme-to-json";

describe('HoverLink component', () => {
	it('should render correctly', () => {
		const component = shallow(<HoverLink page="http://www.google.com">Google</HoverLink>);
		const tree = toJson(component);

		expect(tree).toMatchSnapshot();
	});

	it('should trigger mouse enter handler', () => {
		const component = shallow(<HoverLink page="http://www.google.com">Google</HoverLink>);
		const tree = toJson(component);

		// manually trigger the callback
		tree.props.onMouseEnter();

		expect(component.state().hovered).toBe(true);
	});

	it('should trigger mouse enter handler', () => {
		const component = shallow(<HoverLink page="http://www.google.com">Google</HoverLink>);
		const tree = toJson(component);

		// manually trigger the callback
		tree.props.onMouseEnter();
		tree.props.onMouseLeave();

		expect(component.state().hovered).toBe(false);
	});
});