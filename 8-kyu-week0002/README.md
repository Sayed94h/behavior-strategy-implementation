# 7 kyu

# [Fake Binary](https://www.codewars.com/kata/57eae65a4321032ce000002d)

This function converts a series of digits to 1 and 0

## Syntax

> fakeBin(`string`) --> `string`

### Parameters

**x**: `string`

a series of digits as string data type

### Return Value: `string`

- The final converted digits to ones and zeros

## Examples

This is a very simple function using some array methods

all characters are converted and if a character is not a digit then it becomes one:

```js
// use case

const x = '5,6,9,1,2';
console.log(fakeBin(x)); //111111010
//but without comma
const x = '56912';
console.log(fakeBin(x)); //11100

```

when there are just digits:

```js
// use case

const x = '123069';
console.log(fakeBin(x));//000011

```

---

> analyze a user's solution to this challenge

## [Dentzil](https://www.codewars.com/users/Dentzil)

```js
// paste their solution here

 function fakeBin(x) {
   
    return x.split('').map(n => n < 5 ? 0 : 1).join('');

    }

```

### Strategy

He separates all characters --> he checks if each character passes the condition and if it passes the condition then he store it in a another array or var --> he brings all final characters together and returns them

### Implementation

He gets the needed data via function's arguments --> he needs to split all characters using .split() array method --> he needs to check if a character is greater than 5 or less than 5 --> if it is less than 5 then it becomes 0 and otherwise it becomes 1 --> he stores ones and zeros in a new array using .map() array method --> he joins the array elements to one string using .join() array method and he finally returns the result

**.split() array method**: to split the string to separated characters

**.map() array method**: to create a new array with a testing function

**.join() array method**: to join all elements of an array to one string

### Possible Refactors

He could use:

- for loop to read all characters in a string
- if statement to check the condition or testing

---

> analyze another user's solution to this challenge

## [antoine](https://www.codewars.com/users/antoine)

```js
// paste their solution here

 function fakeBin(x) {
    
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  
  }

```

### Strategy

He did the same as the user Dentzil but using another technic


### Implementation

He did the same as the user Dentzil but using another technic

**.replace() array method**: To replace each characters with return character by the testing function

**/\d/g**: actually, this technic is very new to me. It uses the global keyword 'g' to do the test for all cases

### Possible Refactors

He could use:

- for loop to read all characters in a string
- if statement to check the condition or testing
- .map(), .split(), .join(), ...

- Many other language features that I dont know yet


---

## Notes

write any notes to help you review this exercise later, and to help others' study it. this might include

- /\d/g: this one, I see for the first time
- the most important thing(s) you learned
- something that you still don't understand but want to keep studying
- something that surprised you
- tricks you will want to remember and use later
