import React, { useState } from 'react';
import Table from './table';
import CollapsedTable from './collapsed-table';
import { Box } from '@chakra-ui/react';

const basicCellData = [
	{
		isSelected: true,
		item: 'AC01',
		information: 'Memory ECC Validation',
		type: 'Acoustic',
		subData: [
			{
				item: 'AC01',
				information: 'Memory ECC Validation',
				type: 'Acoustic',
			},
			{
				item: 'AC02',
				information: 'Memory EDD Validation',
				type: 'Acoustic',
			},
			{
				item: 'AC03',
				information: 'Memory QQQ Validation',
				type: 'Acoustic',
			},
		],
	},
	{
		isSelected: false,
		item: 'AC02',
		information: 'Memory EDD Validation',
		type: 'Acoustic',
		subData: [
			{
				item: 'AC01',
				information: 'Memory ECC Validation',
				type: 'Acoustic',
			},
			{
				item: 'AC02',
				information: 'Memory EDD Validation',
				type: 'Acoustic',
			},
			{
				item: 'AC03',
				information: 'Memory QQQ Validation',
				type: 'Acoustic',
			},
		],
	},
	{
		isSelected: true,
		item: 'AC03',
		information: 'Memory QQQ Validation',
		type: 'Acoustic',
		subData: [
			{
				item: 'AC01',
				information: 'Memory ECC Validation',
				type: 'Acoustic',
			},
			{
				item: 'AC02',
				information: 'Memory EDD Validation',
				type: 'Acoustic',
			},
			{
				item: 'AC03',
				information: 'Memory QQQ Validation',
				type: 'Acoustic',
			},
		],
	},
];

export const basic = () => {
	const [data, setData] = useState(basicCellData);
	const selectedColumns = [
		{
			Header: 'Item',
			accessor: 'item',
		},
		{
			Header: 'Information',
			accessor: 'information',
		},
		{
			Header: 'Type',
			accessor: 'type',
		},
		{
			Header: 'subData',
			accessor: 'subData',
			isShown: false,
		},
	];
	const collapsedColumns = [
		{
			Header: 'Item',
			accessor: 'item',
		},
		{
			Header: 'Information',
			accessor: 'information',
		},
		{
			Header: 'Type',
			accessor: 'type',
		},
	];

	function _renderCollapsedChildren(values) {
		return (
			<Box px="5%">
				<Table
					key={values.item}
					columns={collapsedColumns}
					dataSource={values.subData}
					hasCollapsed={false}
				/>
			</Box>
		);
	}

	return (
		<CollapsedTable
			columns={selectedColumns}
			dataSource={data}
			hasCollapsed={true}
			onCollapsedChange={data => setData(data)}
			onRenderCollapsedChildren={values => _renderCollapsedChildren(values)}
		/>
	);
};

export default {
	title: 'Component/CollapsedTable',
	component: CollapsedTable,
};
