import React from 'react';
import { shallow, mount } from 'enzyme';
import List from '../components/list/list';

describe('List', () => {
	it('should render correctly', () => {
		const props = {
			className: 'mock-list-className',
		};

		const wrapper = shallow(
			<List {...props}>
				<div>mock-children</div>
			</List>
		)

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount in a full DOM', () => {
		const props = {
			className: 'mock-list-className',
		};
		const wrapper = mount(
			<List {...props}>
				<div>mock-children</div>
			</List>
		);

		expect(wrapper.props().className).toEqual(props.className);
		expect(wrapper.props().children).toEqual(<div>mock-children</div>);
	})
})
