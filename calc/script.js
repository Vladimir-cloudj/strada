

function Calculate() {
	let a = parseInt(document.getElementById('firstnumber').value)
	let b = parseInt(document.getElementById('secondnumber').value)
	let operator = document.getElementById('operator').value
	let result = document.getElementById('result')

	console.log(a, b, operator);

	a = a
	b = b

	if (operator == "+") {
		// alert('a+b ответ: ' + a + b)
		result.innerHTML = a + b
	} else if (operator == "-") {
		// alert('a-b ответ: ' + a - b)
		result.innerHTML = a - b
	} else if (operator == "*") {
		// alert('a*b ответ: ' + a * b)
		result.innerHTML = a * b
	} else if (operator == "/") {
		// alert('a/b ответ: ' + a / b)
		result.innerHTML = a / b
	}
}

let Button = document.querySelector('.button')
// console.log(Button);
Button.addEventListener('click', Calculate)