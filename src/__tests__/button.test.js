import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../components/button';

describe('Button', () => {
	it('should render correctly', () => {
		const props = {
			className: 'mock-button-className',	
		};

		const wrapper = shallow(
			<Button {...props}>
				<div>mock-children</div>
			</Button>
		)

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount in a full DOM', () => {
		const props = {
			className: 'mock-button-className',
			variant: 'ghost',
			size: 'sm',
			isDisabled: false,
			text: 'mock-text',
			icon: <mock-icon />,
			onClick: () => {}		
		};
		
		const wrapper = mount(
			<Button {...props}>
				mock-text
			</Button>
		);

		expect(wrapper.props().className).toEqual(props.className);
		expect(wrapper.props().variant).toEqual(props.variant);
		expect(wrapper.props().size).toEqual(props.size);
		expect(wrapper.props().isDisabled).toEqual(props.isDisabled);
		expect(wrapper.props().icon).toEqual(props.icon);
		expect(wrapper.props().children).toEqual(props.text);
	})
})
