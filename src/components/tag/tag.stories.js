import React from 'react';
import Tag from './index';
import { makeStyles } from '@material-ui/core/styles';
import { CheckIcon } from '@chakra-ui/icons';

const useStylesForButton = makeStyles(() => ({
	outer: {
		display: 'flex',
		justifyContent: 'space-evenly',
		'& label': {
			marginRight: '10px',
			verticalAlign: 'middle',
		},
		'& div': {
			marginBottom: '14px',
		},
	},
	tag: {
		padding: '10px 14px',
		borderRadius: '30px',
		marginRight: '10px',
		verticalAlign: 'middle',
	},
}));
const content = {
	text: 'Pass',
	icon: CheckIcon,
};

export const regular = () => {
	const classes = useStylesForButton();

	return (
		<div className={classes.outer}>
			<div>
				{Object.keys(Tag.Size).map(size => (
					<div key={size}>
						<label>{size}</label>
						<Tag className={classes.tag} variant={Tag.VariantType.SOLID} size={Tag.Size[size]} text={content.text} isShowCloseBtn={true}></Tag>
						<Tag className={classes.tag} variant={Tag.VariantType.SOLID} size={Tag.Size[size]} icon={content.icon} text={content.text}></Tag>
					</div>
				))}
			</div>
		</div>
	);
};

export const outline = () => {
	const classes = useStylesForButton();

	return (
		<div className={classes.outer}>
			<div>
				{Object.keys(Tag.Size).map(size => (
					<div key={size}>
						<label>{size}</label>
						<Tag className={classes.tag} variant={Tag.VariantType.OUTLINE} size={Tag.Size[size]} text={content.text} isShowCloseBtn={true}></Tag>
						<Tag className={classes.tag} variant={Tag.VariantType.OUTLINE} size={Tag.Size[size]} icon={content.icon} text={content.text}></Tag>
					</div>
				))}
			</div>
		</div>
	);
};

export default {
	title: 'Component/Tag',
	component: Tag,
};
