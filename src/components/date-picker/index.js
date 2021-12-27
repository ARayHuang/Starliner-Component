import React, { useState } from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';

const propTypes = {
	date: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string,
	]),
	onChange: PropTypes.func,
	format: PropTypes.string,
};
const defaultProps = {
	date: new Date(),
	format: 'yyyy/MM/DD',
	onChange: () => {},
};

function SingleDatePicker({ date, onChange, format }) {
	const _handleChange = selectedDate => {
		onChange(selectedDate.format(format));
	};

	return (
		<div>
			<MuiPickersUtilsProvider utils={MomentUtils}>
				<DatePicker
					orientation="landscape"
					variant="static"
					openTo="date"
					value={date}
					onChange={_handleChange}
					autoOk
				/>
			</MuiPickersUtilsProvider>
		</div>

	);
}

SingleDatePicker.propTypes = propTypes;
SingleDatePicker.defaultProps = defaultProps;

export default SingleDatePicker;
