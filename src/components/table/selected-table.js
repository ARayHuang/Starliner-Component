import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	Checkbox as CCheckbox,
} from '@chakra-ui/react';
import { usePrevious } from '../../lib/utils';
import Table from './table';

const propTypes = {
	columns: PropTypes.array,
	dataSource: PropTypes.array,
	hasSelected: PropTypes.bool,
	onSelectedChange: PropTypes.func,
};
const defaultProps = {
	columns: [],
	dataSource: [],
	hasSelected: true,
	onSelectedChange: () => {},
};

function SelectedTable({
	columns,
	dataSource,
	hasSelected,
	onSelectedChange,
}) {
	const dataSourcePrevious = usePrevious(dataSource);
	const selectedColumn = {
		Header: 'Selected Column',
		accessor: 'isSelected',
		isSelected: true,
		width: '1%',
		Cell: data => {
			const { index } = data.row;
			const values = data.data[index];

			return <CCheckbox
				isChecked={values.isSelected}
				onChange={e => _handleSelectedChange(e.target.checked, data)}
			/>;
		},
	};

	useEffect(() => {
		if (dataSourcePrevious && dataSourcePrevious.length === 0 && dataSource.length > 0) {
			const nextData = dataSource.map(item => {
				Object.assign(item, { isSelectedOrigin: item.isSelected });

				return item;
			});

			onSelectedChange(nextData);
		}
	}, []);

	if (hasSelected) {
		if (!columns.some(column => column.accessor === 'isSelected')) {
			columns.unshift(selectedColumn);
		}
	}

	function _handleSelectedChange(isChecked, tableData) {
		const { row, data } = tableData;
		const nextData = data.map((item, index) => {
			if (index === row.index && item.isSelected !== undefined) {
				const preChecked = item.isSelectedOrigin;

				item.isSelected = isChecked;
				Object.assign(item, { ...getCheckedStatusWithPreChecked(preChecked, isChecked) });
			}

			return item;
		});

		onSelectedChange(nextData);
	}

	function _handleSelectedAll(accessor, isChecked) {
		const nextData = dataSource.map(item => {
			if (item[accessor] !== undefined) {
				const preChecked = item.isSelectedOrigin;

				item[accessor] = isChecked;
				Object.assign(item, { ...getCheckedStatusWithPreChecked(preChecked, isChecked) });
			}

			return item;
		});

		onSelectedChange(nextData);
	}

	function _renderHeaderCheckBox(column) {
		return <CCheckbox
			key={column.id}
			onChange={e => _handleSelectedAll(column.id, e.target.checked)}
		/>;
	}

	const nextProps = Object.assign({}, {
		hasSelected,
		columns,
		dataSource,
		onRenderCheckbox: _renderHeaderCheckBox,
	});

	return (
		<Table
			{...nextProps}
		/>
	);
}

SelectedTable.propTypes = propTypes;
SelectedTable.defaultProps = defaultProps;

export default SelectedTable;

function getCheckedStatue(isChecked) {
	if (isChecked) {
		return {
			isAdd: true,
			isDelete: false,
		};
	}

	return {
		isAdd: false,
		isDelete: true,
	};
}

function getCheckedStatusWithPreChecked(preChecked, nextChecked) {
	if (preChecked !== nextChecked) {
		return getCheckedStatue(nextChecked);
	}

	return {
		isAdd: false,
		isDelete: false,
	};
}
