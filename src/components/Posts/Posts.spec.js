import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';

import Posts from './Posts';

describe('Posts component', () => {
	describe('using __mocks__', () => {
		// use __mocks__ to fake network calls
		jest.mock('./../../services/api');

		it('tree renders correctly', () => {
			const component = shallow(<Posts/>);
			const tree = toJson(component);
			expect(tree).toMatchSnapshot();
		});

		it('calls componentDidMount() lifecycle method', () => {
			jest.spyOn(Posts.prototype, 'componentDidMount');

			const component = mount(<Posts />);

			expect(Posts.prototype.componentDidMount).toHaveBeenCalled();
		});
	});

	describe('using inline mock', () => {

		jest.mock('./../../services/api', () => {
			return {
				getPosts: () => { return new Promise((resolve, reject) => {
					process.nextTick(
						() => resolve({ data: {
							children: [
								{ name: 'child 1' }
							]
						}}),
						() => reject({ error: 'something went wrong' })
					);
				});
				}
			}
		});

		it('tree renders correctly', () => {
			const component = shallow(<Posts/>);
			const tree = toJson(component);
			expect(tree).toMatchSnapshot();
		});

		it('calls componentDidMount() lifecycle method', () => {
			jest.spyOn(Posts.prototype, 'componentDidMount');

			const component = mount(<Posts />);

			expect(Posts.prototype.componentDidMount).toHaveBeenCalled();
		});
	});
});