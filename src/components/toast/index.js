import { useToast as useToastC } from '@chakra-ui/react';

export const VariantEnum = {
	SOLID: 'solid',
	SUBTLE: 'subtle',
	LEFT_ACCENT: 'left-accent',
	TOP_ACCENT: 'top-accent',
};
export const PositionEnum = {
	Top: 'top',
	TOP_RIGHT: 'top-right',
	TOP_LEFT: 'top-left',
	BOTTOM: 'bottom',
	BOTTOM_RIGHT: 'bottom-right',
	BOTTOM_LEFT: 'bottom-left',
};
export const StatusEnum = {
	SUCCESS: 'success',
	ERROR: 'error',
	WARNING: 'warning',
	INFO: 'info',
};

const defaultProps = {
	position: PositionEnum.TOP_RIGHT,
	variant: VariantEnum.SOLID,
	status: StatusEnum.INFO,
	title: 'test',
	duration: 9000,
	isClosable: true,
};

function useToast() {
	const toast = useToastC();
	const toastResult = initialProps => {
		const props = Object.assign(defaultProps, initialProps);
		const {
			title,
			description,
			position,
			variant,
			status,
			duration,
			isClosable,
		} = props;

		return toast({
			title: title,
			description: description,
			position: position,
			variant: variant,
			status: status,
			duration: duration,
			isClosable: isClosable,
		});
	};

	return toastResult;
}

export default useToast;
