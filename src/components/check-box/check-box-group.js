import React from 'react';
import PropTypes from 'prop-types';
import {
	CheckboxGroup as CCheckboxGroup,
	Checkbox as CCheckbox,
	HStack,
} from '@chakra-ui/react';
import {
	chakraPropTypes,
} from '../utils';

const propTypes = {
	checkboxes: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.node,
		]),
		value: PropTypes.string,
	})).isRequired,
	defaultValue: PropTypes.array,
	value: PropTypes.array,
	onChange: PropTypes.func,
	chakraProps: PropTypes.shape(chakraPropTypes),
	styled: PropTypes.object,
};
const defaultProps = {
	onChange: () => {},
};

function CheckboxGroup({
	checkboxes,
	defaultValue,
	value,
	onChange,
	styled,
	chakraProps,
}) {
	function _renderCheckbox({ value, label } = {}) {
		return <CCheckbox key={value} value={value}>{label}</CCheckbox>;
	}

	return (
		<CCheckboxGroup
			defaultValue={defaultValue}
			value={value}
			onChange={onChange}
			{...styled}
			{...chakraProps}
		>
			<HStack>
				{checkboxes && checkboxes.map(_renderCheckbox)}
			</HStack>
		</CCheckboxGroup>
	);
}

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;

export default CheckboxGroup;
