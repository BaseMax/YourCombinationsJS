# You Combinations JavaScript (JS)

An efficient combinatorics library for JavaScript to generate and get the list of all **Permutations** and **Combinations** with the ability to enable or disable repetition.

## Functions

- [PowerSet](#powerset)
- [Permutation with repetition](#permutation-with-repetition)
- [Permutation without repetition](#permutation-without-repetition)
- [Combinations with repetition](#combinations-with-repetition)
- [Combinations without repetition](#combinations-without-repetition)

## Usage

### PowerSet

```javascript
[...combinations.powerSet([1, 2, 3])]

// [
//   [],       [ 1 ],
//   [ 2 ],    [ 1, 2 ],
//   [ 3 ],    [ 1, 3 ],
//   [ 2, 3 ], [ 1, 2, 3 ]
// ]
```

### Permutation with repetition

```javascript
const combinations = new YouCombinations([1, 2, 3]);
combinations.permutations(4, true);

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
const combinations = new YouCombinations([1, 2, 3]);
combinations.permutations(2, false);

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

### Combinations with repetition

```javascript
const combinations = new YouCombinations([1, 2, 3]);
combinations.combinations(4, true);

// [ 1, 2 ]
// [ 1, 3 ]
// [ 2, 1 ]
// [ 2, 3 ]
// [ 3, 1 ]
// [ 3, 2 ]
```

### Combinations without repetition

```javascript
const combinations = new YouCombinations([1, 2, 3]);
combinations.combinations(2, false);

// [ 1, 2 ]
// [ 1, 3 ]
// [ 2, 3 ]
```

© Copyright, 2022 Max Base
