# 7 kyu

# [Find the sum of the roots of a quadratic equation](https://www.codewars.com/kata/57d448c6ba30875437000138)

This function will return sum of roots of a quadratic equation rounded to 2 decimal places, if there are any possible roots, else return None/null/nil/nothing. If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots. There will always be valid arguments.

## Syntax

> roots(`number`, `number`, `number`) --> `number` or `null`

### Parameters

**a**: `number`

- first number

**b**: `number`

- Second number

**c**: `number`

- Third number

### Return Value: `number` or `null`

- sum of the roots or null if there is no roots

## Examples

This is a very simple function using basics math operators

when 'c' and 'a' are less than 'b':

```js
// use case

console.log(roots(107,417,17));//-3.9

```

when 'c' is greater than 'b':

```js
// use case

console.log(roots(107,417,517));//null

```

---
---

> analyze a user's solution to this challenge

## [CreepermanJS](https://www.codewars.com/users/CreepermanJS)

```js
// paste their solution here

function roots(a,b,c){
    let D = b * b - 4 * a * c;
    if (D < 0) {
      return null
    }
    return +(-b / a).toFixed(2)
  }

```

### Strategy

Get the info that you need via function parameter --> find the determinant of the equation --> return null if determinant is less than 0 and stop here else return the sum of roots with max two decimal

### Implementation

He gets the needed info via function's parameter(a, b, c) --> he finds the determinant using its formula and assign it to a variable called 'D' --> he checks if determinant is less 0 or not using if statement --> if D is less than 0 then the equation has no root and the program stops --> else the program returns the sum of the roots with max 2 decimal points

**toFixed(dec)**: to round the result to max 'dec' decimal points

### Possible Refactors

He could use:

- arrow function
- instead of using method .toFixed(dec), he could use ((-b / a)*100 / 100)
- Math.pow(b, 2), instead of b*b

---

> analyze another user's solution to this challenge

## [Ilya-Baklanov](https://www.codewars.com/users/Ilya-Baklanov)

```js
// paste their solution here

 function roots(a,b,c){
    let x;
    let z = a * x **2 + b * x + c;
    let d = b ** 2 - 4*a*c;
    
    if (d < 0) {
      return x = null;
    } else {
      if (d == 0) {
        let x1 = -b / (2 * a);
        x = x1 + x1;
        return Math.round(x*100) / 100; 
      } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a); 
        x = x1 + x2;
        return Math.round(x*100) / 100;
      }
    }
  };

```

### Strategy

Get the info that you need via function parameter --> create a variable to store the sum --> find the determinant of the equation --> return null if determinant is less than 0 and stop here --> if there is one root then add the root with itself, round it to max 2 decimal and return it --> if there are two roots then add root one and root two together --> round it to max 2 decimal and return it


### Implementation

He gets the needed info via function's parameter(a, b, c) --> he stores the sum in 'let x;' --> he finds the determinant using its formula and assign it to a variable called 'd' --> he checks if determinant is less 0 or not using if statement --> if 'd' is less than 0 then the equation has no root and the program stops and returns 'null' --> else if 'd == 0' then it has one root, add the root with itself 'x = x1 + x1;, round the sum to max 2 decimal and return it --> else there are two roots then add the roots 'x = x1 + x2;', round the sum to max 2 decimal and return it

**Math.sqrt()**: to find the square root of a number

### Possible Refactors

He could use:

- arrow function
- instead of using (x*100 / 100), he could use the method .toFixed(dec)
- Math.pow(b, 2), instead of b**2

- Many other language features that I dont know yet


---

## Notes

write any notes to help you review this exercise later, and to help others' study it. this might include

- ~~ to use instead of Math.floor
- the most important thing(s) you learned
- something that you still don't understand but want to keep studying
- something that surprised you
- tricks you will want to remember and use later
