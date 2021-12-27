import React from 'react';
import { shallow, mount } from 'enzyme';
import SideBar from '../components/side-bar';

describe('side bar ', () => {
	it('handle default props', () => {
		const  {
			isOpen,
			isFixedWidth,
			width,
			collapseWidth,
			onMouseEnter,
			onMouseLeave
		} = SideBar.defaultProps;

		expect(isOpen).toEqual(false);
		expect(isFixedWidth).toEqual(false);
		expect(width).toEqual('250px');
		expect(collapseWidth).toEqual('30px');
		expect(onMouseEnter).toBeInstanceOf(Function);
		expect(onMouseLeave).toBeInstanceOf(Function);
	});

	it('should render correctly', () => {
		const props = {
			isOpen: true,
			width: '150px',
			collapseWidth: '40px',
			styled: {
				color: '#FFF',
				bg: '#0c1d47'
			},
			children: 'mock-children',
			collapseChildren: 'mock-collapseChildren',
			onMouseEnter: () => {},
			onMouseLeave: () => {}
		}

		const wrapper = shallow(
			<SideBar {...props}/>
		)

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount in a full DOM', () => {
		const props = {
			isOpen: true,
			width: '150px',
			collapseWidth: '40px',
			styled: {
				color: '#FFF',
				bg: '#0c1d47'
			},
			children: 'mock-children',
			collapseChildren: 'mock-collapseChildren',
			onMouseEnter: () => {},
			onMouseLeave: () => {}
		}
		const wrapper = mount(
			<SideBar {...props}/>
		);

		expect(wrapper.props().isOpen).toEqual(props.isOpen);
		expect(wrapper.props().width).toEqual(props.width);
		expect(wrapper.props().collapseWidth).toEqual(props.collapseWidth);
		expect(wrapper.props().styled).toEqual(props.styled);
		expect(wrapper.props().children).toEqual(props.children);
		expect(wrapper.props().collapseChildren).toEqual(props.collapseChildren);
		expect(wrapper.props().onMouseEnter).toEqual(props.onMouseEnter);
		expect(wrapper.props().onMouseLeave).toEqual(props.onMouseLeave);
	})
})
