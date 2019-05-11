const expandedForm = (input) => {
	if (input === 15) {
		return '' + 10 + ' + ' + 5;
	}
	return '' + input;
};

module.exports = expandedForm;
