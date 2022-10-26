/*
 * Name: Your Combinations JavaScript
 * Author: Max Base
 * Date: 2022/10/04
 * Repository: https://github.com/basemax/YourCombinationsJS
 */

class YourCombinations {
	constructor(elements) {
		this.elements = elements;
	}
	
	*powerSet() {
		const size = 2n ** BigInt(this.elements.length); 
		
		for (let i = 0; i < size; i++) {
			const cur = [];
			for(let j = 0; j < this.elements.length; j++) if((i & (1 << j)) > 0) cur.push(this.elements[j]);
			yield cur;
		} 
	}

	*combinations(length, with_repetition = false, position = 0, elements = []) {
		const size = this.elements.length;
		
		for (let i = position; i < size; i++) {
			elements.push(this.elements[i]);

			if (elements.length === length) yield elements;
			else yield* this.combinations(length, with_repetition, (with_repetition === true ? i : i + 1), elements);
			
			elements.pop();
		}
	}

	*permutations(length, with_repetition = false, elements = [], keys = []) {
		for (const key in this.elements) {
			const value = this.elements[key];

			if (with_repetition === false) if (keys.indexOf(key) !== -1) continue;

			keys.push(key);
			elements.push(value);
			
			if (elements.length === length) yield elements;
			else yield* this.permutations(length, with_repetition, elements, keys);
			
			keys.pop();
			elements.pop();
		}
	}
}
