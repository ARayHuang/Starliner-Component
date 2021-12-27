import React from 'react';
import { shallow, mount } from 'enzyme';
import ListItem from '../components/list/list-item';

describe('ListItem', () => {
	it('should handle default props', () => {
		const {
			className,
			alignItems,
			hasItemPadding,
			hasBottomDivider,
			isDense,
			isButton,
			isDisabled,
			isSelected,
			onClick
		} = ListItem.defaultProps;

		expect(className).toEqual('');
		expect(alignItems).toEqual(ListItem.AlignItems.CENTER);
		expect(hasItemPadding).toBe(true);
		expect(hasBottomDivider).toBe(false);
		expect(isDense).toBe(false);
		expect(isButton).toBe(false);
		expect(isDisabled).toBe(false);
		expect(isSelected).toBe(false);
		expect(onClick).toBeDefined();
		expect(onClick).toBeInstanceOf(Function);
	});

	it('should render correctly', () => {
		const props = {
			selectedClassName: 'mock-list-selected-className',
			className: 'mock-list-className',
			alignItems: ListItem.AlignItems.CENTER,
			isButton: true,
			isDense: true,
			isDisabled: false,
			hasItemPadding: false,
			hasBottomDivider: false,
			isSelected: false,
			onClick: () => {}
		};

		const wrapper = shallow(
			<ListItem {...props}>
				<div>mock-children</div>
			</ListItem>
		)

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount in a full DOM', () => {
		const props = {
			selectedClassName: 'mock-list-selected-className',
			className: 'mock-list-className',
			alignItems: ListItem.AlignItems.CENTER,
			isButton: true,
			isDense: true,
			isDisabled: false,
			hasItemPadding: false,
			hasBottomDivider: false,
			isSelected: false,
			onClick: () => {}
		};
		const wrapper = mount(
			<ListItem {...props}>
				<div>mock-children</div>
			</ListItem>
		);

		expect(wrapper.props().selectedClassName).toEqual(props.selectedClassName);
		expect(wrapper.props().className).toEqual(props.className);
		expect(wrapper.props().alignItems).toEqual(props.alignItems);
		expect(wrapper.props().isButton).toEqual(props.isButton);
		expect(wrapper.props().isDense).toEqual(props.isDense);
		expect(wrapper.props().isDisabled).toEqual(props.isDisabled);
		expect(wrapper.props().hasItemPadding).toEqual(props.hasItemPadding);
		expect(wrapper.props().hasBottomDivider).toEqual(props.hasBottomDivider);
		expect(wrapper.props().isSelected).toEqual(props.isSelected);
		expect(wrapper.props().onClick).toBeDefined();
		expect(wrapper.props().onClick).toBeInstanceOf(Function);
		expect(wrapper.props().children).toEqual(<div>mock-children</div>);
	});

	it('should handle onClick event', () => {
		const onClickMock = jest.fn();

		const wrapper = mount(
			<ListItem onClick={onClickMock}>
				<div>mock-children</div>
			</ListItem>
		);

		wrapper.simulate('click');

		expect(onClickMock).toHaveBeenCalled();
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});
})
