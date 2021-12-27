import React from 'react';
import PropTypes from 'prop-types';
import {
	Modal as CModal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Divider,
	Button,
	Center,
} from '@chakra-ui/react';

const SizeEnum = {
	SIZE2xl: '2xl',
	SIZE3xl: '3xl',
	SIZE4xl: '4xl',
	SIZE5xl: '5xl',
	SIZE6xl: '6xl',
	XS: 'xs',
	SM: 'sm',
	MD: 'md',
	LG: 'lg',
	XL: 'xl',
	FULL: 'full',
};
const ScrollBehaviorEnum = {
	INSIDE: 'inside',
	OUTSIDE: 'outside',
};
const propTypes = {
	hasMask: PropTypes.bool,
	hasCloseButton: PropTypes.bool,
	isOpen: PropTypes.bool,
	isCloseOnOverlayClick: PropTypes.bool,
	isCentered: PropTypes.bool,
	isSubmitButtonDisabled: PropTypes.bool,
	isCloseButtonDisabled: PropTypes.bool,
	size: PropTypes.oneOf(Object.values(SizeEnum).concat('')),
	scrollBehavior: PropTypes.oneOf(Object.values(ScrollBehaviorEnum).concat('')),
	onSubmit: PropTypes.func,
	onClose: PropTypes.func,
	onOverlayClick: PropTypes.func,
	headerTitle: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	onRenderHeader: PropTypes.func,
	children: PropTypes.node,
	onRenderFooter: PropTypes.func,
	styled: PropTypes.object,
};
const defaultProps = {
	hasMask: true,
	hasCloseButton: true,
	isCloseOnOverlayClick: true,
	isCentered: false,
	isSubmitButtonDisabled: false,
	isCloseButtonDisabled: false,
	headerTitle: 'Title',
	scrollBehavior: ScrollBehaviorEnum.OUTSIDE,
	onSubmit: () => {},
	onClose: () => {},
};

function Modal({
	hasMask,
	hasCloseButton,
	isOpen,
	isCloseOnOverlayClick,
	isCentered,
	isSubmitButtonDisabled,
	isCloseButtonDisabled,
	scrollBehavior,
	size,
	onSubmit,
	onClose,
	onOverlayClick,
	headerTitle,
	onRenderHeader,
	children,
	onRenderFooter,
	styled,
}) {
	function _renderOverlay() {
		return <ModalOverlay />;
	}

	function _renderHeader() {
		return (
			<ModalHeader>
				{onRenderHeader ? onRenderHeader() : headerTitle}
			</ModalHeader>
		);
	}

	function _renderCloseButton() {
		return <ModalCloseButton />;
	}

	function _renderFooter() {
		return (
			<ModalFooter>
				{onRenderFooter ? onRenderFooter() :
					<Center w="full">
						<Button
							colorScheme="blue"
							mr={3}
							onClick={onSubmit}
							isDisabled={isSubmitButtonDisabled}
						>
							Submit
						</Button>
						<Button
							variant="ghost"
							onClick={onClose}
							isDisabled={isCloseButtonDisabled}
						>
							Cancel
						</Button>
					</Center>
				}
			</ModalFooter>
		);
	}

	return (
		<CModal
			isOpen={isOpen}
			size={size}
			closeOnOverlayClick={isCloseOnOverlayClick}
			isCentered={isCentered}
			onClose={onClose}
			onOverlayClick={onOverlayClick}
			scrollBehavior={scrollBehavior}
			{...styled}
		>
			{hasMask && _renderOverlay()}
			<ModalContent sx={{
				padding: '5px',
			}}>
				{_renderHeader()}
				{hasCloseButton && _renderCloseButton()}
				<Divider/>
				<ModalBody>
					{children}
				</ModalBody>
				{_renderFooter()}
			</ModalContent>
		</CModal>
	);
}

Modal.SizeEnum = SizeEnum;
Modal.ScrollBehaviorEnum = ScrollBehaviorEnum;
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
