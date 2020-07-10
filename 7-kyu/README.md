# 7 kyu

# [Drying Potatoes](https://www.codewars.com/kata/58ce8725c835848ad6000007)

find the weight of potatoes after losing some water

## Syntax

> potatoes(`number`, `number`, `number`) --> `number`

### Parameters

**p0**: `number`

initial percent of water-

**w0**: `number`

- initial weight

**p1**: `number`

- final percent of water

### Return Value: `number`

- final weight coming out of the oven

## Examples

This is a very simple function using basics math operators

weight of potatoes with 1% less water:

```js
// use case

const p0 = 99;
const w0 = 100;
const p1 = 98;

const w1 = potatoes(p0, w0, p1);
console.log(w1); // 50 : what a difference

```

weight of potatoes with 2% less water:

```js
// use case

const p0 = 99;
const w0 = 100;
const p1 = 97;

const w1 = potatoes(p0, w0, p1);
console.log(w1); // 33 : what is big difference

```

---
---

> analyze a user's solution to this challenge

## [user5036852](https://www.codewars.com/users/user5036852)

```js
// paste their solution here

function potatoes(p0, w0, p1) {
    return Math.floor(w0 * (100 - p0) / (100 - p1))
 }

```

### Strategy

subtract p1 from 100 --> multiply w0 to (subtract p0 from 100) and then divide the first part by the second part to find the final weight of potatoes

### Implementation

He gets the needed data via function's arguments --> he finds the difference between real percent water, initial percent water and lost percent water --> he multiplies the initial weight with the proportion of the percent water to find the final weight of potatoes

**Math.floor**: to round the decimal to integer

### Possible Refactors

He could use:

- arrow function
- (^ 0) to round the decimal number

---

> analyze another user's solution to this challenge

## [g964](https://www.codewars.com/users/g964)

```js
// paste their solution here

 function potatoes(p0, w0, p1) {
    return ~~(w0 * (100.0 - p0) / (100.0 - p1))
}

```

### Strategy

subtract p1 from 100.0 and p0 from 100.0 --> divide the result of these two subtraction --> multiply w0 with the result of division to find the final weight of potatoes


### Implementation

He gets the needed data via function's arguments --> he finds the difference between real percent water, initial percent water and lost percent water --> he multiplies the initial weight with the proportion of the percent water to find the final weight of potatoes.

**~~**: it is a faster substitute of Math.floor

### Possible Refactors

He could use:

- Arrow function

- Math.floor

- Many other language features that I dont know yet


---

## Notes

write any notes to help you review this exercise later, and to help others' study it. this might include

- ~~ to use instead of Math.floor
- the most important thing(s) you learned
- something that you still don't understand but want to keep studying
- something that surprised you
- tricks you will want to remember and use later
