// Eaxmple
const n = 4;
const k = [1, 2, 3];

const combinations = new YouCombinations(k);
let _permutations, _combinations;

_permutations = combinations.permutations(n, true);
while (true) {
	const item = _permutations.next();
	if (item.done) break;
	console.log(item.value);
}

console.log("=====================");

_combinations = combinations.combinations(n, true);
while (true) {
	const item = _combinations.next();
	if (item.done) break;
	console.log(item.value);
}

console.log("=====================");

_permutations = combinations.permutations(2, false);
while (true) {
	const item = _permutations.next();
	if (item.done) break;
	console.log(item.value);
}

console.log("=====================");

_combinations = combinations.combinations(2, false);
while (true) {
	const item = _combinations.next();
	if (item.done) break;
	console.log(item.value);
}

console.log("=====================");

console.log([...combinations.powerSet(k)]);
