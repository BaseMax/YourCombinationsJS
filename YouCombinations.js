/*
 * Name: You Combinations JavaScript
 * Author: Max Base
 * Date: 2022/10/04
 * Repository: https://github.com/basemax/YouCombinationsJS
 */

class YouCombinations {
	constructor(elements) {
		this.elements = elements;
	}    
	
	*combinations(length, with_repetition = false, position = 0, elements = []){
		const items_count = this.elements.length;
		
		for (let i = position; i < items_count; i++){
			elements.push(this.elements[i]);
			if (elements.length == length) yield elements;
			else {
				yield* this.combinations(length, with_repetition, (with_repetition == true ? i : i + 1), elements);
			}
			
			elements.pop();
		}
	}

	*permutations(length, with_repetition = false, elements = [], keys = []){
		for (const key in this.elements) {
			const value = this.elements[key];
			
			if (with_repetition == false) if (in_array(key, keys)) continue;

			keys.push(key);
			elements.push(value);
			
			if (elements.length == length) yield elements;
			else yield* this.permutations(length, with_repetition, elements, keys);
			
			keys.pop();
			elements.pop();
		}
	}
}

// Eaxmple
const n = 2;
const k = [1, 2, 3];

const combinations = new YouCombinations(k);

const _permutations = combinations.permutations(n, true);
while (true) {
	const item = _permutations.next();
	if (item.done) break;
	console.log(item.value);
}

console.log("");

const _combinations = combinations.combinations(n, true);
while (true) {
	const item = _combinations.next();
	if (item.done) break;
	console.log(item.value);
}
