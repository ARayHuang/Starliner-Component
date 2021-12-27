import React, { useState } from 'react';
import MultiSelect from './multi-select';

const options = [
	{
		label: 'menu1',
		value: '1',
	},
	{
		label: 'menu2',
		value: '2',
	},
	{
		label: 'menu3',
		value: '3',
	},
];

export const basic = () => {
	const [defaultSelectedOptions, setDefaultSelectedOptions] = useState(['1']);
	const [selectedOptions, setSelectedOptions] = useState([]);

	return (
		<>
			<MultiSelect
				options={options}
				onChange={result => {
					console.log(result);
					setDefaultSelectedOptions(result);
				}}
				value={defaultSelectedOptions}
				placeholder="Please Select..."
			/>
			<MultiSelect
				options={options}
				onChange={result => {
					console.log(result);
					setSelectedOptions(result);
				}}
				value={selectedOptions}
				placeholder="Please Select..."
			/>
		</>
	);
};

export default {
	title: 'Component/MultiSelect',
	component: MultiSelect,
};
