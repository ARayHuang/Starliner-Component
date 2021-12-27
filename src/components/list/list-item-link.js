import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './list-item';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyleForLink = makeStyles(() => ({
	link: {
		textDecoration: 'none',
		color: '#FFFFFF',
		paddingLeft: '20px',
	},
}));
const propTypes = {
	text: PropTypes.string,
	to: PropTypes.string,
	className: PropTypes.string,
	alignItems: PropTypes.string,
	hasBottomDivider: PropTypes.bool,
	isSelected: PropTypes.bool,
	onClick: PropTypes.func,
};
const defaultProps = {
	className: '',
	hasBottomDivider: false,
	isSelected: false,
	onClick: () => {},
};

function ListItemLink({
	text,
	to,
	className,
	alignItems,
	hasBottomDivider,
	isSelected,
	onClick,
}) {
	const { link } = useStyleForLink();

	return (
		<ListItem
			className={className}
			alignItems={alignItems}
			divider={hasBottomDivider}
			isSelected={isSelected}
			onClick={onClick}
			isButton
		>
			<Link className={link} to={to}>{text}</Link>
		</ListItem>
	);
}

ListItemLink.propTypes = propTypes;
ListItemLink.defaultProps = defaultProps;

export default ListItemLink;
