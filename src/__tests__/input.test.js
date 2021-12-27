import React from 'react';
import { shallow, mount } from 'enzyme';
import { Input } from '../components/input';

describe('Input', () => {
	afterEach(() => {
		jest.resetModules();
	});

	it('handle default props', () => {
		const  {
			onChange
		} = Input.defaultProps;

		expect(onChange).toBeInstanceOf(Function);
	});

	it('should render correctly', () => {
		const props = {
			value: 'mock-value',
			placeholder: 'mock-placeholder',
			prefix: 'mock-prefix',
			suffix: 'mock-suffix',
			onChange: () => {}
		};

		const wrapper = shallow(
			<Input {...props} />
		)

		expect(wrapper).toMatchSnapshot();
	})

	it('should mount in a full DOM', () => {
		const props = {
			value: 'mock-value',
			placeholder: 'mock-placeholder',
			prefix: 'mock-prefix',
			suffix: 'mock-suffix',
			onChange: () => {}
		};

		const wrapper = mount(
			<Input {...props} />
		);
		
		expect(wrapper.props().value).toEqual(props.value);
		expect(wrapper.props().placeholder).toEqual(props.placeholder);
		expect(wrapper.props().prefix).toEqual(props.prefix);
		expect(wrapper.props().suffix).toEqual(props.suffix);
		expect(wrapper.props().onChange).toEqual(props.onChange);
	})

	it('should handle onChange event', () => {
		const onChangeMock = jest.fn();
		const value = 'mock-value';

		const wrapper = mount(
			<Input value={value} onChange={onChangeMock} />
		);
		const input = wrapper.find('.chakra-input').at(0);
		input.simulate('change');

		expect(onChangeMock).toHaveBeenCalled();
	});
})
