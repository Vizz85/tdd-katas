const expandedForm = require('../src/expandedForm');

describe('expandedForm', () => {

	test('when input is a single digit greather than 0, then it should return the input as a string', () => {
		expect(expandedForm(1)).toBe('1');
	});

});
