import React from 'react';
import PropTypes from 'prop-types';
import {
	Tr,
	Td,
} from '@chakra-ui/table';

const propTypes = {
	row: PropTypes.object,
	index: PropTypes.number,
	hasCollapsed: PropTypes.bool,
	onRenderCollapsedRow: PropTypes.func,
};
const defaultProps = {
	hasCollapsed: false,
	onRenderCollapsedRow: () => {},
};

function CustomTableRow({
	row,
	index,
	hasCollapsed,
	onRenderCollapsedRow,
}) {
	const { values } = row;

	return (
		<>
			<Tr className="se-tableRow" {...row.getRowProps()} key={index}>
				{row.cells.map((cell, index) => (
					<Td
						className="se-tableDataCell"
						{...cell.getCellProps()}
						isNumeric={cell.column.isNumeric}
						key={index}
						{...cell.column.style}
					>
						{cell.render('Cell')}
					</Td>
				))}
			</Tr>
			{hasCollapsed ? onRenderCollapsedRow(values, row, index) : null}
		</>
	);
}

CustomTableRow.propTypes = propTypes;
CustomTableRow.defaultProps = defaultProps;

export default CustomTableRow;
