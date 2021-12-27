import React from 'react';
import PropTypes from 'prop-types';
import { default as MListItem } from '@material-ui/core/ListItem';

const AlignItems = {
	FLEX_START: 'flex-start',
	CENTER: 'center',
};
const propTypes = {
	className: PropTypes.string,
	selectedClassName: PropTypes.string,
	alignItems: PropTypes.oneOf(Object.values(AlignItems).concat('')),
	isDense: PropTypes.bool,
	isButton: PropTypes.bool,
	isDisabled: PropTypes.bool,
	hasItemPadding: PropTypes.bool,
	hasBottomDivider: PropTypes.bool,
	isSelected: PropTypes.bool,
	children: PropTypes.any,
	onClick: PropTypes.func,
};
const defaultProps = {
	className: '',
	alignItems: AlignItems.CENTER,
	hasItemPadding: true,
	hasBottomDivider: false,
	isDense: false,
	isButton: false,
	isDisabled: false,
	isSelected: false,
	onClick: () => {},
	classes: {
		selected: '',
	},
};

function ListItem({
	selectedClassName,
	className,
	alignItems,
	isButton,
	isDense,
	isDisabled,
	hasItemPadding,
	hasBottomDivider,
	isSelected,
	children,
	onClick,
}) {
	return (
		<MListItem
			className={className}
			classes={{
				selected: selectedClassName,
			}}
			alignItems={alignItems}
			button={isButton}
			dense={isDense}
			disabled={isDisabled}
			disableGutters={hasItemPadding}
			divider={hasBottomDivider}
			selected={isSelected}
			onClick={onClick}
		>
			{children}
		</MListItem>
	);
}

ListItem.AlignItems = AlignItems;
ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
