import React, { useState } from 'react';
import PaginationSelectedTable from './pagination-selected-table';

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

for (let i = 0; i < 1000; i++) {
	basicCellData.push({
		isSelected: false,
		item: `AC${i}`,
		information: `Memory QQQ Validation ${i}`,
		type: 'Acoustic',
	});
}

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
		<PaginationSelectedTable
			columns={selectedColumns}
			dataSource={data}
			hasSelected={true}
			pageSize={10}
			onSelectedChange={data => setData(data)}
			onPageChange={pageIndex => {
				console.log(pageIndex);
			} }
		/>
	);
};

export default {
	title: 'Component/PaginationSelectedTable',
	component: PaginationSelectedTable,
};
