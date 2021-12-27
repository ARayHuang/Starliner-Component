import React, { useState } from 'react';
import SingleDatePicker from './index';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '../input';
import MomentUtils from '@date-io/moment';

const useStylesForDatePicker = makeStyles(() => ({
	outer: {
		'& > button': {
			margin: '1em',
		},
	},
	calendar: {
		backgroundColor: '#000',
	},
}));

export const regular = () => {
	const classes = useStylesForDatePicker();
	const [date, setDate] = useState('');
	const _showSelectedDate = selectedDate => {
		setDate(selectedDate);
	};

	return (
		<div className={classes.outer}>
			<Input value={date} onChange={e => setDate(e.target.value)} placeholder="YYYY/MM/DD"/>
			<div>
				<SingleDatePicker date={date}
					onChange={_showSelectedDate}
					className={'test-class'}></SingleDatePicker>
			</div>
		</div>
	);
};

export default {
	title: 'Component/Date Picker',
	component: { SingleDatePicker },
};
