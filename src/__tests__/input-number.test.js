import React from 'react';
import { shallow, mount } from 'enzyme';
import { InputNumber } from '../components/input-number';

describe('InputNumber', () => {
	afterEach(() => {
		jest.resetModules();
	});

	it('handle default props', () => {
		const  {
			isAllowMouseWheel,
			isClampValueOnBlur,
			onChange
		} = InputNumber.defaultProps;

		expect(isAllowMouseWheel).toEqual(false);
		expect(isClampValueOnBlur).toEqual(false);
		expect(onChange).toBeInstanceOf(Function);
	});

	it('should render correctly', () => {
		const props = {
			value: 0.5,
			min: 0,
			max: 20,
			step: 0.5,
			precision: 2,
			isAllowMouseWheel: true,
			isClampValueOnBlur: true,
			onChange: () => {}
		};

		const wrapper = shallow(
			<InputNumber {...props} />
		)

		expect(wrapper).toMatchSnapshot();
	})

	it('should mount in a full DOM', () => {
		const props = {
			value: 0.5,
			min: 0,
			max: 20,
			step: 0.5,
			precision: 2,
			isAllowMouseWheel: true,
			isClampValueOnBlur: true,
			onChange: () => {}
		};

		const wrapper = mount(
			<InputNumber {...props} />
		);
		
		expect(wrapper.props().value).toEqual(props.value);
		expect(wrapper.props().placeholder).toEqual(props.placeholder);
		expect(wrapper.props().prefix).toEqual(props.prefix);
		expect(wrapper.props().suffix).toEqual(props.suffix);
		expect(wrapper.props().onChange).toEqual(props.onChange);
	})

	it('should handle onChange event', () => {
		const onChangeMock = jest.fn();
		const value = 2;

		const wrapper = mount(
			<InputNumber value={value} onChange={onChangeMock} />
		);
		const input = wrapper.find('.chakra-numberinput__field').at(0);
		input.simulate('change');

		expect(onChangeMock).toHaveBeenCalled();
	});
})
