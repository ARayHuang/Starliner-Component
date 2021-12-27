import React from 'react';
import { shallow, mount } from 'enzyme';
import { Textarea } from '../components/text-area';


describe('textarea', () => {
	it('handle default props', () => {
		const  {
			onChange
		} = Textarea.defaultProps;

		expect(onChange).toBeInstanceOf(Function);
	});

	it('should render correctly', () => {
		const props = {
			placeholder: 'mock-placeholder',
			value: 'mock-value',
			onChange: () => {}
		};

		const wrapper = shallow(
			<Textarea {...props} />
		)

		expect(wrapper).toMatchSnapshot();
	})

	it('should mount in a full DOM', () => {
		const props = {
			placeholder: 'mock-placeholder',
			value: 'mock-value',
			onChange: () => {}
		};

		const wrapper = mount(
			<Textarea {...props} />
		);

		expect(wrapper.props().placeholder).toEqual(props.placeholder);
		expect(wrapper.props().defaultValue).toEqual(props.defaultValue);
		expect(wrapper.props().value).toEqual(props.value);
		expect(wrapper.props().onChange).toEqual(props.onChange);
	})

	it('should handle onChange event', () => {
		const onChangeMock = jest.fn();
		const value = 'mock-value';
		const event = {
			preventDefault: () => {},
			target: { value }
		}

		const wrapper = shallow(
			<Textarea value={value} onChange={onChangeMock} />
		);
		wrapper.simulate('change', event);

		expect(onChangeMock).toBeCalledWith(event);
		expect(onChangeMock).toHaveBeenCalledTimes(1);
	});
})
