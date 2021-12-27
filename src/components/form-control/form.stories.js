import React from 'react';
import { Formik } from 'formik';
import { Box } from '@chakra-ui/react';
import { InputControl } from '../input';
import { InputNumberControl } from '../input-number';
import { CheckboxGroupControl } from '../check-box';
import { TextareaControl } from '../text-area';
import { SelectControl } from '../select';
import MultiSelectControl from '../select/multi-select-control';
import FormControl from './index';

const options1 = [
	{
		label: 'Notebook',
		value: 'Notebook',
	},
	{
		label: 'x360',
		value: 'x360',
	},
	{
		label: 'Desktop',
		value: 'Desktop',
	},
];
const checkboxes = [
	{
		label: 'DB',
		value: 'DB',
	},
	{
		label: 'SI',
		value: 'SI',
	},
	{
		label: 'PV',
		value: 'PV',
	},
];
const initialValues = {
	firstName: '',
	tel: '',
	age: 2,
	itemName: 'Memory ECC Validation',
	phase: ['DB', 'SI'],
	project: '',
};

export const basic = () => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={values => {
				console.log(values);
			}}
			// ValidationSchema={validationSchema}
		>
			{({
				values,
				touched,
				errors,
				dirty,
				// Eslint warning is fine, would like to show all parameter
				isSubmitting,
				handleChange,
				handleBlur,
				handleSubmit,
				handleReset,
			}) => (
				<>
					<Box
						borderWidth="1px"
						rounded="lg"
						shadow="1px 1px 3px rgba(0,0,0,0.3)"
						maxWidth={800}
						p={6}
						m="10px auto"
						as="form"
						onSubmit={handleSubmit}
					>
						<InputControl controlProps={{ name: 'tel', label: 'TEL' }} prefix="+886"/>
						<InputControl controlProps={{ name: 'firstName', label: 'First Name' }} />
						<InputNumberControl controlProps={{ name: 'age', label: 'Age' }} isAllowMouseWheel/>
						<TextareaControl
							controlProps={{ name: 'itemName', label: 'Item Name' }}
						/>
						<CheckboxGroupControl controlProps={{ name: 'phase', label: 'Available phase' }} checkboxes={checkboxes} colorScheme="green" />
						<SelectControl controlProps={{ name: 'project', label: 'Available Project' }} placeholder="Select option" options={options1}/>
						<MultiSelectControl controlProps={{ name: 'multi-select-project', label: 'Available Project (Multiple selection)' }} placeholder="Select option" options={options1}/>
						<Box as="pre" marginY={10}>

							Values: {JSON.stringify(values, null, 2)}
							<br />
							Touched: {JSON.stringify(touched, null, 2)}
							<br />
							Errors: {JSON.stringify(errors, null, 2)}
							<br />
							Data is dirty : {JSON.stringify(dirty, null, 2)}
						</Box>
					</Box>
				</>
			)}
		</Formik>
	);
};

export default {
	title: 'Component/FormControl',
	component: FormControl,
};
