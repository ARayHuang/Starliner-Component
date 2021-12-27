import React, { useState } from 'react';
import {
	Flex,
	Box,
	VStack,
	Button,
	Stack,
	Spacer,
	Center,
} from '@chakra-ui/react';
import {
	FaBlogger,
	FaEvernote,
	FaGithub,
	FaBars,
} from 'react-icons/fa';
import Sidebar from './index';

export const basic = () => {
	const [isOpen, setIsOpen] = useState(false);

	function _renderChildren() {
		return (
			<VStack
				spacing={5}
				align="stretch"
				fontSize="xl"
			>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaBlogger />
					</Box>
					<Box>Blogger</Box>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaEvernote />
					</Box>
					<Box>Evernote</Box>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaGithub />
					</Box>
					<Box>Github</Box>
				</Flex>
			</VStack>
		);
	}

	function _renderCollapseChildren() {
		return (
			<VStack
				spacing={6}
				align="stretch"
				fontSize="xl"
			>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaBlogger />
					</Box>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaEvernote />
					</Box>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaGithub />
					</Box>
				</Flex>
			</VStack>
		);
	}

	return (
		<Sidebar
			isOpen={isOpen}
			width="150px"
			collapseWidth="40px"
			styled={{
				color: '#FFF',
				bg: '#0c1d47',
			}}
			renderChildren={_renderChildren}
			renderCollapseChildren={_renderCollapseChildren}
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		/>
	);
};

export const withButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	function _renderChildren() {
		return (
			<VStack
				spacing={5}
				align="stretch"
				fontSize="xl"
			>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaBlogger />
					</Box>
					<Box>Blogger</Box>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaEvernote />
					</Box>
					<Box>Evernote</Box>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaGithub />
					</Box>
					<Box>Github</Box>
				</Flex>
			</VStack>
		);
	}

	function _renderCollapseChildren() {
		return (
			<VStack
				spacing={6}
				align="stretch"
				fontSize="xl"
			>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaBlogger />
					</Box>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaEvernote />
					</Box>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaGithub />
					</Box>
				</Flex>
			</VStack>
		);
	}

	return (
		<Flex height="100vh" overflow="hidden">
			<Sidebar
				isOpen={isOpen}
				width="150px"
				collapseWidth="40px"
				styled={{
					color: '#FFF',
					bg: '#0c1d47',
				}}
				renderChildren={_renderChildren}
				renderCollapseChildren={_renderCollapseChildren}
			/>
			<Box py={5} px={5}>
				<Button variant="outline" sx={{ color: 'gray.400' }} onClick={() => setIsOpen(!isOpen)}>
					<FaBars/>
				</Button>
			</Box>
		</Flex>
	);
};

export const withFixed = () => {
	const [isOpen, setIsOpen] = useState(false);

	function _renderChildren() {
		return (
			<VStack
				spacing={5}
				align="stretch"
				fontSize="xl"
			>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaBlogger />
					</Box>
					<Box>Blogger</Box>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaEvernote />
					</Box>
					<Box>Evernote</Box>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaGithub />
					</Box>
					<Box>Github</Box>
				</Flex>
			</VStack>
		);
	}

	function _renderCollapseChildren() {
		return (
			<VStack
				spacing={6}
				align="stretch"
				fontSize="xl"
			>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaBlogger />
					</Box>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaEvernote />
					</Box>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Box as="span" fontSize="xl" mr={3}>
						<FaGithub />
					</Box>
				</Flex>
			</VStack>
		);
	}

	function _renderFixedChildren() {
		return (
			<VStack
				spacing={5}
				align="stretch"
				fontSize="xl"
			>
				<Flex alignItems="center" lineHeight="1">
					<Center><Box p="2">SVTP</Box></Center>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Center>
						<Box w="110px" p="2" border="1px solid #e2e8f0" borderRadius="10px">
							SVTP Tasks
						</Box>
					</Center>
				</Flex>
				<Flex alignItems="center" lineHeight="1">
					<Center>
						<Box w="110px" p="2" border="1px solid #e2e8f0" borderRadius="10px">
							Manage Templates
						</Box>
					</Center>
				</Flex>
			</VStack>
		);
	}

	return (
		<>
			<Flex height="100vh" overflow="hidden">
				<Sidebar
					isOpen={isOpen}
					width="150px"
					collapseWidth="40px"
					styled={{
						color: '#FFF',
						bg: '#0c1d47',
					}}
					onMouseEnter={() => setIsOpen(true)}
					onMouseLeave={() => setIsOpen(false)}
					renderChildren={_renderChildren}
					renderCollapseChildren={_renderCollapseChildren}
				/>
				<Box w="100%">
					<Stack h="50px">
						<Flex alignItems="center">
							<Box p="2"></Box>
							<Spacer />
							<Box p="2">user name</Box>
						</Flex>
					</Stack>
					<Sidebar
						isFixedWidth={true}
						width="150px"
						styled={{
							color: '#000',
							bg: '#FFF',
						}}
						renderChildren={_renderFixedChildren}
					/>
				</Box>
			</Flex>
		</>
	);
};

export default {
	title: 'Component/Sidebar',
	component: Sidebar,
};
