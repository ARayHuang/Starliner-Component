import React from 'react';
import Modal from './index';
import {
	useDisclosure,
	Button,
	Center,
} from '@chakra-ui/react';
import { Input } from '../input';
import { Formik } from 'formik';
import { Box } from '@chakra-ui/react';
import { InputControl } from '../input';
import { CheckboxGroupControl } from '../check-box';
import { TextareaControl } from '../text-area';
import { SelectControl } from '../select';

export const basic = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const warningText = 'To start a new template version, current version would be retired. Are you sure to start a new version?';

	return (
		<>
			<button onClick={onOpen}>Open Modal</button>
			<Modal isOpen={isOpen} onClose={onClose} isSubmitButtonDisabled>
				{warningText}
				<Input placeholder="Version Name"/>
			</Modal>
		</>
	);
};

export const withNoFooter = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const warningText = 'This is a modal without footer button. Only use notification some information, and close it. ';

	return (
		<>
			<button onClick={onOpen}>Open Modal</button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				onRenderFooter={() => {}}
			>
				{warningText}
			</Modal>
		</>
	);
};

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
	itemNumber: '',
	type: '',
	itemName: 'Memory ECC Validation',
	phase: ['DB', 'SI'],
};

export const withCustomFooter = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<button onClick={onOpen}>Open Modal</button>
			<Formik
				initialValues={initialValues}
				onSubmit={values => {
					console.log(values);
				}}
				// TODO :validationSchema={validationSchema}
			>
				{({
					handleSubmit,
				}) => (
					<Modal
						isOpen={isOpen}
						onClose={onClose}
						onRenderFooter={() => (
							<Center w="full">
								<Button colorScheme="blue" mr={3} onClick={handleSubmit}>OK</Button>
							</Center>
						)}
					>
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
							<InputControl controlProps={{ name: 'itemNumber', label: 'Item Name' }} />
							<SelectControl controlProps={{ name: 'type', label: 'Available Type' }} placeholder="Select option" options={options1}/>
							<TextareaControl
								controlProps={{ name: 'itemName', label: 'Item Name' }}
							/>
							<CheckboxGroupControl controlProps={{ name: 'phase', label: 'Available phase' }} checkboxes={checkboxes} colorScheme="green" />
						</Box>
					</Modal>
				)}
			</Formik>
		</>
	);
};

export default {
	title: 'Component/Modal',
	component: Modal,
};
