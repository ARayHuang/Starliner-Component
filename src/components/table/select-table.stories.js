import React, { useState } from 'react';
import SelectedTable from './selected-table';
import {
	Checkbox as CCheckbox,
} from '@chakra-ui/react';

const basicCellData = [
	{
		isSelected: true,
		item: 'AC01',
		information: 'Memory ECC Validation',
		type: 'Acoustic',
	},
	{
		isSelected: false,
		item: 'AC02',
		information: 'Memory EDD Validation',
		type: 'Acoustic',
	},
	{
		isSelected: true,
		item: 'AC03',
		information: 'Memory QQQ Validation',
		type: 'Acoustic',
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
	];

	return (
		<SelectedTable
			columns={selectedColumns}
			dataSource={data}
			hasSelected={true}
			onSelectedChange={data => setData(data)}
		/>
	);
};

const customData = [
	{
		isSelected: true,
		isSecondSelected: false,
		item: 'AC01',
		information: 'Memory ECC Validation',
		type: 'Acoustic',
	},
	{
		isSelected: false,
		isSecondSelected: true,
		item: 'AC02',
		information: 'Memory EDD Validation',
		type: 'Acoustic',
	},
	{
		isSelected: true,
		isSecondSelected: true,
		item: 'AC03',
		information: 'Memory QQQ Validation',
		type: 'Acoustic',
	},
];

export const withCustomSelectedTable = () => {
	const [data, setData] = useState(customData);
	const selectedColumns = [
		{
			Header: 'isSelected',
			isSelected: true,
			accessor: 'isSelected',
			Cell: ({ row }) => {
				const { values } = row;

				return <CCheckbox
					isChecked={values.isSelected}
					onChange={e => _handleSelectedChange(e.target.checked, row, 'isSelected')}
				/>;
			},
		},
		{
			Header: 'isSecondSelected',
			isSelected: true,
			accessor: 'isSecondSelected',
			Cell: data => {
				const { row } = data;
				const { values } = row;

				return <CCheckbox
					isChecked={values.isSecondSelected}
					onChange={e => _handleSelectedChange(e.target.checked, row, 'isSecondSelected')}
				/>;
			},
		},
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

	function _handleSelectedChange(isChecked, row, accessor) {
		const nextData = data.map((item, index) => {
			if (index === row.index && item[accessor] !== undefined) {
				item[accessor] = isChecked;
			}

			return item;
		});

		setData(nextData);
	}

	return (
		<SelectedTable
			columns={selectedColumns}
			dataSource={data}
			onSelectedChange={data => setData(data)}
		/>
	);
};
export default {
	title: 'Component/SelectedTable',
	component: SelectedTable,
};
