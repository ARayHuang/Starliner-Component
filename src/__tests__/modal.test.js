import React, { useState } from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../components/modal';

const ModalContainer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const warningText = `This is a modal without footer button. Only use notification some information, and close it. `
	return(
		<>
			<button onClick={() => setIsOpen(true)}>Open Modal</button>
			<Modal
				 isOpen={isOpen}
				 onClose={() => setIsOpen(false)}
				 onRenderFooter={() => {}}
			>
				{warningText}
			</Modal>
		</>
	)
}

describe('Modal', () => {
	it('handle default props', () => {
		const {
			hasMask,
			hasCloseButton,
			isCloseOnOverlayClick,
			isCentered,
			headerTitle,
			onSubmit,
			onClose
		} = Modal.defaultProps;;

		expect(hasMask).toEqual(true);
		expect(hasCloseButton).toEqual(true);
		expect(isCloseOnOverlayClick).toEqual(true);
		expect(isCentered).toEqual(true);
		expect(headerTitle).toEqual('Title');
		expect(onSubmit).toBeInstanceOf(Function);
		expect(onClose).toBeInstanceOf(Function);
	});

	it('should render correctly', () => {
		const props = {
			hasMask: true,
			hasCloseButton: true,
			isOpen: true,
			isCloseOnOverlayClick: true,
			isCentered: true,
			size: 'lg',
			onSubmit: () => {},
			onClose: () => {},
			onOverlayClick: () => {},
			headerTitle: 'mock-title',
			onRenderHeader: () => {},
			children: 'mock children',
			onRenderFooter: () => {}
		}

		const wrapper = shallow(
			<Modal {...props} />
		)

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount in a full DOM', () => {
		const props = {
			hasMask: true,
			hasCloseButton: true,
			isOpen: true,
			isCloseOnOverlayClick: true,
			isCentered: true,
			size: 'lg',
			onSubmit: () => {},
			onClose: () => {},
			onOverlayClick: () => {},
			headerTitle: 'mock-title',
			onRenderHeader: () => {},
			children: 'mock children',
			onRenderFooter: () => {}
		}

		const wrapper = mount(
			<Modal {...props} ></Modal>
		);

		expect(wrapper.props().hasMask).toEqual(props.hasMask);
		expect(wrapper.props().hasCloseButton).toEqual(props.hasCloseButton);
		expect(wrapper.props().isOpen).toEqual(props.isOpen);
		expect(wrapper.props().isCloseOnOverlayClick).toEqual(props.isCloseOnOverlayClick);
		expect(wrapper.props().isCentered).toEqual(props.isCentered);
		expect(wrapper.props().size).toEqual(props.size);
		expect(wrapper.props().onSubmit).toEqual(props.onSubmit);
		expect(wrapper.props().onClose).toEqual(props.onClose);
		expect(wrapper.props().onOverlayClick).toEqual(props.onOverlayClick);
		expect(wrapper.props().headerTitle).toEqual(props.headerTitle);
		expect(wrapper.props().onRenderHeader).toEqual(props.onRenderHeader);
		expect(wrapper.props().children).toEqual(props.children);
		expect(wrapper.props().onRenderFooter).toEqual(props.onRenderFooter);
	});

	describe('when wrap modal in a container', () => {
		it('should render correctly', () => {
			const wrapper = shallow(<ModalContainer />);

			expect(wrapper.find(Modal)).toHaveLength(1);
			expect(wrapper.find(Modal).prop('isOpen')).toEqual(false);
		});

		it('should open modal when button be clicked', () => {
			const wrapper = shallow(<ModalContainer />);
			wrapper.find('button').simulate('click');

			expect(wrapper.find(Modal).prop('isOpen')).toEqual(true);
		});
	})
})
