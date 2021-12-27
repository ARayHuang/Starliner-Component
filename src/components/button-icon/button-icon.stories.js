import React from 'react';
import IconButton from './index';
import { makeStyles } from '@material-ui/core/styles';
import { AddIcon } from '@chakra-ui/icons';

const UseStylesForButton = makeStyles(theme => ({
	outer: {
		display: 'flex',
		justifyContent: 'space-evenly',
		'& label': {
			marginRight: '10px',
		},
	},
}));
const content = {
	text: 'Button',
	icon: AddIcon,
};

export const regular = () => {
	const classes = UseStylesForButton();

	return (
		<div className={classes.outer}>
			<div>
				<label>{IconButton.Size.XS}</label>
				<IconButton
					variant={IconButton.VariantType.SOLID}
					icon={<AddIcon />}
					size={IconButton.Size.MD}
					text={content.text}
					tooltip="Add Items"/>
			</div>

			<div>
				<label>{IconButton.Size.SM}</label>
				<IconButton variant={IconButton.VariantType.SOLID}
					icon={<AddIcon />} size={IconButton.Size.LG}
					text={content.text} />
			</div>
		</div>
	);
};

export const outlined = () => {
	const classes = UseStylesForButton();

	return (
		<div className={classes.outer}>
			<div>
				<label>{IconButton.Size.XS}</label>
				<IconButton
					variant={IconButton.VariantType.OUTLINE}
					icon={<AddIcon />}
					size={IconButton.Size.MD}
					tooltip="Add Items" />
			</div>

			<div>
				<label>{IconButton.Size.SM}</label>
				<IconButton
					variant={IconButton.VariantType.OUTLINE}
					icon={<AddIcon />}
					size={IconButton.Size.LG} />
			</div>
		</div>
	);
};

export default {
	title: 'Component/ButtonIcon',
	component: IconButton,
};
