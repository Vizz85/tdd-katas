const expandedForm = (input) => {
	if (input >= 10) {
		const arrayOfDigits = ('' + input).split('');
		return '' + arrayOfDigits[0] * 10 + ' + ' + arrayOfDigits[1];
	}
	return '' + input;
};

module.exports = expandedForm;
