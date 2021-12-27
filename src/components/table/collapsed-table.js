import React from 'react';
import PropTypes from 'prop-types';
import {
	Tr,
	Td,
} from '@chakra-ui/table';
import {
	Box,
	Collapse,
} from '@chakra-ui/react';
import { getDisplayName } from '../../lib/utils';
import Table from './table';
import { Icon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const withCollapsed = Table => {
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
		hasCollapsed: PropTypes.bool,
		onCollapsedChange: PropTypes.func,
		onRenderCollapsedChildren: PropTypes.func,
	};
	const defaultProps = {
		onCollapsedChange: () => { },
		onRenderCollapsedChildren: () => { },
	};

	function WithCollapsedTable(props) {
		const {
			columns,
			dataSource,
			hasCollapsed,
			onCollapsedChange,
			onRenderCollapsedChildren,
		} = props;
		const collapsedColumn = {
			Header: '',
			accessor: 'isCollapsed',
			width: '2%',
			Cell: ({ row }) => {
				const { values } = row;
				const { isCollapsed } = values;
				const collapsedIconStyle = isCollapsed ? {
					transform: 'rotate(90deg)',
				} : {
					transition: '0.2s all ease-in-out',
					WebkitTransition: '0.2s all ease-in-out',
				};

				return (
					<Box onClick={() => _handleClickCollapsed(!isCollapsed, row)}>
						<Box style={{ cursor: 'pointer', ...collapsedIconStyle }}>
							<Icon className="icon" as={ChevronRightIcon} />
						</Box>
					</Box>
				);
			},
		};

		if (hasCollapsed) {
			columns.unshift(collapsedColumn);
		}

		function _handleClickCollapsed(isCollapsed, row) {
			const nextData = dataSource.map((item, index) => {
				if (index === row.index) {
					item.isCollapsed = isCollapsed;
				}

				return item;
			});

			onCollapsedChange(nextData);
		}

		function _RenderCollapsedChildren(values, row, index) {
			const { isCollapsed } = values;

			return (
				<Tr {...row.getRowProps()} key={`${index}-collapsed`} style={{ display: 'con' }}>
					<Td colSpan={Object.keys(values).length} p={0}>
						<Collapse in={Boolean(isCollapsed)} unmountOnExit>
							{onRenderCollapsedChildren(values)}
						</Collapse>
					</Td>
				</Tr>
			);
		}

		const nextProps = Object.assign({}, props, { onRenderCollapsedChildren: _RenderCollapsedChildren });

		return (
			<Table
				{...nextProps}
			/>
		);
	}

	WithCollapsedTable.displayName = `withCollapsed(${getDisplayName(Table)})`;
	WithCollapsedTable.propTypes = propTypes;
	WithCollapsedTable.defaultProps = defaultProps;
	return WithCollapsedTable;
};
const CollapsedTable = withCollapsed(Table);

export default CollapsedTable;
