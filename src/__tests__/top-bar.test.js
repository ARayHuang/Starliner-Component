import React from 'react';
import { shallow, mount } from 'enzyme';
import TopBar from '../components/top-bar';

describe('TopBar', () => {
	it('handle default props', () => {
		const  {
			hasDivider,
			userProfile,
			onLogout
		} = TopBar.defaultProps;

		expect(hasDivider).toBe(false);
		expect(userProfile).toEqual({});
		expect(onLogout).toBeInstanceOf(Function);
	});

	it('should render correctly', () => {
		const props = {
			userProfile: {
				username: 'mock-username',
				userEmail: 'mock-email'
			},
			hasDivider: true,
			childrenSx: {
				color: '#3f4a57'
			},
			userProfileSx: {
				backgroundColor: '#ebf2fa'
			},
			onLogout: () => {}
		};

		const wrapper = shallow(
			<TopBar {...props}>
				<div>mock-children</div>
			</TopBar>
		)

		expect(wrapper).toMatchSnapshot();
	})

	it('should mount in a full DOM', () => {
		const props = {
			userProfile: {
				username: 'mock-username',
				userEmail: 'mock-email'
			},
			hasDivider: true,
			childrenSx: {
				color: '#3f4a57'
			},
			userProfileSx: {
				backgroundColor: '#ebf2fa'
			},
			onLogout: () => {}
		};

		const wrapper = mount(
			<TopBar {...props} />
		);

		expect(wrapper.props().userProfile).toEqual(props.userProfile);
		expect(wrapper.props().hasDivider).toEqual(props.hasDivider);
		expect(wrapper.props().childrenSx).toEqual(props.childrenSx);
		expect(wrapper.props().userProfileSx).toEqual(props.userProfileSx);
		expect(wrapper.props().onLogout).toEqual(props.onLogout);
	})
})
