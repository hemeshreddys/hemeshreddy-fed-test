import React from 'react';
import CardItem from './index.js';

describe('CardItem', () => {
	it('renders the CardItem', () => {
		const actual = shallow(<CardItem />);
		expect(actual.get(0)).toMatchSnapshot();
		
	});
});
