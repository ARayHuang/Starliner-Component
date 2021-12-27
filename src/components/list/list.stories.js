import React from 'react';
import List from './list';
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

export const basic = () => {
	const classes = useStylesForStyle();

	return (
		<div className={classes.outer}>
			<Block variant={Block.VariantType.OUTLINED}>
				<List className={classes.list}>
					<li>content1</li>
					<li>content2</li>
				</List>
			</Block>
		</div>
	);
};

export default {
	title: 'Component/List/List',
	component: List,
};
