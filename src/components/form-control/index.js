import React from 'react';
import PropTypes from 'prop-types';
import {
	FormControl as ChakraFormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
} from '@chakra-ui/react';
import { useField } from 'formik';

const propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	helperText: PropTypes.string,
	children: PropTypes.node,
};

function FormControl({
	name,
	label,
	helperText,
	children,
	...rest
}) {
	const [, { error, touched }] = useField(name);

	return (
		<ChakraFormControl isInvalid={Boolean(error) && touched} {...rest}>
			{label && <FormLabel htmlFor={name}>{label}</FormLabel>}
			{children}
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
			{helperText && <FormHelperText>{helperText}</FormHelperText>}
		</ChakraFormControl>
	);
}

FormControl.propTypes = propTypes;

export default FormControl;
