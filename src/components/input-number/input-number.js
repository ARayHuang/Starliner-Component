import React from 'react';
import PropTypes from 'prop-types';
import {
	NumberInput as CNumberInput,
	NumberInputField as CNumberInputField,
	NumberInputStepper as CNumberInputStepper,
	NumberIncrementStepper as CNumberIncrementStepper,
	NumberDecrementStepper as CNumberDecrementStepper,
} from '@chakra-ui/react';
import {
	chakraPropTypes,
} from '../utils';

const propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
	defaultValue: PropTypes.number,
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	precision: PropTypes.number,
	isAllowMouseWheel: PropTypes.bool,
	isClampValueOnBlur: PropTypes.bool,
	onChange: PropTypes.func,
	chakraProps: PropTypes.shape(chakraPropTypes),
	styled: PropTypes.object,
};
const defaultProps = {
	isAllowMouseWheel: false,
	isClampValueOnBlur: false,
	onChange: () => {},
};

function InputNumber({
	id,
	defaultValue,
	value,
	min,
	max,
	step,
	precision,
	isAllowMouseWheel,
	isClampValueOnBlur,
	onChange,
	styled,
	chakraProps,
	...rest
}) {
	return (
		<CNumberInput
			id={id}
			defaultValue={defaultValue}
			value={value}
			min={min}
			max={max}
			step={step}
			precision={precision}
			allowMouseWheel={isAllowMouseWheel}
			clampValueOnBlur={isClampValueOnBlur}
			onChange={onChange}
			{...styled}
			{...chakraProps}
			{...rest}
		>
			<CNumberInputField name={id}/>
			<CNumberInputStepper>
				<CNumberIncrementStepper />
				<CNumberDecrementStepper />
			</CNumberInputStepper>
		</CNumberInput>
	);
}

InputNumber.propTypes = propTypes;
InputNumber.defaultProps = defaultProps;

export default InputNumber;
