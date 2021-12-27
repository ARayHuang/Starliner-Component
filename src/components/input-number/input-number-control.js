import React from 'react';
import PropTypes from 'prop-types';
import InputNumber from './input-number';
import { useField, useFormikContext } from 'formik';
import FormControl from '../form-control/index';

const propTypes = {
	controlProps: PropTypes.shape({
		name: PropTypes.string,
		label: PropTypes.string,
	}),
};

function InputNumberControl({
	controlProps,
	...rest
}) {
	const { name } = controlProps;
	const [field, { error, touched }] = useField(name);
	const { setFieldValue } = useFormikContext();
	const _setFieldValue = name => value => setFieldValue(name, value);

	return (
		<FormControl {...controlProps}>
			<InputNumber
				{...field}
				id={name}
				{...rest}
				onChange={_setFieldValue(name)}
				isInvalid={Boolean(error) && touched}
			/>
		</FormControl>
	);
}

InputNumberControl.propTypes = propTypes;

export default InputNumberControl;
