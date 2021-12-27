import React from 'react';
import { shallow, mount } from 'enzyme';
import { Checkbox } from '../components/check-box';

describe('Checkbox', () => {
	afterEach(() => {
		jest.resetModules();
	});

	it('handle default props', () => {
		const  {
			isIndeterminate,
			onChange
		} = Checkbox.defaultProps;

		expect(isIndeterminate).toEqual(false);
		expect(onChange).toBeInstanceOf(Function);
	});

	it('should render correctly', () => {
		const props = {
			isChecked: true,
			isIndeterminate: false,
			onChange: () => {}
		};

		const wrapper = shallow(
			<Checkbox {...props} />
		)

		expect(wrapper).toMatchSnapshot();
	})

	it('should mount in a full DOM', () => {
		const props = {
			isChecked: true,
			isIndeterminate: false,
			onChange: () => {}
		};

		const wrapper = mount(
			<Checkbox {...props} />
		);
		
		expect(wrapper.props().isChecked).toEqual(props.isChecked);
		expect(wrapper.props().isIndeterminate).toEqual(props.isIndeterminate);
		expect(wrapper.props().onChange).toEqual(props.onChange);
	})
})
