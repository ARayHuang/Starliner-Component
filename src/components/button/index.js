import React from 'react';
import { Button as CButton, Tooltip } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const VariantType = {
	SOLID: 'solid',
	OUTLINE: 'outline',
	GHOST: 'ghost',
	LIST: 'list',
};
const Size = {
	XS: 'xs',
	SM: 'sm',
	MD: 'md',
	LG: 'lg',
};
const defaultStyle = {
	border: '1px solid transparent',
	borderRadius: '4px',
	boxShadow: '0px 3px 1px -2px rgba(#000, 0.2), 0px 2px 2px 0px rgba(#000, 0.14), 0px 1px 5px 0px rgba(#000, 0.12)',
};
const propTypes = {
	className: PropTypes.string,
	variant: PropTypes.oneOf(Object.values(VariantType).concat('')),
	size: PropTypes.oneOf(Object.values(Size).concat('')),
	text: PropTypes.string,
	icon: PropTypes.element,
	onClick: PropTypes.func,
	sx: PropTypes.object,
	styled: PropTypes.object,
	tooltip: PropTypes.string,
	isDisabledTooltip: PropTypes.bool,
	isDisabled: PropTypes.bool,
};
const defaultProps = {
	variant: VariantType.REGULAR,
	size: Size.SM,
	sx: {},
};

function Button({
	className,
	variant,
	size,
	text,
	icon,
	onClick,
	styled,
	sx,
	tooltip,
	isDisabled,
	isDisabledTooltip,
}) {
	return (
		<>
			<Tooltip
				label={tooltip}
				isDisabled={isDisabledTooltip}
				borderRadius="4px">
				<CButton
					className={className}
					variant={variant}
					size={size}
					disabled={isDisabled}
					leftIcon={icon}
					onClick={onClick}
					sx={{ ...defaultStyle, ...sx }}
					{...styled}
				>
					{text}
				</CButton>
			</Tooltip>
		</>
	);
}

Button.VariantType = VariantType;
Button.Size = Size;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
