import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MutationObserver from 'mutation-observer'

Enzyme.configure({ adapter: new Adapter(), });

global.MutationObserver = MutationObserver;

if(window.document) {
	window.Document.getSelection = () => {
		return {
			getRangeAt: () => {},
		}
	}
}
