function shouldAddPlusSign(positionOfDigitFromRight) {
	return positionOfDigitFromRight > 0;
}

function expandedFormOfSingleDigit(digit, positionOfDigitFromRight) {
	return digit * Math.pow(10, positionOfDigitFromRight);
}

function digitShouldAppearInResultString(digit) {
	return digit != 0;
}

function handleSingleDigit(digit, positionOfDigitFromRight) {
	let outputOfSingleDigit = '';

	if (digitShouldAppearInResultString(digit)) {
		outputOfSingleDigit += expandedFormOfSingleDigit(digit, positionOfDigitFromRight);

		if (shouldAddPlusSign(positionOfDigitFromRight)) {
			outputOfSingleDigit += ' + ';
		}
	}
	return outputOfSingleDigit;
}

const expandedForm = (input) => {
	const arrayOfDigits = ('' + input).split('');
	let resultString = '';

	for (let i = 0; i < arrayOfDigits.length; i++) {
		const digit = arrayOfDigits[i];
		const positionOfDigitFromRight = arrayOfDigits.length - 1 - i;
		resultString += handleSingleDigit(digit, positionOfDigitFromRight);
	}

	return resultString;
};

module.exports = expandedForm;
