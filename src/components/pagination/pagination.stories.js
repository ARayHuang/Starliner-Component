import React, { useState } from 'react';
import Pagination from './index';
import Accordion from '../accordion/index';
import {
	VStack,
} from '@chakra-ui/react';
import { genTestItemDummyData } from './dummy-data';

export const basic = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const buttonStyled = {
		'&:active, &.is-active': {
			bg: '#8C96D2',
			color: 'white',
		},
	};

	return (
		<>
			<Pagination
				currentPage={currentPage}
				totalCount={200}
				pageSize={10}
				selectedButtonStyled={buttonStyled}
				variant={Pagination.VariantEnums.OUTLINE}
				onPageChange={index => setCurrentPage(index)}
			/>
		</>
	);
};

function groupTestResult(array, subGroupLength) {
	var index = 0;
	var newArray = [];

	while (index < array.length) {
		newArray.push(array.slice(index, index += subGroupLength));
	}

	return newArray;
}

export const withAccordion = () => {
	const [testResult] = useState(genTestItemDummyData);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10;
	const totalCount = testResult.length;
	const testResultGroups = groupTestResult(testResult, 10);

	return (
		<VStack
			spacing={4}
			align="stretch"
		>
			<Accordion
				dataSource={testResultGroups[currentPage - 1]}
				allowToggle={true}
				accordionButtonStyled={{
					backgroundColor: '#6a6784',
				}}
				onChange={expandedIndex => console.log(expandedIndex)}
			/>
			<Pagination
				currentPage={currentPage}
				totalCount={totalCount}
				pageSize={pageSize}
				variant={Pagination.VariantEnums.OUTLINE}
				onPageChange={index => setCurrentPage(index)}
			/>
		</VStack>
	);
};

export default {
	title: 'Component/Pagination',
	component: Pagination,
};
