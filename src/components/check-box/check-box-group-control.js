
import React from 'react';
import PropTypes from 'prop-types';
import CheckboxGroup from './check-box-group';
import { useField, useFormikContext } from 'formik';
import FormControl from '../form-control/index';

const propTypes = {
	controlProps: PropTypes.shape({
		name: PropTypes.string,
		label: PropTypes.string,
	}),
};

function CheckboxGroupControl({
	controlProps,
	...rest
}) {
	const { name } = controlProps;
	const [field] = useField(name);
	const { setFieldValue } = useFormikContext();
	const _setFieldValue = name => value => setFieldValue(name, value);

	return (
		<FormControl {...controlProps }>
			<CheckboxGroup {...field} id={name} {...rest} onChange={_setFieldValue(name)}/>
		</FormControl>
	);
}

CheckboxGroupControl.propTypes = propTypes;

export default CheckboxGroupControl;
