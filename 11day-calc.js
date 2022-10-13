function Calculate(a, b, operator) {
	let result;
	// console.log(a, b, operator);

	if (operator == "+") {
		result = a + b;
	} else if (operator == "-") {
		result = a - b;
	} else if (operator == "*") {
		result = a * b;
	} else result = 'error'

	if (isNaN(result)) {
		return console.log('error');
	} else {
		return console.log('result: ' + result);
	}	
}

Calculate(3, 4, '+')
Calculate(9, 4, '-')
Calculate(2, 3, '*')
Calculate(1, 4, '+_')