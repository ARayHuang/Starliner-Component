import React from 'react';
import PropTypes from 'prop-types';
import Select from './select';
import { useField } from 'formik';
import FormControl from '../form-control/index';

const propTypes = {
	controlProps: PropTypes.shape({
		name: PropTypes.string,
		label: PropTypes.string,
	}),
};

function SelectControl({
	controlProps,
	...rest
}) {
	const { name } = controlProps;
	const [field] = useField(name);

	return (
		<FormControl {...controlProps }>
			<Select {...field} id={name} {...rest}/>
		</FormControl>
	);
}

SelectControl.propTypes = propTypes;

export default SelectControl;
