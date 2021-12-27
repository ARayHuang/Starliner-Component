import React, { useState } from 'react';
import { Tabs, Tab as CTab, TabPanel, TabPanels, Box, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const VariantEnums = {
	LINE: 'line',
	ENCLOSED: 'enclosed',
	ENCLOSED_COLORED: 'enclosed-colored',
	SOFT_ROURNDED: 'soft-rounded',
	SOLID_ROUNDED: 'solid-rounded',
	UNSTYLED: 'unstyled',
};
const propTypes = {
	tabList: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		content: PropTypes.object,
	})),
	width: PropTypes.string,
	className: PropTypes.string,
	onChange: PropTypes.func,
	endComponent: PropTypes.object,
	defaultFocus: PropTypes.number,
	variant: PropTypes.oneOf(Object.values(VariantEnums).concat('')),
	isShowDivider: PropTypes.bool,
	isLazy: PropTypes.bool,
	isDisabled: PropTypes.bool,
};
const defaultProps = {
	variant: VariantEnums.UNSTYLED,
	defaultFocus: 1,
	isLazy: true,
	isDisabled: false,
	isShowDivider: true,
};

function Tab({
	tabList,
	width,
	className,
	onChange,
	endComponent,
	defaultFocus,
	variant,
	isShowDivider,
	isLazy,
	isDisabled,
}) {
	const [selectedIndex, setSelectedIndex] = useState();
	const _getBarLength = () => {
		return (((width || '400') / (tabList.length + 1))) + 'px';
	};
	const _renderDivider = () => {
		return isShowDivider && (
			<Box sx={{
				position: 'absolute',
				top: '67px',
				border: '0.5px solid #DEDEDE',
				width: '100%' }}
			/>
		);
	};
	const _setChecked = index => {
		return (index === selectedIndex) || (index === defaultFocus);
	};
	const _renderTabs = () => {
		return tabList.map((item, index) => {
			const { title } = item;

			return <CTab className="phase_item"
				isDisabled={isDisabled}
				key={title}
				p={0}
				w={_getBarLength()}
			>
				<input type="radio"
					name="phase"
					id={title}
					disabled={isDisabled}
					checked={_setChecked(index)}
				/>
				<label htmlFor={title}>
					<div className="phase_label">
						<span>{title}</span>
					</div>
				</label>
			</CTab>;
		});
	};
	const _renderTabPanel = () => {
		return tabList.map(item => {
			const { content } = item;

			return <TabPanel
				p={0}
				key={item.title}>
				{content}
			</TabPanel>;
		});
	};
	const _handleChange = index => {
		onChange(index);
		setSelectedIndex(index);
	};

	return (
		<>
			<Tabs variant={variant}
				className={className}
				onChange={_handleChange}
				defaultIndex={defaultFocus}
				sx={{
					position: 'relative',
				}}
				isLazy={isLazy}>
				{_renderDivider()}
				<Flex justifyContent="center"
					className="phase_wrap"
					pt="3em"
					pb="20px">
					{ _renderTabs()}
					<Box className="phase_item">
						{endComponent}
					</Box>
				 	</Flex>
				<TabPanels>
					{_renderTabPanel()}
				</TabPanels>
			</Tabs>
		</>
	);
}

Tab.defaultProps = defaultProps;
Tab.propTypes = propTypes;

export default Tab;
