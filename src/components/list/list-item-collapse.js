import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from './list';
import ListItemLink from './list-item-link';
import ListItem from './list-item';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyleForDefaultSubItem = makeStyles(() => ({
	defaultSubItem: {
		paddingLeft: '10px',
	},
}));
const propTypes = {
	classes: PropTypes.object,
	text: PropTypes.string,
	subItems: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.string,
		text: PropTypes.string,
		to: PropTypes.string,
		onClick: PropTypes.func,
		isSelected: PropTypes.bool,
	})),
	onClick: PropTypes.func,
	selectedKey: PropTypes.string,
	isLink: PropTypes.bool,
};
const defaultProps = {
	isLink: false,
	classes: {
		collapseTitle: '',
		listItem: '',
		selected: '',
	},
	onClick: () => {},
};

function ListItemCollapse({
	text,
	subItems,
	classes,
	selectedKey,
	onClick,
	isLink,
}) {
	const [open, setOpen] = useState(false);
	const { collapseTitle, listItem, selected, collapseList } = classes;
	const { defaultSubItem } = useStyleForDefaultSubItem();

	function _handleClickExpand() {
		setOpen(!open);
	}

	function _handleRenderSubItem() {
		return subItems.map(item => (
			<ListItem
				className={`${defaultSubItem} ${listItem}`}
				classes={{
					selected,
				}}
				key={item.key}
				onClick={() => onClick(item.key)}
				isSelected={selectedKey === item.key}
				isDense
				isButton
			>
				{item.text}
			</ListItem>
		));
	}

	function _handleRenderSubItemLink() {
		return subItems.map(item => (
			<ListItemLink
				className={`${defaultSubItem} ${listItem}`}
				classes={{
					selected,
				}}
				key={item.key}
				text={item.text}
				to={item.to}
				onClick={() => onClick(item.key)}
				isSelected={selectedKey === item.key}
			/>
		));
	}

	return (
		<>
			<ListItem onClick={_handleClickExpand} button isDense>
				<div className={collapseTitle}>{text}</div>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List className={collapseList} component="div" disablePadding>
					{isLink ? _handleRenderSubItemLink() : _handleRenderSubItem()}
				</List>
			</Collapse>
		</>
	);
}

ListItemCollapse.defaultProps = defaultProps;
ListItemCollapse.propTypes = propTypes;

export default ListItemCollapse;
