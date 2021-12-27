import React from 'react';
import { default as MPaper } from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const VariantType = {
	ELEVATION: 'elevation',
	OUTLINED: 'outlined',
};
const propTypes = {
	className: PropTypes.string,
	variant: PropTypes.oneOf(Object.values(VariantType).concat('')),
	shadowNumber: PropTypes.number,
	children: PropTypes.node,
	isSquare: PropTypes.bool,
};

function Block({
	className,
	variant,
	shadowNumber,
	children,
	isSquare,
}) {
	return (
		<MPaper
			className={className}
			variant={variant}
			elevation={shadowNumber}
			square={isSquare}
		>
			{children}
		</MPaper>
	);
}

Block.VariantType = VariantType;
Block.propTypes = propTypes;

export default Block;
