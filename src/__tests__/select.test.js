import React from 'react';
import { shallow, mount } from 'enzyme';
import { Select } from '../components/select';

describe('select', () => {
	it('handle default props', () => {
		const  {
			onChange
		} = Select.defaultProps;

		expect(onChange).toBeInstanceOf(Function);
	});

	it('should render correctly', () => {
		const props = {
			chakraProps: {
				variant: 'outline'
			},
			options: [
				{
					label: 'menu1',
					value: '1',
				},
				{
					label: 'menu2',
					value: '2',
				},
				{
					label: 'menu3',
					value: '3',
				}
			],
			defaultValue: '1',
			onChange: () => {},
		}

		const wrapper = shallow(
			<Select {...props} />
		)

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount in a full DOM', () => {
		const props = {
			chakraProps: {
				variant: 'outline'
			},
			options: [
				{
					label: 'menu1',
					value: '1',
				},
				{
					label: 'menu2',
					value: '2',
				},
				{
					label: 'menu3',
					value: '3',
				}
			],
			defaultValue: '1',
			onChange: () => {},
		}
		const wrapper = mount(
			<Select {...props} ></Select>
		);

		expect(wrapper.props().chakraProps).toEqual(props.chakraProps);
		expect(wrapper.props().options).toEqual(props.options);
		expect(wrapper.props().defaultValue).toEqual(props.defaultValue);
		expect(wrapper.props().onChange).toEqual(props.onChange);
	});

	it('should handle onChange event', () => {
		const onChangeMock = jest.fn();

		const wrapper = mount(
			<Select
				onChange={onChangeMock}
				options={[
					{
						label: 'menu1',
						value: '1',
					},
					{
						label: 'menu2',
						value: '2',
					},
					{
						label: 'menu3',
						value: '3',
					}
				]}
			/>
		);
		const select = wrapper.find('.chakra-select').at(0);
		select.simulate('change');
		
		expect(onChangeMock).toHaveBeenCalled();
	});
})
