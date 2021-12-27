import React from 'react';
import { Input } from './index';

const styleConfig = {
	paddingBottom: '10px',
};

export const basic = () => {
	return (
		<>
			<Input placeholder="please enter bar-code" styled={styleConfig}/>
			<Input chakraProps={{ variant: 'flushed' }} placeholder="This is a Flushed text" styled={styleConfig}/>
			<Input prefix="+886" defaultValue="987654321" onChange={e => console.log(e.target.value)} styled={styleConfig}/>
			<Input suffix="@hp.com" defaultValue="abc.edf" onChange={e => console.log(e.target.value)} styled={styleConfig}/>
			<Input placeholder="print console" onChange={e => console.log(e.target.value)} styled={styleConfig}/>
		</>
	);
};

export default {
	title: 'Component/Input',
	component: Input,
};
