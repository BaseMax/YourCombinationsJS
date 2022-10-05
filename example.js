// Eaxmple
const n = 4;
const k = [1, 2, 3];

const your_combinations = new YourCombinations(k);
let _permutations, _combinations;

_permutations = your_combinations.permutations(n, true);
while (true) {
	const item = _permutations.next();
	if (item.done) break;
	console.log(item.value);
}

console.log("=====================");

_combinations = your_combinations.your_combinations(n, true);
while (true) {
	const item = _combinations.next();
	if (item.done) break;
	console.log(item.value);
}

console.log("=====================");

_permutations = your_combinations.permutations(2, false);
while (true) {
	const item = _permutations.next();
	if (item.done) break;
	console.log(item.value);
}

console.log("=====================");

_combinations = your_combinations.your_combinations(2, false);
while (true) {
	const item = _combinations.next();
	if (item.done) break;
	console.log(item.value);
}

console.log("=====================");

console.log([...your_combinations.powerSet(k)]);
