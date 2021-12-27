import React from 'react';
import List from './list';
import ListItem from './list-item';
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
		'&.Mui-selected': {
			backgroundColor: 'turquoise',
		},
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
const items = [
	{
		text: 'Single-line item',
		key: 'item1',
	},
	{
		text: 'Single-line item',
		key: 'item2',
	},
	{
		text: 'Single-line item',
		key: 'item3',
	},
];

export const basic = () => {
	const classes = useStylesForStyle();

	return (
		<div className={classes.outer}>
			<Block variant={Block.VariantType.OUTLINED}>
				<List className={classes.list}>
					{items.map(item => (
						<ListItem key={item.key} hasBottomDivider>
							{`。${item.text}`}
						</ListItem>
					))}
				</List>
			</Block>
			<Block variant={Block.VariantType.ELEVATION} shadowNumber={5}>
				<List className={classes.list}>
					<ListItem hasBottomDivider>Team1</ListItem>
					{items.map(item => (
						<ListItem key={item.key} isButton>
							{item.text}
						</ListItem>
					))}
				</List>
			</Block>
		</div>
	);
};

export const selected = () => {
	const classes = useStylesForStyle();

	return (
		<Block className={classes.collapseBlock} variant={Block.VariantType.ELEVATION} shadowNumber={5}>
			<List className={classes.list}>
				<ListItem
					selectedClassName={classes.selectedColor}
					isButton
					isSelected
				>menu1</ListItem>
				<ListItem isButton>menu1</ListItem>
			</List>
		</Block>
	);
};

export default {
	title: 'Component/List/ListItem',
	component: ListItem,
};
