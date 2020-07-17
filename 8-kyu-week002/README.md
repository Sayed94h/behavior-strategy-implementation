# 7 kyu

# [The falling speed of petals](https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b)

This function helps you find the time in a velocity

## Syntax

> sakuraFall(`number`) --> `number`

### Parameters

**velocity**: `number`

falling speed of a petal

### Return Value: `number`

- time that a petal takes to reach the ground

## Examples

This is a very simple function using basics math operators

when the velocity is 0 or less than 0:

```js
// use case

const velocity = 0;
const test_1 = sakuraFall(velocity);
console.log(test_1); // 0

```

when the velocity is greater than 0:

```js
// use case

const velocity = 12.4;
const test_2 = sakuraFall(velocity);
console.log(test_2); // 32.25806451612903

```

---

> analyze a user's solution to this challenge

## [sajadtorkamani](https://www.codewars.com/users/sajadtorkamani)

```js
// paste their solution here

const sakuraFall = velocity => velocity > 0 ? 400 / velocity : 0;

```

### Strategy

He takes the velocity --> he knows the distance which is 400 and then he divides the distance by the velocity and he gets the result which is the time that a petal needs to reach the ground

### Implementation

Het gets the velocity as arguments from the user --> he checks if it is greater than 0 and if it is greater than 0 then he divide the distance by the user's input otherwise it returns 0

**arrow function**: he used arrow function to reach the goal of this task

### Possible Refactors

He could use:

- simple function
- if statement
- return keyword

---

> analyze another user's solution to this challenge

## [matt-ganz](https://www.codewars.com/users/matt-ganz)

```js
// paste their solution here

 function sakuraFall(v) {

    let distToGround = 5 * 80; // distance from branch to ground = 400 centimeters
    let time = 0;
    
    if(v > 0){
      time = distToGround / v;
    }
    
    return time;
  }

```

### Strategy

He needs the velocity, distance --> he checks if the velocity is greater than 0 and if it is so then he calculates it and returns the result

### Implementation

He gets the velocity via function's arguments --> he finds the distance by multiplying the speed with the real time that petal takes to reach the ground --> he initialize the a variable called time --> he checks if the velocity is greater 0 by using if statement and if it is so then he reassigns the var time to quotient of distance divided by velocity.

**if statement**: to check if the user's input is greater than 0

### Possible Refactors

He could use:

- Arrow function


---

## Notes

write any notes to help you review this exercise later, and to help others' study it. this might include

- new vocabulary you learned
- the most important thing(s) you learned
- something that you still don't understand but want to keep studying
- something that surprised you
- tricks you will want to remember and use later
