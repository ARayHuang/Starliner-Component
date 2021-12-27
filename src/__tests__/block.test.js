import React from 'react';
import { shallow, mount } from 'enzyme';
import Block from '../components/block';

describe('block', () => {
	it('should render correctly', () => {
		const props = {
			className: 'mock-block-className',
			variant: Block.VariantType.OUTLINED,
			shadowNumber: 4,
			isSquare: true
		}

		const wrapper = shallow(
			<Block {...props}>
				<div>mock-children</div>
			</Block>
		)

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount in a full DOM', () => {
		const props = {
			className: 'mock-block-className',
			variant: Block.VariantType.OUTLINED,
			shadowNumber: 4,
			isSquare: true
		};
		const wrapper = mount(
			<Block {...props}>
				<div>mock-children</div>
			</Block>
		);

		expect(wrapper.props().className).toEqual(props.className);
		expect(wrapper.props().variant).toEqual(props.variant);
		expect(wrapper.props().shadowNumber).toEqual(props.shadowNumber);
		expect(wrapper.props().isSquare).toEqual(props.isSquare);
		expect(wrapper.props().children).toEqual(<div>mock-children</div>);
	})
})