import React, { useEffect } from 'react';
import useToast, { VariantEnum, StatusEnum } from './index';
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
	const toast = useToast();
	const _handleShowToast = e => {
		return toast({
			title: 'test',
			description: e.type,
			variant: VariantEnum.TOP_ACCENT,
			status: StatusEnum.WARNING,
		});
	};

	useEffect(() => {
		toast({ description: '222' });
	});

	return (
		<div className={classes.outer}>
			<button onClick={_handleShowToast}>Show Toast</button>
		</div>
	);
};

export default {
	title: 'Component/Toast',
	component: useToast,
};
