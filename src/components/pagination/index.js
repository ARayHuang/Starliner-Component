import React from 'react';
import PropTypes from 'prop-types';
import { usePagination } from './use-pagination';
import {
	Flex,
	Box,
	Button,
	IconButton,
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const buttonStyled = {
	'&:active, &.is-active': {
		bg: '#8C96D2',
		color: 'white',
	},
};
const DOTS = '...';
const VariantEnums = {
	SOLID: 'solid',
	OUTLINE: 'outline',
};
const propTypes = {
	totalCount: PropTypes.number,
	siblingCount: PropTypes.number,
	currentPage: PropTypes.number,
	pageSize: PropTypes.number,
	onPageChange: PropTypes.func,
	variant: PropTypes.oneOf(Object.values(VariantEnums).concat('')),
	selectedButtonStyled: PropTypes.object,
};

function Pagination({
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
	onPageChange,
	variant,
	selectedButtonStyled,
}) {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};
	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};
	let lastPage = paginationRange[paginationRange.length - 1];

	return (
		<Flex as="nav" className="pagination">
			<IconButton
				fontSize="20px"
				icon={<FaChevronLeft size="15px" />}
				variant={variant}
				mx={1}
				isDisabled={currentPage === 1}
				onClick={onPrevious}
				aria-label={'上一頁'}
			/>
			<Flex as="ol" listStyleType="none">
				{paginationRange.map((pageNumber, index) => {
					const isActive = pageNumber === currentPage;

					if (pageNumber === DOTS) {
						return (
							<Box as="li" className="dots" mx={1} key={`${pageNumber}-${index}`}>
								{DOTS}
							</Box>
						);
					}

					return (
						<Box as="li" mx={1} key={pageNumber}>
							<Button
								variant={variant}
								className={isActive && 'is-active'}
								sx={selectedButtonStyled || buttonStyled}
								onClick={() => onPageChange(pageNumber)}
							>
								{pageNumber}
							</Button>
						</Box>
					);
				})}
			</Flex>
			<IconButton
				fontSize="20px"
				icon={<FaChevronRight size="15px" />}
				variant={variant}
				mx={1}
				isDisabled={currentPage === lastPage}
				onClick={onNext}
				aria-label={'下一頁'}
			/>
		</Flex>
	);
}

Pagination.VariantEnums = VariantEnums;
Pagination.propTypes = propTypes;

export default Pagination;
