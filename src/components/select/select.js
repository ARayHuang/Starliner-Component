import React from 'react';
import PropTypes from 'prop-types';
import { Select as CSelect } from '@chakra-ui/react';
import {
	chakraPropTypes,
} from '../utils';

const propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	defaultValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	options: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.node,
		]),
		value: PropTypes.string,
	})).isRequired,
	onChange: PropTypes.func,
	styled: PropTypes.object,
	chakraProps: PropTypes.shape(chakraPropTypes),
};
const defaultProps = {
	onChange: () => {},
};

function Select({
	value,
	defaultValue,
	options,
	onChange,
	styled,
	chakraProps,
	...rest
}) {
	function _renderOption({ label, value } = {}) {
		return <option key={value} value={value}>{label}</option>;
	}

	return (
		<CSelect
			value={value}
			defaultValue={defaultValue}
			onChange={onChange}
			{...styled}
			{...chakraProps}
			{...rest}
		>
			{options && options.map(_renderOption)}
		</CSelect>
	);
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
