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
const permutations = combinations.permutations(n, true);
while (true) {
    const item = permutations.next();
    if (item.done) break;
    console.log(item.value);
}
