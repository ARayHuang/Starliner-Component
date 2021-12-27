import React from 'react';
import Checkbox from './check-box';
import { Stack } from '@chakra-ui/react';

export const basic = () => {
	return (
		<>
			<Checkbox>Checkbox</Checkbox>
			<Checkbox chakraProps={{ colorScheme: 'red' }}defaultIsChecked>
				Checkbox
			</Checkbox>
			<Checkbox chakraProps={{ colorScheme: 'green' }} defaultIsChecked>
				Checkbox
			</Checkbox>
			<Checkbox chakraProps={{ colorScheme: 'red', size: 'sm' }} defaultIsChecked>
				Small Checkbox
			</Checkbox>
		</>
	);
};

export const indeterminate = () => {
	const [checkedItems, setCheckedItems] = React.useState([false, false]);
	const allChecked = checkedItems.every(Boolean);
	const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

	return (
		<>
			<Checkbox
				isChecked={allChecked}
				isIndeterminate={isIndeterminate}
				onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
			>
				Parent Checkbox
			</Checkbox>
			<Stack pl={6} mt={1} spacing={1}>
				<Checkbox
					isChecked={checkedItems[0]}
					onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}
				>
				Child Checkbox 1
				</Checkbox>
				<Checkbox
					isChecked={checkedItems[1]}
					onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}
				>
				Child Checkbox 2
				</Checkbox>
			</Stack>
		</>
	);
};

export default {
	title: 'Component/Checkbox',
	component: Checkbox,
};
