function shouldAddPlusSign(position) {
	return position > 0;
}

function expandedFormOfSingleDigit(digit, positionFromRight) {
	return digit * Math.pow(10, positionFromRight);
}

function digitShouldAppearInResultString(digit) {
	return digit != 0;
}

function handleSingleDigit(digit, position, positionFromRight) {
	let outputOfSingleDigit = '';

	if (digitShouldAppearInResultString(digit)) {
		if (shouldAddPlusSign(position)) {
			outputOfSingleDigit += ' + ';
		}

		outputOfSingleDigit += expandedFormOfSingleDigit(digit, positionFromRight);
	}
	return outputOfSingleDigit;
}

const expandedForm = (input) => {
	const arrayOfDigits = ('' + input).split('');
	let resultString = '';

	for (let position = 0; position < arrayOfDigits.length; position++) {
		const digit = arrayOfDigits[position];
		const positionFromRight = arrayOfDigits.length - 1 - position;
		resultString += handleSingleDigit(digit, position, positionFromRight);
	}

	return resultString;
};

module.exports = expandedForm;
