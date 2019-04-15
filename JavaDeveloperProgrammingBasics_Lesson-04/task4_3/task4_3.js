function pow(x, n) {
	let a = 1;
	for (let i = 1; i <= n; i++) {
		a = a * x;
	}
	return a;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));