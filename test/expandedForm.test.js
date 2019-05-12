// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

const expandedForm = require('../src/expandedForm');

describe('expandedForm', () => {

	test('when input is a single digit greater than 0, then it should return the input as a string', () => {
		expect(expandedForm(1)).toBe('1');
	});

	test('when input are decades with units, then return them divided by a plus as a string', () => {
		expect(expandedForm(15)).toBe('10 + 5');
	});

	test('when input are hundreds with decades and units, then return them divided by a plus as a string', () => {
		expect(expandedForm(346)).toBe('300 + 40 + 6');
	});

	test('when a digit of the numeral is a 0, then it should not appear in the output', () => {
		expect(expandedForm(609)).toBe('600 + 9');
	});

	test('when input is any numeral, then should not end with a plus', () => {
		expect(expandedForm(60600)).toBe('60000 + 600');
	})

});
