import React, { useState, useMemo } from 'react';
import SelectedTable from './selected-table';
import Pagination from '../pagination';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import { Flex } from '@chakra-ui/react';

const propTypes = {
	columns: PropTypes.arrayOf(PropTypes.shape({
		header: PropTypes.string,
		accessor: PropTypes.string,
		cell: PropTypes.func,
		isNumeric: PropTypes.bool,
		maxWidth: PropTypes.number,
		minWidth: PropTypes.number,
		isCheckBox: PropTypes.bool,
	})),
	dataSource: PropTypes.arrayOf(PropTypes.object),
	pageSize: PropTypes.number,
	onSelectedChange: PropTypes.func,
	onPageChange: PropTypes.func,
};
const defaultProps = {
	columns: [],
	dataSource: [],
	pageSize: 10,
	onSelectedChange: () => { },
	onPageChange: () => { },
};

function PaginationSelectedTable({ columns, dataSource, pageSize, onSelectedChange, onPageChange }) {
	const [currentPage, setCurrentPage] = useState(1);
	const cloneDataSource = cloneDeep(dataSource);
	const pageMapDataSource = useMemo(() => {
		const newArray = [];

		for (let i = 0; i < cloneDataSource.length; i += pageSize) {
			newArray.push(cloneDataSource.slice(i, i + pageSize));
		}

		return newArray;
	}, [dataSource, pageSize]);

	return (
		<>
			<SelectedTable
				columns={columns}
				dataSource={pageMapDataSource[currentPage - 1] ?? []}
				hasSelected={true}
				onSelectedChange={data => {
					data.forEach(item => {
						const index = cloneDataSource.findIndex(i => i.item === item.item);

						cloneDataSource[index] = Object.assign(cloneDataSource[index], item);
					});
					onSelectedChange(cloneDataSource);
				}}
			/>
			<Flex justifyContent="center" p={2}>
				<Pagination
					currentPage={currentPage}
					totalCount={dataSource.length}
					pageSize={pageSize}
					variant={Pagination.VariantEnums.OUTLINE}
					onPageChange={index => {
						setCurrentPage(index);
						onPageChange(index);
					}}
				/>
			</Flex>
		</>
	);
}

PaginationSelectedTable.propTypes = propTypes;
PaginationSelectedTable.defaultProps = defaultProps;

export default PaginationSelectedTable;
