const expandedForm = (input) => {
	const arrayOfDigits = ('' + input).split('');

	let resultString = '';

	for (let i = 0; i < arrayOfDigits.length; i++) {
		resultString += arrayOfDigits[i] * Math.pow(10, arrayOfDigits.length - 1 - i);

		if (arrayOfDigits.length - 1 - i !== 0) {
			resultString += ' + ';
		}
	}

	return resultString;
};

module.exports = expandedForm;
