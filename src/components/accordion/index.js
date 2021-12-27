import React from 'react';
import PropTypes from 'prop-types';
import {
	Accordion as CAccordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from '@chakra-ui/react';

const propTypes = {
	dataSource: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.node,
		]),
		onRenderItem: PropTypes.func,
	})),
	defaultIndex: PropTypes.number,
	allowMultiple: PropTypes.bool,
	allowToggle: PropTypes.bool,
	onChange: PropTypes.func,
	accordionItemProps: PropTypes.object,
	styled: PropTypes.object,
	accordionButtonStyled: PropTypes.object,
};

function Accordion({
	dataSource,
	defaultIndex,
	allowMultiple,
	allowToggle,
	onChange,
	accordionItemProps,
	styled,
	accordionButtonStyled,
}) {
	function _renderAccordionItems() {
		return dataSource.map((item, index) => (
			<AccordionItem key={index} {...accordionItemProps}>
				<Box as="h2" w="100%">
					<AccordionButton {...accordionButtonStyled}>
						<Box flex="1" textAlign="left">
							{item.title}
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</Box>
				<AccordionPanel pb={4}>
					{item.onRenderItem()}
				</AccordionPanel>
			</AccordionItem>
		));
	}

	return (
		<CAccordion
			defaultIndex={defaultIndex}
			allowMultiple={allowMultiple}
			allowToggle={allowToggle}
			onChange={onChange}
			{...styled}
		>
			{_renderAccordionItems()}
		</CAccordion>
	);
}

Accordion.propTypes = propTypes;

export default Accordion;
