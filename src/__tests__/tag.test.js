import React from 'react';
import { shallow, mount } from 'enzyme';
import Tag from '../components/tag';
import { CheckIcon } from '@chakra-ui/icons'

describe('Tag', () => {
	it('should render correctly', () => {
		const props = {
			className: 'mock-Tag-className',	
		};

		const wrapper = shallow(
			<Tag {...props}>
				<div>mock-children</div>
			</Tag>
		)

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount in a full DOM', () => {
		const props = {
			className: 'mock-Tag-className',
			variant: 'outline',
			size: 'lg',
			showCloseBtn: true,
			text: 'mock-text',
			icon: CheckIcon,
			onClickBtn: () => {}		
		};
		
		const wrapper = mount(
			<Tag {...props}>
				mock-text
			</Tag>
		);

		expect(wrapper.props().className).toEqual(props.className);
		expect(wrapper.props().variant).toEqual(props.variant);
		expect(wrapper.props().size).toEqual(props.size);
		expect(wrapper.props().showCloseBtn).toEqual(props.showCloseBtn);
		expect(wrapper.props().icon).toEqual(props.icon);
		expect(wrapper.props().children).toEqual(props.text);
	})
})
