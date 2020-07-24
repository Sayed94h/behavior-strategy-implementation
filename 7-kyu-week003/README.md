# 7 kyu

# [Nth power rules them all!](https://www.codewars.com/kata/58aed2cafab8faca1d000e20)

This function increases each element of an array to the power of given 'n' number, add each increased element, add each element together without increasing to a power and finally subtracts the sum of increased elements from the sum of not increased elements

## Syntax

> modifiedSum(`object[array]`, `number`) --> `number`

### Parameters

**a**: `object[array]`

- array which contains numbers that have to be increased by another number 'n' or these numbers are the base

**n**: `number`

- the power


### Return Value: `number`

- the difference between the sum of powered and sum of not powered

## Examples

This is a very simple function using basics math operators and array method

when all elements are the same and n = 1:

```js
// use case

 const a = [9,9,9,9]; 
 const n = 1;
 console.log(modifiedSum(a,n)); //0

```

its output will never be less than 0:

```js
// use case

 const a = [1,2,3,4]; 
 const n = 4;
 console.log(modifiedSum(a,n)); //344

```

---
---

> analyze a user's solution to this challenge

## [donaldsebleung](https://www.codewars.com/users/donaldsebleung)

```js
// paste their solution here

function modifiedSum(a, n) {
    return a.reduce((s, c) => s + Math.pow(c, n) - c, 0);

  }


```

### Strategy

Add the elements --> raise the sum to the power of 'n' --> subtract the sum of powered from the first sum

### Implementation

He uses the array method .reduce() to add elements and raise them to a power using Math.pow(sum, n) feature --> subtract the sum of powered elements from the sum of initial elements

**Math.pow**: to raise the elements to a number

**[].reduce()**: to reduce the elements to a single value

### Possible Refactors

He could use:

- for loop

---

> analyze another user's solution to this challenge

## [Niksonman](https://www.codewars.com/users/Niksonman)

```js
// paste their solution here

modifiedSum=(a, n)=>a.reduce((x,y)=>x+y**n -y, 0);

```

### Strategy

he did the same as first user but he did not use Math.pow()


### Implementation

He did the same as first user but he used ** to raise the elements to the power 'n'

**double star**: ** to raise a number to the power of another number

### Possible Refactors

He could use:

- for --- loop

- Math.pow()

- Many other language features that I dont know yet

---

## Notes

write any notes to help you review this exercise later, and to help others' study it. this might include

- ~~ to use instead of Math.floor
- the most important thing(s) you learned
- something that you still don't understand but want to keep studying
- something that surprised you
- tricks you will want to remember and use later
