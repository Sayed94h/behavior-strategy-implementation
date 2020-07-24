# 7 kyu

# [Simple remove duplicates](https://www.codewars.com/kata/5ba38ba180824a86850000f7)

This function removes elements of array which are more than once in the array from the left side of the array to the right side of the array.

## Syntax

> solve(`object[array]`) --> `object[array]`

### Parameters

**arr**: `object[array]`

- This is the array that you should check its element for duplicates


### Return Value: `object[array]`

- Array with no duplicates

## Examples

This is a very simple function using some array methods

Works with empty array and returns empty array:

```js
// use case

const arr = [];
const callFunc = solve(arr);
console.log(callFunc); //[]

```

when there are only duplicates at the left side of the array:

```js
// use case

const arr = [4, 2, 4, 2, 3, 5, 4, 2, 3];
const callFunc = solve(arr);
console.log(callFunc); //[ 5, 4, 2, 3 ]

```
---
---

> analyze a user's solution to this challenge

## [bennour](https://www.codewars.com/users/bennour)

```js
// paste their solution here

function solve(arr){
    var a=[];
    var ar=arr.reverse();
    for (var i=0; i<ar.length; ++i)
      if (a.indexOf(ar[i])==-1)
        a.push(ar[i]);
    return a.reverse();
  }

```

### Strategy

He declares a new array to store none duplicates --> he reverses the array to start with most right elements because he has to filter from most left elements --> he checks if there is not any element twice and then pushes the element to the new array. --> he reverses the new array and returns the array

### Implementation

He gets the needed array via function's arguments --> he creates an empty array --> he uses the array method .reverse() to reverse the array and store it to a new variable --> he loops through each elements of the array using for loop to check if there is any duplicates --> he pushes each unic element one time to the array --> he reverse the array back to its original order and returns it.

**[].reverse()**: to reverse the array elements

**[].indexOf()**: to find the index of each element in the array

### Possible Refactors

He could use:

- arrow function
- for --- of loop

---

> analyze another user's solution to this challenge

## [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

```js
// paste their solution here

const solve = a => Array.from(new Set(a.reverse())).reverse() ;

```

### Strategy

He creates a new array from the reversed array and he reverse it back


### Implementation

He uses the array method .from() to create a new array--> he uses new Set() to filter duplicates --> he reverses the array

**Array.from()**: to create a new array
**new Set()**: 

### Possible Refactors

He could use:

- For loops

- if else

- Many other language features that I dont know yet


---

## Notes

write any notes to help you review this exercise later, and to help others' study it. this might include


- the most important thing(s) you learned
- something that you still don't understand but want to keep studying
- something that surprised you
- tricks you will want to remember and use later
