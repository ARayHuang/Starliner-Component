import React from 'react';
import PropTypes from 'prop-types';
import {
	Input as CInput,
	InputGroup as CInputGroup,
	InputLeftAddon as CInputLeftAddon,
	InputRightAddon as CInputRightAddon,
} from '@chakra-ui/react';
import {
	chakraPropTypes,
} from '../utils';

const propTypes = {
	value: PropTypes.string,
	placeholder: PropTypes.string,
	prefix: PropTypes.string,
	suffix: PropTypes.string,
	onChange: PropTypes.func,
	styled: PropTypes.object,
	chakraProps: PropTypes.shape(chakraPropTypes),
};
const defaultProps = {
	onChange: () => {},
};

function Input({
	value,
	placeholder,
	prefix,
	suffix,
	onChange,
	styled,
	chakraProps,
	...rest
}) {
	function _renderPrefix() {
		return <CInputLeftAddon>{prefix}</CInputLeftAddon>;
	}

	function _renderSuffix() {
		return <CInputRightAddon>{suffix}</CInputRightAddon>;
	}

	return (
		<CInputGroup {...chakraProps} {...styled} >
			{prefix && _renderPrefix()}
			<CInput
				{...rest}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
			{suffix && _renderSuffix()}
		</CInputGroup>
	);
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
