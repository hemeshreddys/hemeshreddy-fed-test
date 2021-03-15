import React from 'react';
import Usercard from './index.js';

describe('Usercard', () => {
	it('renders the Usercard', () => {
		const actual = mount(<Usercard />);
		expect(actual.get(0)).toMatchSnapshot();
		
	});
});
