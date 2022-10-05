# You Combinations JavaScript (JS)

An efficient combinatorics library for JavaScript to generate and get the list of all **Permutations** and **Combinations** with the ability to enable or disable repetition. (utilizing ES2015 generators)

## Functions

- [PowerSet](#powerset)
- [Permutation with repetition](#permutation-with-repetition)
- [Permutation without repetition](#permutation-without-repetition)
- [Combinations with repetition](#your_combinations-with-repetition)
- [Combinations without repetition](#your_combinations-without-repetition)

## Usage

### PowerSet

```javascript
const your_combinations = new YourCombinations([1, 2, 3]);
[...your_your_combinations.powerSet([1, 2, 3])]

// [
//   [],       [ 1 ],
//   [ 2 ],    [ 1, 2 ],
//   [ 3 ],    [ 1, 3 ],
//   [ 2, 3 ], [ 1, 2, 3 ]
// ]
```

### Permutation with repetition

```javascript
const your_combinations = new YourCombinations([1, 2, 3]);
your_your_combinations.permutations(4, true);

// [ 1, 1, 1, 1 ]
// [ 1, 1, 1, 2 ]
// [ 1, 1, 1, 3 ]
// [ 1, 1, 2, 1 ]
// [ 1, 1, 2, 2 ]
// [ 1, 1, 2, 3 ]
// [ 1, 1, 3, 1 ]
// [ 1, 1, 3, 2 ]
// [ 1, 1, 3, 3 ]
// [ 1, 2, 1, 1 ]
// [ 1, 2, 1, 2 ]
// [ 1, 2, 1, 3 ]
// [ 1, 2, 2, 1 ]
// [ 1, 2, 2, 2 ]
// [ 1, 2, 2, 3 ]
// [ 1, 2, 3, 1 ]
// [ 1, 2, 3, 2 ]
// [ 1, 2, 3, 3 ]
// [ 1, 3, 1, 1 ]
// [ 1, 3, 1, 2 ]
// [ 1, 3, 1, 3 ]
// [ 1, 3, 2, 1 ]
// [ 1, 3, 2, 2 ]
// [ 1, 3, 2, 3 ]
// [ 1, 3, 3, 1 ]
// [ 1, 3, 3, 2 ]
// [ 1, 3, 3, 3 ]
// [ 2, 1, 1, 1 ]
// [ 2, 1, 1, 2 ]
// [ 2, 1, 1, 3 ]
// [ 2, 1, 2, 1 ]
// [ 2, 1, 2, 2 ]
// [ 2, 1, 2, 3 ]
// [ 2, 1, 3, 1 ]
// [ 2, 1, 3, 2 ]
// [ 2, 1, 3, 3 ]
// [ 2, 2, 1, 1 ]
// [ 2, 2, 1, 2 ]
// [ 2, 2, 1, 3 ]
// [ 2, 2, 2, 1 ]
// [ 2, 2, 2, 2 ]
// [ 2, 2, 2, 3 ]
// [ 2, 2, 3, 1 ]
// [ 2, 2, 3, 2 ]
// [ 2, 2, 3, 3 ]
// [ 2, 3, 1, 1 ]
// [ 2, 3, 1, 2 ]
// [ 2, 3, 1, 3 ]
// [ 2, 3, 2, 1 ]
// [ 2, 3, 2, 2 ]
// [ 2, 3, 2, 3 ]
// [ 2, 3, 3, 1 ]
// [ 2, 3, 3, 2 ]
// [ 2, 3, 3, 3 ]
// [ 3, 1, 1, 1 ]
// [ 3, 1, 1, 2 ]
// [ 3, 1, 1, 3 ]
// [ 3, 1, 2, 1 ]
// [ 3, 1, 2, 2 ]
// [ 3, 1, 2, 3 ]
// [ 3, 1, 3, 1 ]
// [ 3, 1, 3, 2 ]
// [ 3, 1, 3, 3 ]
// [ 3, 2, 1, 1 ]
// [ 3, 2, 1, 2 ]
// [ 3, 2, 1, 3 ]
// [ 3, 2, 2, 1 ]
// [ 3, 2, 2, 2 ]
// [ 3, 2, 2, 3 ]
// [ 3, 2, 3, 1 ]
// [ 3, 2, 3, 2 ]
// [ 3, 2, 3, 3 ]
// [ 3, 3, 1, 1 ]
// [ 3, 3, 1, 2 ]
// [ 3, 3, 1, 3 ]
// [ 3, 3, 2, 1 ]
// [ 3, 3, 2, 2 ]
// [ 3, 3, 2, 3 ]
// [ 3, 3, 3, 1 ]
// [ 3, 3, 3, 2 ]
// [ 3, 3, 3, 3 ]
```

### Permutation without repetition

```javascript
const your_combinations = new YourCombinations([1, 2, 3]);
your_your_combinations.permutations(2, false);

// [ 1, 2 ]
// [ 1, 3 ]
// [ 2, 1 ]
// [ 2, 3 ]
// [ 3, 1 ]
// [ 3, 2 ]
```

### Combinations with repetition

```javascript
const your_combinations = new YourCombinations([1, 2, 3]);
your_your_combinations.your_combinations(4, true);

// [ 1, 1, 1, 1 ]
// [ 1, 1, 1, 2 ]
// [ 1, 1, 1, 3 ]
// [ 1, 1, 2, 2 ]
// [ 1, 1, 2, 3 ]
// [ 1, 1, 3, 3 ]
// [ 1, 2, 2, 2 ]
// [ 1, 2, 2, 3 ]
// [ 1, 2, 3, 3 ]
// [ 1, 3, 3, 3 ]
// [ 2, 2, 2, 2 ]
// [ 2, 2, 2, 3 ]
// [ 2, 2, 3, 3 ]
// [ 2, 3, 3, 3 ]
// [ 3, 3, 3, 3 ]
```

### Combinations without repetition

```javascript
const your_combinations = new YourCombinations([1, 2, 3]);
your_your_combinations.your_combinations(2, false);

// [ 1, 2 ]
// [ 1, 3 ]
// [ 2, 3 ]
```

© Copyright, 2022 Max Base
