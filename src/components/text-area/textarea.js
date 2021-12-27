import React from 'react';
import PropTypes from 'prop-types';
import { Textarea as CTextarea } from '@chakra-ui/react';
import {
	chakraPropTypes,
} from '../utils';

const propTypes = {
	placeholder: PropTypes.string,
	defaultValue: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	styled: PropTypes.object,
	chakraProps: PropTypes.shape(chakraPropTypes),
};
const defaultProps = {
	onChange: () => {},
};

function Textarea({
	placeholder,
	value,
	defaultValue,
	onChange,
	styled,
	chakraProps,
}) {
	return (
		<CTextarea
			placeholder={placeholder}
			value={value}
			defaultValue={defaultValue}
			onChange={onChange}
			{...styled}
			{...chakraProps}
		/>
	);
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
