import React from 'react';
import CheckboxGroup from './check-box-group';

const checkboxes = [
	{
		label: 'ME[Mars]',
		value: 'ME',
	},
	{
		label: 'HW[Venus]',
		value: 'HW',
	},
	{
		label: 'Insight Lab[Neptune]',
		value: 'InsightLab',
	},
	{
		label: 'Commodity[Mercury]',
		value: 'Commodity',
	},
];

export const basic = () => {
	return (
		<>
			<CheckboxGroup
				checkboxes={checkboxes}
				chakraProps={{ colorScheme: 'green', size: 'lg' }}
				defaultValue={['ME', 'HW', 'InsightLab']}
				onChange={list => console.log(list)}
			/>
		</>
	);
};

export default {
	title: 'Component/CheckboxGroup',
	component: CheckboxGroup,
};
