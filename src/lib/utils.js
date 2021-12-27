import { useRef, useEffect } from 'react';
export const getDisplayName = Component => {
	return Component.displayName || Component.name || 'Component';
};

export const usePrevious = value => {
	const ref = useRef();

	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};
