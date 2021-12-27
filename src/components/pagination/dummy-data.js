import React from 'react';
import {
	AiFillCloud,
	AiFillDelete,
} from 'react-icons/ai';
import {
	Flex,
	Select,
} from '@chakra-ui/react';
import Table from '../table';

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
const categoryAry = ['Acoustic', 'Thermal', 'EE & Power: Functionality'];
const vendor = ['', 'Intel', 'Compal', 'Quanta'];
const resultStatus = ['PASS', 'Failed'];
const leverageFrom = ['', 'Ronin 13'];
const genTestResultDummyData = (itemTitle, count) => Array.from(Array(count).keys()).map(() => {
	return {
		category: categoryAry[getRandom(0, 3)],
		vendor: vendor[getRandom(0, 3)],
		item: `This is ${itemTitle}.`,
		schedule: '2021-01-31 ~ 2021-02-29',
		resultStatus: resultStatus[getRandom(0, 1)],
		leverageFrom: leverageFrom[getRandom(0, 1)],
		isWaivedOrBlock: '',
	};
});

export const genTestItemDummyData = Array.from(Array(213).keys()).map(index => {
	const itemTitle = `Item-${index}`;
	const testResults = genTestResultDummyData(itemTitle, getRandom(1, 5));

	return {
		title: itemTitle,
		onRenderItem: () => (
			<Table columns={customCellColumns} dataSource={testResults} />
		),
	};
});

function getRandom(min, max) {
	return Math.round(Math.random() * max) + min;
}
