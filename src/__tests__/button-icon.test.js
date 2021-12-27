import React from 'react';
import { shallow, mount } from 'enzyme';
import IconButton from '../components/button-icon';

describe('IconButton', () => {
	it('should render correctly', () => {
		const props = {
			className: 'mock-button-className',	
		};

		const wrapper = shallow(
			<IconButton {...props}>
				<div>mock-children</div>
			</IconButton>
		)

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount in a full DOM', () => {
		const props = {
			className: 'mock-button-className',
			variant: 'outlined',
			size: 'sm',
			isDisabled: false,
			text: 'mock-text',
			icon: <mock-icon />,
			onClick: () => {}		
		};
		
		const wrapper = mount(
			<IconButton {...props}>
				mock-text
			</IconButton>
		);

		expect(wrapper.props().className).toEqual(props.className);
		expect(wrapper.props().variant).toEqual(props.variant);
		expect(wrapper.props().size).toEqual(props.size);
		expect(wrapper.props().isDisabled).toEqual(props.isDisabled);
		expect(wrapper.props().icon).toEqual(props.icon);
		expect(wrapper.props().children).toEqual(props.text);
	})
})
