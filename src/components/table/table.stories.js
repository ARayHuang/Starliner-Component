import React from 'react';
import Table from './table';
import { Select } from '../select';
import {
	AiFillCloud,
	AiFillDelete,
} from 'react-icons/ai';
import {
	Flex,
} from '@chakra-ui/react';

const data = [
	{
		fromUnit: 'inches',
		toUnit: 'millimetres (mm)',
		factor: 25.4,
	},
	{
		fromUnit: 'feet',
		toUnit: 'centimetres (cm)',
		factor: 30.48,
	},
	{
		fromUnit: 'yards',
		toUnit: 'metres (m)',
		factor: 0.91444,
	},
];
const columns = [
	{
		Header: 'To convert',
		accessor: 'fromUnit',
		style: {
			width: '10%',
			color: '#FFFFFF',
			backgroundColor: '#555555',
		},
	},
	{
		Header: 'Into',
		accessor: 'toUnit',
		isShow: false,
	},
	{
		Header: 'Multiply by',
		accessor: 'factor',
		isNumeric: true,
	},
];

export const basic = () => {
	return (
		<Table columns={columns} dataSource={data} />
	);
};

const customCellData = [
	{
		category: 'Acoustic',
		vendor: 'Intel',
		item: 'Memory ECC Validation',
		schedule: '2021-01-31 ~ 2021-02-29',
		resultStatus: 'PASS',
		leverageFrom: 'Ronin 13',
		isWaivedOrBlock: '',
	},
	{
		category: 'Acoustic',
		vendor: 'QLC',
		item: 'Memory ECC Validation',
		schedule: '',
		resultStatus: 'PASS',
		leverageFrom: 'Ronin 13',
		isWaivedOrBlock: '',
	},
	{
		category: 'Acoustic',
		vendor: 'QQ',
		item: 'Memory ECC Validation',
		schedule: '2021-01-31 ~ 2021-02-29',
		resultStatus: 'PASS',
		leverageFrom: 'Ronin 13',
		isWaivedOrBlock: '',
	},
];
const options1 = [
	{
		label: 'Waived',
		value: '1',
	},
	{
		label: 'Block',
		value: '2',
	},
];
const customCellColumns = [
	{
		Header: 'Category',
		accessor: 'category',
	},
	{
		Header: 'Vendor',
		accessor: 'vendor',
	},
	{
		Header: 'SVTP Items',
		accessor: 'item',
	},
	{
		Header: 'Test Schedule Plan',
		accessor: 'schedule',
	},
	{
		Header: 'Test Result',
		accessor: 'resultStatus',
	},
	{
		Header: 'Leverage From',
		accessor: 'leverageFrom',
	},
	{
		Header: 'Waived/Block',
		accessor: 'isWaivedOrBlock',
		Cell: () => <Select options={options1} placeholder="Select Waived/Block" />,
	},
	{
		Header: 'Action',
		Cell: () => (
			<Flex>
				<AiFillCloud />
				<AiFillDelete />
			</Flex>),
	},
];

export const withCustomCell = () => {
	return (
		<Table columns={customCellColumns} dataSource={customCellData} />
	);
};

export default {
	title: 'Component/Table',
	component: Table,
};
