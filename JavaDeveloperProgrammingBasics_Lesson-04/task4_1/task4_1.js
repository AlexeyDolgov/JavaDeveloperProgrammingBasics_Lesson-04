function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return false;
	}
}

// Используя тернарный оператор ?

function checkAge2(age) {
	return (age > 18) ? true : false;
}

// Используя оператор ||

function checkAge3(age) {
	return (age > 18) || false;
}

console.log(checkAge(16));
console.log(checkAge2(16));
console.log(checkAge3(16));
console.log(checkAge(21));
console.log(checkAge2(21));
console.log(checkAge3(21));