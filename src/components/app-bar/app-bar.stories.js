import React from 'react';
import AppBar from './index';
import { makeStyles } from '@material-ui/core/styles';

const useStylesForAppBar = makeStyles(() => ({
	appBar: {
		backgroundColor: '#003060',
		display: 'flex',
		marginBottom: '20px',
	},
	outer: {
		display: 'flex',
		flexDirection: 'column',
	},
	leftItem: {
		color: '#FFFFFF',
		marginRight: 'auto',
	},
	rightItem: {
		color: '#FFFFFF',
		marginLeft: 'auto',
	},
	leftItem2: {
		color: '#000000',
		marginRight: 'auto',
	},
	rightItem2: {
		color: '#000000',
		marginLeft: 'auto',
		textDecoration: 'underline',
	},
}));

export const basic = () => {
	const classes = useStylesForAppBar();

	return (
		<div className={classes.outer}>
			<AppBar position={AppBar.PositionType.STATIC} className={classes.appBar} classes={classes}>
				<div className={classes.leftItem}>logo</div>
				<div className={classes.rightItem}>login</div>
			</AppBar>

			<AppBar position={AppBar.PositionType.STATIC}>
				<div className={classes.leftItem2}>logo</div>
				<div className={classes.rightItem2}>login</div>
			</AppBar>
		</div>
	);
};

export default {
	title: 'Component/AppBar',
	component: AppBar,
};
