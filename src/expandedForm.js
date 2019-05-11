const expandedForm = (input) => {
	if (input >= 100) {
		const arrayOfDigits = ('' + input).split('');
		return '' + arrayOfDigits[0] * 100 + ' + ' + arrayOfDigits[1] * 10 + ' + ' + arrayOfDigits[2];
	}
	if (input >= 10) {
		const arrayOfDigits = ('' + input).split('');
		return '' + arrayOfDigits[0] * 10 + ' + ' + arrayOfDigits[1];
	}
	return '' + input;
};

module.exports = expandedForm;
