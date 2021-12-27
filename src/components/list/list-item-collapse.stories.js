import React from 'react';
import List from './list';
import ListItemCollapse from './list-item-collapse';
import Block from '../block';
import { makeStyles } from '@material-ui/core/styles';

const useStylesForStyle = makeStyles(() => ({
	outer: {
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	list: {
		paddingRight: '20px',
		paddingLeft: '10px',
	},
	litsItem: {
		color: '#000000',
		fontWeight: 800,
	},
	selectedColor: {
		backgroundColor: '#000',
	},
	collapseBlock: {
		width: '300px',
	},
	collapseList: {
		paddingLeft: '30px',
	},
	collapseTitle: {
		color: '#000000',
		fontWeight: 800,
		paddingLeft: '20px',
	},
}));
const itemsCollapse = [
	{
		key: 'group1',
		text: 'Group 1',
		subItems: [],
	},
	{
		key: 'group2',
		text: 'Group 2',
		subItems: [
			{
				key: 'menu4',
				text: 'Menu 4',
			},
			{
				key: 'menu5',
				text: 'Menu 5',
			},
		],
	},
];

export const collapse = () => {
	const classes = useStylesForStyle();

	return (
		<Block className={classes.collapseBlock} variant={Block.VariantType.ELEVATION} shadowNumber={5}>
			<List>
				{itemsCollapse.map(item => (
					<ListItemCollapse
						classes={classes}
						key={item.key}
						text={item.text}
						subItems={item.subItems}
						onClick={() => {}}
					/>
				))}
			</List>
		</Block>
	);
};

export default {
	title: 'Component/List/ListItemCollapse',
	component: ListItemCollapse,
};
