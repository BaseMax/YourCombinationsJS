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
	
	*Permutations(length, with_repetition = false, elements = [], keys = []){
        // let result = [];

        // foreach(this->elements as key => value){
        for (const key in this.elements) {
            // console.log("===>", key);
            const value = this.elements[key];

            if (with_repetition == false) {
				if (in_array(key, keys)) {
					continue;
				}
			}

			keys.push(key);
			elements.push(value);
			
			if (elements.length == length) {
                // console.log(elements);
                // result.push(elements);
                yield elements;
			} else {
                // const new_list = this.Permutations(length, with_repetition, elements, keys);
                // console.log(new_list);
                // result = result.concat(new_list);
                yield* this.Permutations(length, with_repetition, elements, keys);
                // while (true) {
                //     const item = this.Permutations(length, with_repetition, elements, keys).next();
                //     yield item.value;
                //     if (item.done) break;
                // }
                // for (const value2 of this.Permutations(length, with_repetition, elements, keys)) {
                //     yield value2.next().value;
                // }
				// foreach (this.Permutations(length, with_repetition, elements, keys) as value2){
				// 	yield value2;
				// }
			}
			
			keys.pop();
			elements.pop();
		}

        // return result;
	}

    getPermutations(length, with_repetition = false, elements = [], keys = []) {
        const result = [];

        for (const key in this.elements) {
            const value = this.elements[key];

            if (with_repetition == false) {
                if(keys.indexOf(key)) {
					continue;
				}
			}

			keys.push(key);
			elements.push(value);
			
			if (elements.length === length) {
                result.push(elements);
			}
			else {
                for (const value2 of this.getPermutations(length, with_repetition, elements, keys)) {
                    result.push(value2);
				}
			}

            keys.pop();
            elements.pop();
		}

        return result;
	}
}

// Eaxmple
const n = 2;
const k = [1, 2, 3];

const combinations = new YouCombinations(k);
// const permutations = combinations.getPermutations(n, true);
const permutations = combinations.Permutations(n, true);
while (true) {
    const item = permutations.next();
    if (item.done) break;
    console.log(item.value);
}

// console.log(permutations);
// for (const item of permutations.next()) {
//     console.log(item.value);
// }
