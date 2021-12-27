import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import { useField } from 'formik';
import FormControl from '../form-control/index';

const propTypes = {
	controlProps: PropTypes.shape({
		name: PropTypes.string,
		label: PropTypes.string,
	}),
};

function InputControl({
	controlProps,
	...rest
}) {
	const { name } = controlProps;
	const [field] = useField(name);

	return (
		<FormControl {...controlProps }>
			<Input {...field} id={name} {...rest}/>
		</FormControl>
	);
}

InputControl.propTypes = propTypes;

export default InputControl;
