function shouldAddPlusSign(positionOfDigitFromRight) {
	return positionOfDigitFromRight > 0;
}

const expandedForm = (input) => {
	const arrayOfDigits = ('' + input).split('');

	let resultString = '';

	for (let i = 0; i < arrayOfDigits.length; i++) {
		const positionOfDigitFromRight = arrayOfDigits.length - 1 - i;

		resultString += arrayOfDigits[i] * Math.pow(10, positionOfDigitFromRight);

		if (shouldAddPlusSign(positionOfDigitFromRight)) {
			resultString += ' + ';
		}
	}

	return resultString;
};

module.exports = expandedForm;
