import PropTypes from 'prop-types';

const SizeEnums = {
	EXTRA_SMALL: 'xs',
	SMALL: 'sm',
	MIDDLE: 'md',
	LARGE: 'lg',
};
const VariantEnums = {
	OUTLINE: 'outline',
	UNSTYLED: 'unstyled',
	FLUSHED: 'flushed',
	FILLED: 'filled',
};

export const chakraPropTypes = {
	colorScheme: PropTypes.string,
	errorBorderColor: PropTypes.string,
	focusBorderColor: PropTypes.string,
	isDisabled: PropTypes.bool,
	isFullWidth: PropTypes.bool,
	isInvalid: PropTypes.bool,
	isReadOnly: PropTypes.bool,
	size: PropTypes.oneOf(Object.values(SizeEnums).concat('')),
	variant: PropTypes.oneOf(Object.values(VariantEnums).concat('')),
	styled: PropTypes.object,
	sx: PropTypes.object,
};
