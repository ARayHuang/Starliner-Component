import React from 'react';
import { default as MAppBar } from '@material-ui/core/AppBar';
import { default as MToolbar } from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';

const PositionType = {
	ABSOLUTE: 'absolute',
	FIXED: 'fixed',
	RELATIVE: 'relative',
	STATIC: 'static',
	STICKY: 'sticky',
};
const propTypes = {
	className: PropTypes.string,
	position: PropTypes.oneOf(Object.values(PositionType).concat('')),
	children: PropTypes.any,
};

function AppBar({ className, position, children }) {
	return (
		<MAppBar
			className={className}
			position={position}
			color="transparent"
		>
			<MToolbar>
				{children}
			</MToolbar>
		</MAppBar>
	);
}

AppBar.PositionType = PositionType;
AppBar.propTypes = propTypes;

export default AppBar;
