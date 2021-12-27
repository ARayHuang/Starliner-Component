import React from 'react';
import { shallow, mount } from 'enzyme';
import { CheckboxGroup } from '../components/check-box';

describe('CheckboxGroup', () => {
	afterEach(() => {
		jest.resetModules();
	});

	it('handle default props', () => {
		const  {
			onChange
		} = CheckboxGroup.defaultProps;

		expect(onChange).toBeInstanceOf(Function);
	});

	it('should render correctly', () => {
		const props = {
			checkboxes: [
				{
					label: 'HW',
					value: 'HW'
				},
				{
					label: 'ME',
					value: 'ME'
				},
				{
					label: 'Inside Lab',
					value: 'insideLab'
				},
			],
			defaultValue: ['HW'],
			onChange: () => {}
		};

		const wrapper = shallow(
			<CheckboxGroup {...props} />
		)

		expect(wrapper).toMatchSnapshot();
	})

	it('should mount in a full DOM', () => {
		const props = {
			checkboxes: [
				{
					label: 'HW',
					value: 'HW'
				},
				{
					label: 'ME',
					value: 'ME'
				},
				{
					label: 'Inside Lab',
					value: 'insideLab'
				},
			],
			defaultValue: ['HW'],
			onChange: () => {}
		};

		const wrapper = mount(
			<CheckboxGroup {...props} />
		);
		
		expect(wrapper.props().checkboxes).toEqual(props.checkboxes);
		expect(wrapper.props().defaultValue).toEqual(props.defaultValue);
		expect(wrapper.props().onChange).toEqual(props.onChange);
	})
})
