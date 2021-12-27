import React, { useState } from 'react';
import Accordion from './index';
import Table from '../table';
import Pagination from '../pagination/index';
import {
	AiFillCloud,
	AiFillDelete,
} from 'react-icons/ai';
import {
	Flex,
	Select,
} from '@chakra-ui/react';

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
const basicDataSource = [
	{
		title: 'EM01',
		onRenderItem: () => (
			<Table columns={customCellColumns} dataSource={customCellData} />
		),
	},
	{
		title: 'EM02',
		onRenderItem: () => (
			<Table columns={customCellColumns} dataSource={customCellData} />
		),
	},
	{
		title: 'EM03',
		onRenderItem: () => (
			<Table columns={customCellColumns} dataSource={customCellData} />
		),
	},
];

export const basic = () => {
	return (
		<Accordion
			dataSource={basicDataSource}
			allowToggle={true}
			accordionButtonStyled={{
				backgroundColor: '#6a6784',
			}}
			onChange={expandedIndex => console.log(expandedIndex)}
		/>
	);
};

export default {
	title: 'Component/Accordion',
	component: Accordion,
};
