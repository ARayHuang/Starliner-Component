import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import groupBy from 'lodash/groupBy';
import cloneDeep from 'lodash/cloneDeep';
import PropTypes from 'prop-types';

const propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
		}),
	),
	value: PropTypes.arrayOf(PropTypes.string),
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	className: PropTypes.string,
};
const defaultProps = {
	onChange: () => {},
	options: [],
	value: [],
	placeholder: '',
};

function MultiSelect({ options, placeholder, value, onChange, className }) {
	const optionsMap = groupBy(options, option => {
		return option.value;
	});
	const mappedSelectedOptions = cloneDeep(value ?? []).map(option => {
		return optionsMap[option]?.[0];
	});
	const _handleChange = selectedOptions => {
		const mappedOptions = selectedOptions.map(option => {
			return option.value;
		});

		onChange(mappedOptions);
	};

	return (
		<Select
			className={className}
			components={makeAnimated()}
			options={options}
			onChange={_handleChange}
			value={mappedSelectedOptions}
			placeholder={placeholder}
			closeMenuOnSelect={false}
			isMulti
		/>
	);
}

MultiSelect.propTypes = propTypes;
MultiSelect.defaultProps = defaultProps;

export default MultiSelect;
