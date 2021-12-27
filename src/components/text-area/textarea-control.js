import React from 'react';
import PropTypes from 'prop-types';
import Textarea from './textarea';
import { useField, useFormikContext } from 'formik';
import FormControl from '../form-control/index';

const propTypes = {
	controlProps: PropTypes.shape({
		name: PropTypes.string,
		label: PropTypes.string,
	}),
};

function TextareaControl({
	controlProps,
	...rest
}) {
	const { name } = controlProps;
	const [field, { error, touched }] = useField(name);
	const { setFieldValue } = useFormikContext();
	const _setFieldValue = name => e => setFieldValue(name, e.target.value);

	return (
		<FormControl {...controlProps }>
			<Textarea
				{...field}
				id={name}
				{...rest}
				onChange={_setFieldValue(name)}
				isInvalid={Boolean(error) && touched}
			/>
		</FormControl>
	);
}

TextareaControl.propTypes = propTypes;

export default TextareaControl;
