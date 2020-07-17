# 8 kyu

# [Holiday VIII - Duty Free](https://www.codewars.com/kata/57e92e91b63b6cbac20001e5)

The amount of discount or saving money that you get from buying bottles of whiskey has to be equal to the costs of your holiday.

## Syntax

> dutyFree(`number`, `number`, `number`) -> `number`

### Parameters

**normPrice**: `number`

- The normal price of a bottle of whiskey on street

**discount**: `number`

- amount of discount per bottle

**hol**: `number`

- costs for your holiday

### Return Value: `number`

- the total number of whiskey bottles 

## Examples

This function's behavior is simple to understand but if you dont use the arguments in the same order as parameter then you will get wrong answers.

First use case:

```js
// use case
const normPrice = 28.99;
const discount = 30;
const hol = 12000;
const result = dutyFree(normPrice, discount, hol);
console.log("You should buy "+ result+ " bottles of whiskey to cover your holiday costs");
//You should buy 1379 bottles of whiskey to cover your holiday costs

```

Second use case:

```js
// use case

const result = dutyFree(12, 50, 1000);
console.log("You should buy "+ result+ " bottles of whiskey to cover your holiday costs");
//You should buy 166 bottles of whiskey to cover your holiday costs

```

Edge case, when you mix the arguments:

```js
// use case

const normPrice = 28.99;
const discount = 30;
const hol = 12000;
const result = dutyFree(hol, discount, normPrice);
console.log("You should buy "+ result+ " bottles of whiskey to cover your holiday costs");
//You should buy 0 bottles of whiskey to cover your holiday costs

```

---
---

> analyze a user's solution to this challenge

## [BrianBorin](https://www.codewars.com/users/BrianBorin)

```js
// paste their solution here
function dutyFree(normPrice, discount, hol){
    var saving = normPrice * discount / 100;
    return Math.floor(hol / saving);
  }

```

### Strategy

He used a simple function to pass this challenge. First he calculated the amount of saving and then he divided the costs of his holiday by the amount of saving and rounded the result to an integer.


### Implementation

He used the needed integer as arguments or the needed numbers to calculate. First he multiplied the normal price for whiskey with discount for whiskey and then divided by 100 to find how he could save. He divided the costs of holiday by saving inside a math.floor function to find the number of whisky bottles and at the same time to round the result to integer because you can not buy half of a whiskey.

**Math.floor**: He used this feature to round the decimal number to an integer

### Possible Refactors

For one time calculation he could do it without using a function but is a very simple program. I dont know any other way simpler than this.

- He could use arrow function
- He could use (^ 0) to round the decimal to integer 

---

> analyze another user's solution to this challenge

## [0lexa](https://www.codewars.com/users/0lexa)

```js
// paste their solution here

const dutyFree = (normPrice, discount, hol) =>
  hol / (normPrice * discount / 100) ^ 0;

```

### Strategy

He divided the holiday costs by saving costs and rounded the result to an integer

### Implementation

He used an arrow function. In his arrow function he used simple math operators to find the amount saving and finally he used (^ 0) to round the result to integer

**caret 0**: he used this (^ 0) to round the decimal number to integer

### Possible Refactors

- He could use a simple function instead of arrow function or for one time calculation he could do it without using function at all

- He could use Math.floor to round the decimal to integer

---

## Notes

This is very simple even for beginner

- ^ 0 = Math.floor
- the most important thing(s) you learned
- something that you still don't understand but want to keep studying
- something that surprised you
- tricks you will want to remember and use later
