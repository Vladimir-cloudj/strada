	let firstNumber = prompt('введите первое число', '');
	if (firstNumber == "" || isNaN(firstNumber))
		alert('введите первое число');
	firstNumber = +firstNumber
	console.log(typeof firstNumber);

	let secondNumber = prompt('введите второе число', '');

	if (secondNumber === "" || isNaN(secondNumber)) {
		alert('введите второе число')
	}
	secondNumber = +secondNumber


	let operator = prompt('введите операцию - "+" "-" "*" "/"', '');

	if (operator === "") {
		alert('введите оператор')
	}

	if (operator == "+") {
		alert('ответ: ' + firstNumber + secondNumber)
	} else if (operator == "-") {
		alert(firstNumber - secondNumber)
	} else if (operator == "*") {
		alert(firstNumber * secondNumber)
	} else if (operator == "/") {
		alert(firstNumber / secondNumber)
	}
