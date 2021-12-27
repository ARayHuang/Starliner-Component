import React from 'react';
import Block from './index';
import { makeStyles } from '@material-ui/core/styles';

const useStylesForBlock = makeStyles(() => ({
	block: {
		width: '150px',
		height: '200px',
		color: '#003060',
		marginRight: '10px',
	},
	outer: {
		display: 'flex',
		justifyContent: 'space-evenly',
	},
}));

export const outLined = () => {
	const classes = useStylesForBlock();

	return (
		<div className={classes.outer}>
			<Block className={classes.block} variant={Block.VariantType.OUTLINED}>
				With Outlined..
			</Block>
			<Block className={classes.block} variant={Block.VariantType.ELEVATION}>
				With Elevation..
			</Block>
			<Block className={classes.block} variant={Block.VariantType.ELEVATION} shadowNumber={10}>
				With Shadow
			</Block>
			<Block className={classes.block} isSquare>
				With Square..
			</Block>
		</div>
	);
};

export default {
	title: 'Component/Block',
	component: Block,
};
