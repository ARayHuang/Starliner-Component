import React from 'react';
import { Select } from './index';

const options1 = [
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
const style = {
	height: 'auto',
	padding: '10px',
};
const style1 = {
	height: 'auto',
	width: '200px',
	padding: '10px',
};
const style2 = {
	height: '50px',
	padding: '10px',
	borderRadius: '5px',
	width: '200px',
};

export const basic = () => {
	return (
		<>
			<Select options={options1} placeholder="Select option" style={style}/>
			<Select options={options1} placeholder="Select option" chakraProps={{ size: 'lg' }} size="md" styled={style2} onChange={() => console.log('select change')}/>
			<Select options={options1} chakraProps={{ variant: 'flushed' }} placeholder="Select option" styled={style} onChange={e => console.log(e.target.value)}/>
			<Select options={options1} chakraProps={{ variant: 'flushed' }} placeholder="Select option" styled={style1}/>
		</>
	);
};

export default {
	title: 'Component/Select',
	component: Select,
};
