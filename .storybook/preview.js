import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

export const decorators = [
	(StoryFn) => (
		<ChakraProvider>
			<CSSReset/>
			<StoryFn/>
		</ChakraProvider>
	)
];
