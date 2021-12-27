import React from 'react';
import PropTypes from 'prop-types';
import {
	Box,
} from '@chakra-ui/react';

const propTypes = {
	isOpen: PropTypes.bool,
	isFixedWidth: PropTypes.bool,
	width: PropTypes.string,
	collapseWidth: PropTypes.string,
	renderChildren: PropTypes.func,
	renderCollapseChildren: PropTypes.func,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
	styled: PropTypes.object,
};
const defaultProps = {
	isOpen: false,
	isFixedWidth: false,
	width: '250px',
	collapseWidth: '30px',
	onMouseEnter: () => {},
	onMouseLeave: () => {},
	renderChildren: () => {},
	renderCollapseChildren: () => {},
};

function Sidebar({
	isOpen,
	isFixedWidth,
	width,
	collapseWidth,
	renderChildren,
	renderCollapseChildren,
	onMouseEnter,
	onMouseLeave,
	styled,
}) {
	function _getWidth() {
		if (isFixedWidth) {
			return width;
		}

		return isOpen ? width : collapseWidth;
	}

	function _handleRenderChildren() {
		if (isFixedWidth) {
			return renderChildren();
		}

		return isOpen ? renderChildren() : renderCollapseChildren();
	}

	return (
		<Box
			as="nav"
			display="block"
			width={_getWidth()}
			height="100vh"
			right="0"
			py="5"
			px="3"
			transition="all 0.2s"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			{...styled}
		>
			{_handleRenderChildren()}
		</Box>
	);
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
