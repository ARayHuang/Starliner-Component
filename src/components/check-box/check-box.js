import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as CCheckbox } from '@chakra-ui/react';
import {
	chakraPropTypes,
} from '../utils';

const propTypes = {
	defaultIsChecked: PropTypes.bool,
	isChecked: PropTypes.bool,
	isIndeterminate: PropTypes.bool,
	onChange: PropTypes.func,
	chakraProps: PropTypes.shape(chakraPropTypes),
	styled: PropTypes.object,
	children: PropTypes.node,
};
const defaultProps = {
	isIndeterminate: false,
	onChange: () => {},
};

function Checkbox({
	defaultIsChecked,
	isChecked,
	isIndeterminate,
	onChange,
	children,
	styled,
	chakraProps,
}) {
	return (
		<CCheckbox
			defaultIsChecked={defaultIsChecked}
			isChecked={isChecked}
			isIndeterminate={isIndeterminate}
			onChange={onChange}
			{...styled}
			{...chakraProps}
		>
			{children}
		</CCheckbox>
	);
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
