import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import groupBy from 'lodash/groupBy';
import cloneDeep from 'lodash/cloneDeep';
import PropTypes from 'prop-types';
import FormControl from '../form-control/index';
import { useFormikContext } from 'formik';

const propTypes = {
	controlProps: PropTypes.shape({
		name: PropTypes.string,
		label: PropTypes.string,
	}),
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
		}),
	),
	value: PropTypes.arrayOf(PropTypes.string),
	placeholder: PropTypes.string,
	className: PropTypes.string,
};
const defaultProps = {
	onChange: () => {},
	options: [],
	value: [],
	placeholder: '',
};

function MultiSelectControl({
	controlProps,
	options,
	placeholder,
	className,
	shouldValidate,
	styled,
}) {
	const { name } = controlProps;
	const { values, setFieldValue } = useFormikContext();
	const optionsMap = groupBy(options, option => {
		return option.value;
	});
	const mappedSelectedOptions = cloneDeep(values[name] ?? [])
		.map(option => {
			return optionsMap[option]?.[0];
		});
	const _handleChange = selectedOptions => {
		const mappedOptions = selectedOptions.map(option => {
			return option.value;
		});

		setFieldValue(name, mappedOptions, shouldValidate);
	};

	return (
		<FormControl {...controlProps}>
			<Select
				id={name}
				components={makeAnimated()}
				options={options}
				onChange={_handleChange}
				value={mappedSelectedOptions}
				placeholder={placeholder}
				closeMenuOnSelect={false}
				className={className}
				{...styled}
				isMulti
			/>
		</FormControl>
	);
}

MultiSelectControl.propTypes = propTypes;
MultiSelectControl.defaultProps = defaultProps;

export default MultiSelectControl;
