import React from 'react';
import PropTypes from 'prop-types';
import { default as MList } from '@material-ui/core/List';

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
};
const defaultProps = {
	className: '',
};

function List({ children, className }) {
	return (
		<MList className={className}>
			{children}
		</MList>
	);
}

List.defaultProps = defaultProps;
List.propTypes = propTypes;

export default List;
