# 8 kyu

# [Is n divisible by x and y?](https://www.codewars.com/kata/5545f109004975ea66000086)

This function checks if a number 'n' is divisible by two another numbers 'x' and 'y'

## Syntax

> isDivisible(`number`, `number`, `number`) -> `boolean`

### Parameters

**n**: `number`

- the number to be checked if it is divisible

**x**: `number`

- the first checking number: 'n' will be divided by this number

**y**: `number`

- the second checking number: 'n' will be divided by this number

### Return Value: `boolean`

- it says if the 'n' is divisible by 'x' and 'y' or not

## Examples

This function's behavior is simple to understand. It uses very basic math and logical operators

when it is divisible:

```js
// use case
const n = 4;
const x = 1;
const y = 4;
const result = isDivisible(n, x, y);
console.log('result: ', result); // result: true

```

when it is not divisible:

```js
// use case

const n = 17;
const x = 1;
const y = 7;

const result = isDivisible(n, x, y);
console.log('result: ', result); // result: false

```

Edge case:

It always prints FALSE if the arguments are not numbers!

---
---

> analyze a user's solution to this challenge

## [Balkoth](https://www.codewars.com/users/Balkoth)

```js
// paste their solution here
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
```

### Strategy

He gets the needed data --> he checks if the input is divisible by the two another inputs --> he returns the result


### Implementation

He uses function's parameter to get the inputs 'n', 'x' and 'y',--> he checks if 'n' is divisible by 'x' and 'y' using '%' operator and logical operator "==="


### Possible Refactors


- He could use arrow function
- He could use if else statement

---

> analyze another user's solution to this challenge

## [dako](https://www.codewars.com/users/dako)

```js
// paste their solution here

const isDivisible = (n, x, y) => n%x==0 && n%y==0;

```

### Strategy

He gets the needed data --> he checks if the input is divisible by the two another inputs --> he returns the result

### Implementation

He uses function's parameter to get the inputs 'n', 'x' and 'y',--> he checks if 'n' is divisible by 'x' and 'y' using '%' operator and logical operator "==="

**caret 0**: he used this (^ 0) to round the decimal number to integer

### Possible Refactors


- He could use simple function
- He could use if else statement

---

## Notes

This is very simple even for beginner

- I learn that there are multiple ways to do the same tasks
- the most important thing(s) you learned
- something that you still don't understand but want to keep studying
- something that surprised you
- tricks you will want to remember and use later
