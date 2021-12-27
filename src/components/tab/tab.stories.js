import React, { useState } from 'react';
import Tab from './index';
import { makeStyles } from '@material-ui/core/styles';
import { AddIcon } from '@chakra-ui/icons';
import IconButton from '../button-icon';
import { Box, Text } from '@chakra-ui/react';
import './tab.css';

const useStylesForButton = makeStyles(() => ({
	outer: {
		'& button': {
			marginLeft: '0',
		},
	},
}));
const tabList = [
	{ title: 'DB', content: <div className="page">DB page</div> },
	{ title: 'SI', content: <div>SI page</div> },
	{ title: 'PV', content: <div>PV page</div> },
];
const endComponent = <IconButton size="md" icon={<AddIcon/>} className="btn--indigo" />;
const width = '400';

export const regular = () => {
	const classes = useStylesForButton();
	const [tabIndex, setTabIndex] = useState(1);
	const _renderWarning = () => {
		if (tabList.length < 1) {
			return <Box mx={2}>
				<Text fontSize="sm" color="gray.500">currently there's no item.</Text>
			</Box>;
		}
	};
	const onChange = index => {
		setTabIndex(index);
		console.log('switched!!');
	};

	return (
		<div className={classes.outer}>
		    <div>
				<label>Default focus: {tabList.length > 0 && tabList[1].title}</label>
			</div>
		    <div>
				<label>Current focus: {tabList.length > 0 && tabList[tabIndex].title}</label>
			</div>
			{_renderWarning()}
			{<Tab
				tabList={tabList}
				onChange={onChange}
				endComponent={endComponent}
				className="phase_container"
				width={width}
				defaultFocus={1}></Tab>}
		</div>
	);
};

export default {
	title: 'Component/Tab',
	component: Tab,
};
