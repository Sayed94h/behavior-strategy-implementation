# 6 kyu

### This is actually not '6 kyu' but it is from '7 kyu' because my rank is very lower than '6 kyu' now and I could not unlock the solutions for the '6 kyu'.

# [Array element parity](https://www.codewars.com/kata/5a092d9e46d843b9db000064)

There is an array, in this array there are numbers, for each number there is a negative version and positive version(ex: -1, 1, -8, 8), but there is also one number that is only negative or positive. Your task is to find this number.

## Syntax

> functionName(`object[array]`) -> `number`

### Parameters

**arr**: `object[array]`

- It is an array of positive and negative numbers and it might contain a number without its negative or positive version.

### Return Value: `number`

- The return value is a number if it is negative then it has no positive version and if it is positive then it has no negative version

## Examples

This is a very simple program to filter an array:

number 3 has no negative version:

```js
// use case

  const arr = [1, -1, 2, -2, 3];
  console.log(solve(arr)); // 3

```

when there is negative and positive version for each number:

```js
// use case

  const arr = [1, -1, 2, -2, 3, -3];
  console.log(solve(arr)); // undefined

```

---
---

> analyze a user's solution to this challenge

## [YOSYA](https://www.codewars.com/users/YOSYA)

```js

function solve(arr){
    for (var i=0; i<arr.length; ++i)
      if (arr.indexOf(-arr[i])==-1)
        return arr[i];
  };

```

### Strategy

He checks if he could find the value and if he could not then he prints that value

### Implementation

He uses indexOf method to check each item in the array and if he could not find the item with that index then he returns that item

**indexOf()**: He uses this feature to filter the array

### Possible Refactors

He could also use:

- arrow function
- find() method

---

> analyze another user's solution to this challenge

## [s21n](https://www.codewars.com/users/s21n)

```js

const solve = array => array.find(value => !array.includes(-value));

```

### Strategy

He looks for a value without positive or negative version in the array, if he could not find that then he prints that value

### Implementation

He uses find() method to look for the value and when he finds then he returns that value

**find()**: to look at each element of the array

### Possible Refactors

He could also use:

- Simple function

- indexOf() method

---

## Notes

write any notes to help you review this exercise later, and to help others' study it. this might include

- indexOf() method
- find() method
- I learned that there is simple solutions for complex problems but it needs time and practice to get used to finding such solutions
- something that you still don't understand but want to keep studying: a lot 
- something that surprised you
- tricks you will want to remember and use later
