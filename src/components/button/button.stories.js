import React from 'react';
import Button from './index';
import { makeStyles } from '@material-ui/core/styles';
import { AddIcon } from '@chakra-ui/icons';

const useStylesForButton = makeStyles(() => ({
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
	const classes = useStylesForButton();

	return (
		<div className={classes.outer}>
			<div>
				<label>{Button.Size.XS}</label>
				<Button
					variant={Button.VariantType.SOLID}
					size={Button.Size.XS}
					text={content.text}
					tooltip="Add Items"/>
				<Button
					variant={Button.VariantType.SOLID}
					icon={<AddIcon />}
					size={Button.Size.XS}
					text={content.text} />
			</div>
			<div>
				<label>{Button.Size.SM}</label>
				<Button
					variant={Button.VariantType.SOLID}
					size={Button.Size.SM}
					text={content.text}></Button>
				<Button
					variant={Button.VariantType.SOLID}
					icon={<AddIcon />} size={Button.Size.SM}
					text={content.text} />
			</div>
		</div>
	);
};

export const outLined = () => {
	const classes = useStylesForButton();

	return (
		<div className={classes.outer}>
			<div>
				<label>{Button.Size.XS}</label>
				<Button
					variant={Button.VariantType.OUTLINE}
					size={Button.Size.XS}
					text={content.text} />
				<Button variant={Button.VariantType.OUTLINE} icon={<AddIcon />} size={Button.Size.XS} text={content.text}></Button>
			</div>
			<div>
				<label>{Button.Size.SM}</label>
				<Button
					variant={Button.VariantType.OUTLINE}
					size={Button.Size.SM}
					text={content.text}/>
				<Button
					variant={Button.VariantType.OUTLINE}
					icon={<AddIcon />}
					size={Button.Size.SM}
					text={content.text} />
			</div>
		</div>
	);
};

export default {
	title: 'Component/Button',
	component: Button,
};
