import React from 'react';
import PropTypes from 'prop-types';
import {
	Table as CTable,
	Thead,
	Tbody,
	Tr,
	Th,
} from '@chakra-ui/table';
import {
	Box,
} from '@chakra-ui/react';
import {
	TriangleDownIcon,
	TriangleUpIcon,
} from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';
import CustomTableRow from './custom-table-row';

const variantEnum = {
	SIMPLE: 'simple',
	STRIPED: 'striped',
	UNSTYLED: 'unstyled',
};
const sizeEnum = {
	SM: 'sm',
	MD: 'md',
	LG: 'lg',
};
const propTypes = {
	className: PropTypes.string,
	// Cause react-table columns [Header、Cell] parameter use upper camel case
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
	variant: PropTypes.oneOf(Object.values(variantEnum).concat('')),
	size: PropTypes.oneOf(Object.values(sizeEnum).concat('')),
	onRenderCheckbox: PropTypes.func,
	hasCollapsed: PropTypes.bool,
	onRenderCollapsedChildren: PropTypes.func,
	tableStyled: PropTypes.object,
};
const defaultProps = {
	onSelectedChange: () => { },
	onRenderCheckbox: () => { },
	onCollapsedChange: () => { },
	onRenderCollapsedChildren: () => { },
};

function Table({
	className,
	columns,
	dataSource,
	variant,
	size,
	onRenderCheckbox,
	hasCollapsed,
	onRenderCollapsedChildren,
	tableStyled,
}) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data: dataSource,
		initialState: {
			hiddenColumns: columns.filter(col => col.isShown === false).map(col => col.accessor),
		},
	}, useSortBy);

	function _renderColumn(column) {
		const { Header, isSorted, isSortedDesc } = column;

		return (
			<div key={column.id}>
				{Header}
				<Box as="span" pl="4" >
					{isSorted ? (
						isSortedDesc ? (
							<TriangleDownIcon aria-label="sorted descending" />
						) : (
							<TriangleUpIcon aria-label="sorted ascending" />
						)
					) : null}
				</Box>
			</div>);
	}

	function _renderHeader() {
		return headerGroups.map((headerGroup, index) => (
			<Tr className="se-tableRow" {...headerGroup.getHeaderGroupProps()} key={index}>
				{headerGroup.headers.map(column => {
					return <Th
						className="se-tableHeader"
						{...column.getHeaderProps(
						)}
						sx={{
							width: column.width,
						}}
						isNumeric={column.isNumeric}
						key={`${column.Header}-${index}`}
					>
						{column.isSelected ? onRenderCheckbox(column) : _renderColumn(column)}
					</Th>;
				})}
			</Tr>
		));
	}

	function _renderBody() {
		return rows.map((row, index) => {
			prepareRow(row);
			return (
				<CustomTableRow
					key={index}
					row={row}
					index={index}
					hasCollapsed={hasCollapsed}
					onRenderCollapsedRow={onRenderCollapsedChildren}
				/>
			);
		});
	}

	return (
		<CTable
			className={`se-table ${className}`}
			{...getTableProps()}
			variant={variant}
			size={size}
			{...tableStyled}
		>
			<Thead>
				{_renderHeader()}
			</Thead>
			<Tbody {...getTableBodyProps()}>
				{_renderBody()}
			</Tbody>
		</CTable>
	);
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
