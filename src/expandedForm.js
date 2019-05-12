function shouldAddPlusSign(positionOfDigitFromRight) {
	return positionOfDigitFromRight > 0;
}

function expandedFormOfSingleDigit(digit, positionOfDigitFromRight) {
	return digit * Math.pow(10, positionOfDigitFromRight);
}

const expandedForm = (input) => {
	const arrayOfDigits = ('' + input).split('');
	let resultString = '';

	for (let i = 0; i < arrayOfDigits.length; i++) {
		const digit = arrayOfDigits[i];
		const positionOfDigitFromRight = arrayOfDigits.length - 1 - i;

		resultString += expandedFormOfSingleDigit(digit, positionOfDigitFromRight);

		if (shouldAddPlusSign(positionOfDigitFromRight)) {
			resultString += ' + ';
		}
	}

	return resultString;
};

module.exports = expandedForm;
