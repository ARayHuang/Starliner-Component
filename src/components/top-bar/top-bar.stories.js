import React from 'react';
import TopBar from './index';
import {
	Divider,
	Text,
	Stack,
} from '@chakra-ui/react';

const userProfile = {
	username: 'ray.huang',
	userEmail: 'ray.huang@hp.com',
};

export const basic = () => {
	return (
		<>
			<TopBar
				userProfile={userProfile}
				hasDivider={true}
				childrenSx={{
					color: '#3f4a57',
				}}
				userProfileSx={{
					backgroundColor: '#ebf2fa',
				}}
			>
				<Stack direction="row" h="50px" p={4}>
					<Text>SVTP</Text>
					<Divider orientation="vertical" />
					<Text>Insight Lab</Text>
					<Divider orientation="vertical" />
					<Text>HW</Text>
					<Divider orientation="vertical" />
					<Text>Commodity</Text>
				</Stack>
			</TopBar>
		</>
	);
};

export default {
	title: 'Component/TopBar',
	component: TopBar,
};
