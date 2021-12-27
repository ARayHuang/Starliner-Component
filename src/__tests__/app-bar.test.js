import React from 'react';
import { shallow, mount } from 'enzyme';
import AppBar from '../components/app-bar';

describe('app bar', () => {
	it('should render correctly', () => {
		const props = {
			className: 'mock-app-bar-className',
			position: AppBar.PositionType.STATIC,
		};
		const wrapper = shallow(
			<AppBar {...props}>
				<div>mock-children</div>
			</AppBar>,
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount in a full DOM', () => {
		const props = {
			className: 'mock-app-bar-className',
			position: AppBar.PositionType.STICKY,
		};
		const wrapper = mount(
			<AppBar {...props}>
				<div>mock-children</div>
			</AppBar>
		);

		expect(wrapper.props().className).toEqual(props.className);
		expect(wrapper.props().position).toEqual(props.position);
		expect(wrapper.props().children).toEqual(<div>mock-children</div>);
	})
})