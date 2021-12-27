import React from 'react';
import { Textarea } from './index';

export const basic = () => {
	return (
		<>
			<Textarea
				placeholder="please enter project description"
				onChange={e => console.log(e.target.value)}
			/>
		</>
	);
};

export default {
	title: 'Component/Textarea',
	component: Textarea,
};
