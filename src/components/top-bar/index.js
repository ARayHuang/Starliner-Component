import React from 'react';
import PropTypes from 'prop-types';
import {
	Stack,
	Flex,
	Box,
	Divider,
	Spacer,
	Avatar,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';

const propTypes = {
	hasDivider: PropTypes.bool,
	userProfile: PropTypes.object,
	children: PropTypes.node,
	onLogout: PropTypes.func,
	styled: PropTypes.object,
	childrenSx: PropTypes.object,
	userProfileSx: PropTypes.object,
};
const defaultProps = {
	hasDivider: false,
	userProfile: {},
	onLogout: () => {},
};

function TopBar({
	hasDivider,
	children,
	userProfile,
	styled,
	childrenSx,
	userProfileSx,
	onLogout,
}) {
	const { username = '', userEmail = '' } = userProfile;

	return (
		<>
			<Stack h="50px" {...styled}>
				<Flex alignItems="center">
					<Box p="2" sx={childrenSx}>
						{children}
					</Box>
					<Spacer />
					<Box p="2" sx={userProfileSx}>
						<span >{username}/</span>
						<span style={{ fontSize: '7pt', color: '#bdcfe7' }}>{userEmail}</span>
						<Menu>
							<MenuButton>
								<Avatar
									size="sm"
									name={username}
								/>
							</MenuButton>
							<MenuList>
								<MenuItem classnames="logout-menu" onClick={onLogout}>Logout</MenuItem>
							</MenuList>
						</Menu>
						{/* TODO: add logo */}
					</Box>
				</Flex>
			</Stack>
			{hasDivider ? <Divider/> : <></>}
		</>
	);
}

TopBar.propTypes = propTypes;
TopBar.defaultProps = defaultProps;

export default TopBar;
