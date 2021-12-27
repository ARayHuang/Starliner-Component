import React from 'react';
import {
	Tag as CTag,
	TagLabel,
	TagLeftIcon,
	TagCloseButton,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const VariantType = {
	SOLID: 'solid',
	OUTLINE: 'outline',
	SUBTLE: 'subtle',
};
const Size = {
	SM: 'sm',
	MD: 'md',
	LG: 'lg',
};
const propTypes = {
	className: PropTypes.string,
	variant: PropTypes.oneOf(Object.values(VariantType).concat('')),
	size: PropTypes.oneOf(Object.values(Size).concat('')),
	isShowCloseBtn: PropTypes.bool,
	text: PropTypes.string,
	icon: PropTypes.object,
	onClick: PropTypes.func,
	styled: PropTypes.object,
	sx: PropTypes.object,
};
const defaultProps = {
	variant: VariantType.SOLID,
	size: Size.SM,
	isShowCloseBtn: false,
	sx: {},
};

function Tag({
	className,
	variant,
	size,
	isShowCloseBtn,
	text,
	icon,
	onClick,
	styled,
	sx,
}) {
	return (
		<>
			<CTag
				className={className}
				variant={variant}
				size={size}
				sx={sx}
				{...styled}
			>
				{ icon ? <TagLeftIcon as={icon} /> : null}
				<TagLabel>{text}</TagLabel>
				{ isShowCloseBtn ? <TagCloseButton onClick={onClick} /> : null}
			</CTag>
		</>
	);
}

Tag.VariantType = VariantType;
Tag.Size = Size;
Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
