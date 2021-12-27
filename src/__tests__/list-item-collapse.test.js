import React from 'react';
import { shallow, mount } from 'enzyme';
import ListItemCollapse from '../components/list/list-item-collapse';

describe('ListItemCollapse', () => {
	it('should handle default props', () => {
		const {
			isLink,
			classes,
			onClick,
		} = ListItemCollapse.defaultProps;

		const expectClasses = {
			collapseTitle: '',
			listItem: '',
			selected: ''
		};

		expect(isLink).toBe(false);
		expect(classes).toEqual(expectClasses);
		expect(onClick).toBeDefined();
		expect(onClick).toBeInstanceOf(Function);
	});

	it('should render correctly', () => {
		const props = {
			classes: {
				collapseTitle: '',
				listItem: '',
				selected: ''
			},
			text: 'collapse-text',
			selectedKey: 'mock-selected-key',
			subItems: [
				{
					text: 'item-1',
					key: 'item-2',
					to: 'goto-item-1',
					onClick: () => {},
					isSelected: true
				},
				{
					text: 'item-2',
					key: 'item-2',
					to: 'goto-item-2',
					onClick: () => {},
					isSelected: false
				}
			]
		};

		const wrapper = shallow(
			<ListItemCollapse {...props} />
		)

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount in a full DOM', () => {
		const props = {
			classes: {
				collapseTitle: '',
				listItem: '',
				selected: ''
			},
			text: 'collapse-text',
			selectedKey: 'mock-selected-key',
			subItems: [
				{
					key: 'item-1',
					text: 'item-1',
					to: 'goto-item-1',
					onClick: () => {},
					isSelected: true
				},
				{
					key: 'item-2',
					text: 'item-2',
					to: 'goto-item-2',
					onClick: () => {},
					isSelected: false
				}
			]
		};
		const wrapper = mount(
			<ListItemCollapse {...props} />
		);

		expect(wrapper.props().classes).toEqual(props.classes);
		expect(wrapper.props().text).toEqual(props.text);
		expect(wrapper.props().selectedKey).toEqual(props.selectedKey);
		expect(wrapper.props().subItems).toEqual(props.subItems);
	});

	// it('should handle onClick event', () => {
	// 	const onClickMock = jest.fn();

	// 	const wrapper = mount(
	// 		<ListItem onClick={onClickMock}>
	// 			<div>mock-children</div>
	// 		</ListItem>
	// 	);

	// 	wrapper.simulate('click');

	// 	expect(onClickMock).toHaveBeenCalled();
	// 	expect(onClickMock).toHaveBeenCalledTimes(1);
	// });
})
