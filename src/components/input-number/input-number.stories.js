import React, { useState } from 'react';
import { InputNumber } from './index';

export const basic = () => {
	return (
		<>
			<InputNumber />
			<InputNumber defaultValue={2.5} step={0.5} max={50} min={0}/>
		</>
	);
};

export const advanced = () => {
	const [num, setNum] = useState(2);

	return (
		<>
			<InputNumber
				defaultValue={2}
				step={1}
				isAllowMouseWheel
				onChange={value => setNum(value)}
			/>
			<div>{num}</div>
		</>
	);
};

export default {
	title: 'Component/InputNumber',
	component: InputNumber,
};
