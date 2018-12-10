# Lunch and Learn: Session One

## Outline of first session
In the first session, we covered a bunch of important areas. This file will cover what we did, and give you more resources to learn for each part. View the relevant files for source code.

* Variables
    * What is a variable
    * How to declare a variable
    * Different data types in JavaScript
* Conditional Statements
    * What is conditional statements
    * How to write a basic conditional statement
    * Different ways of using conditional statements
* Functions
    * What is a function
    * How to write a function
    * How to pass arguments to a function
    * Some basic examples of functions
* Loops
    * What is a loop
    * Looping through an array
    * Creating an array of objects and iterate over it, display relevant information
* Async/Sync
    * What is asynchronous code
    * What is synchronous code
    * A basic example of asynchronous code

**Note:** `console.log();` allows for you to log values to the console (terminal if Node.js). This is used for quickly seeing what the value is. You can find more about the Console object [here](https://developer.mozilla.org/en-US/docs/Web/API/Console).

### Variables
[Source Code](variables.js)   
[Learn More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)   

Variables are containers that you can assign values to.   
The values you assign to the variable can have different data types. These data types are:

Primitive Data Types:
* Boolean
* Null
* Undefined
* Number
* String

Non-primitive Type:
* Object

#### The difference between primitive types and objects 
**Primitives**   

Primitive values and data types is data that is not an object. With it not being an object, a primitive value/data type has no methods attached to it.   
Primitives are also immutable. They cannot be altered. You can reassign the variable with a new value, but the original value will not be altered.   
[Learn more about primitives here](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) (notice I left out the type of symbol? That is new to JavaScript, you can ignore that for now!).  

**Objects**   
Objects are a data structure containting data and instructions on how to work with the data.   
Objects have propeties, which have a name (key) and a value. The value can be different data types, and even a function (which is typically called a method if referenced inside of an object).   
Objects in JavaScript are similar to objects in real life! Let's create an object scenario:   
I have a car. The car is the object! The car is made up of key information (properties) such as `make, model, colour, seats`. These keys have values such as black, 5 etc. Let's make our object!

```JavaScript
var car = {
    make: 'Citroen',
    model: 'DS3',
    colour: 'Black',
    seats: 5 
};

```

[Learn more about objects here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects).

#### Arrays
[Learn more about arrays here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). 

An Array is an object. Arrays can be super useful for storing large amounts of data to a single variable.   
The important thing to remember here is that an array is a type of object, but is an instance of Array (which is a global object).  

Let's do some examples to explain better:    
1. Create an array: `var fruits = ['apple', 'banana', 'orange'];`
2. Check the type of that array: `console.log(typeof fruits);`   
This will return `object`.
3. Check if the array is an instance of `Array`: `console.log(fruits instanceof Array);`   
This will return `true`.

### Conditional Statements
[Source Code](conditional-statements.js)   
[Learn More](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)   

We use conditional statements to perform different actions depending if certain conditions were met.   

We as humans do this everyday - If we want coffee from a coffee shop, we first check **if** we have enough money. If we do have enough money, we will go and buy the coffee. If we do not have enough money, we can't buy the coffee :(   

Another example? When we're commuting to work on the train, each time the train stops, we quickly check if it is our stop. If it is our stop, we get off the train. If it is not our stop, we remain on the train until it is our stop!   

The most commonly used way of doing conditional statements is using `if/else`. Let's understand `if` first:   
To write an if conditional statement, we first write `if`, followed by parentheses: `if()`. Within the parentheses is where we check if a conditon is `true` or `false`. After the parentheses, we have a set of curly braces, which we write our code in that will only be executed if the conditon is met!   

**Let's write some example:**   
Remember we spoke about Booleans? A simple variable with a Boolean value will work great for this example. First, let's create the variable.
```JavaScript
var employed = true;
``` 
So in this variable, we're saying that we are employed. Let's write our `if` statement to check this is true:

```JavaScript
if(employed) {
    console.log('You are employed!');
}
```
If you ran both snippets of code, you will get the message `You are employed!`. The `if` statmenet is checking if the value passed is true or false. But what if you weren't employed? Nothing would print... This is where `else` comes in. Let's amend the code above:
```JavaScript
if(employed) {
    console.log('You are employed!');
} else {
    console.log('You are not employed!');
}
```
If you change the variable `employed` value to false, it will show the message `You are not employed!`. There is one last way of working with `if/else` and it is `else if()`. If the first condition isn't met, we can do another check before falling back to `else`. Let's create a new scenario.   
We want to check what a users favourite colour is. Let's first define the users favourite colour!   
```JavaScript
var colour = 'red';
```
So we now have a variable called `colour` that has a value `red`, which is a type of `String`. Of course in a real-world application, this would be user input and we wouldn't know the value yet! We want to check what colour the user has set:   
We first check if their favourite is blue. We then check if it is red, lastly we give up!   
```JavaScript
if(colour == 'blue') {
    console.log('Users favourite colour is blue!');
} else if(colour == 'red') {
    console.log('Users favourite colour is red!');
} else {
    console.log('I have no clue.');
```
Since we set the colour as red, if you run these snippets you will have a message saying `Users favourite colour is red!`.   
Notice I used `==` this time? Let's talk about Comparison Operators!   
**Comparison Operators** are used in conditonal statements to determine equality or difference between variables or values. Here is a table of different comparison operators:   

| Operator | Description | Example|
| --- | --- | --- |
| `==` | is equal to value | `name == 'aaron'` |
| `===` | is equal to value and type | `age === 25` |
| `!=` | is not equal to value | `age != 25` |
| `!==` | is not equal to value and type | `age !== 25` |
| `>` | is greater than | `age > 24` |
| `<` | is less than | `age < 26` |
| `>=` | is greater than or equal to | `age >= 25` |
| `<=` | is less than or equal to | `age <= 25` |

One comparison operator that confuses people is the difference between `==` and `===`. Let's explain it a bit more:   
Let's make a variable with our age:
```JavaScript
var age = 25;
```
We have created a variable with a value of `25`, which is a type of `Number`. If we had to check if a users age is equal to 25:
```JavaScript
if(age == '25') // Will return true
```
This will return true even though we're checking a `Number` against a `String`. This is because `==` is checking if a value is true. However, if we changed the double euqals (`==`) to triple equals (`===`), this will return false. 
```JavaScript
if(age === '25') // Will return false
```
If we change the `'25'` (String) to `25` (Number), this condition will finally be met!
```JavaScript
if(age === 25) // Will return true
```
This is because `===` is checking if the value and type is met. The value is 25, and the data type is a `Number` so it passes!

**Logical Operators**   
Logical operators checks two values, and returns accordingly. There are three logical operators to talk about:   

| Operator | Description | Example|
| --- | --- | --- |
| `&&` | checks if value 1 `AND` value 2 are met | `name === 'Aaron' && age === 25` |
| `ǀǀ` | checks if value 1 `OR` value 2 is met | `name === 'Aaron' ǀǀ name === 'James'` |
| `!` | checks if value is not met | `!employed` |

### Functions
[Source Code](functions.js)   
[Learn More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)   
Functions are great for many reasons! One reason you may use a function is to wrap logic that can only be used when a function is called. This allows for you to write something once, and then just use that function rather than rewriting logic many times!   
A function is defined with the `function` keyword, followed by a `name`, followed by parentheses `()`. Let's create a basic function:   
```JavaScript
function name() {
    console.log('Hello, Aaron!');
}
```
To actually use this function, we have to call it! You can call a function by simply typing the name of the function:
```JavaScript
name(); // Will log message 'Hello, Aaron!'
```
This function is pretty useless. What happens if we do not know the users name? Luckily, we can pass information to the function! We pass arguments by having information within the function call:
```JavaScript
name('Aaron');
```
We now need to edit our actual function to be able to use this argument. Within our parentheses, we list our functions parameters. We add one called `name`. You can call it whatever you want though. Let's see how this will work now!
```JavaScript
function name(usersName) {
    console.log('Hello,', usersName);
}
name('Jimmy'); // Will log message 'Hello, Jimmy'
```
Have a look at the [functions.js](functions.js) file for more examples!

### Loops
[Source Code](loops.js)   
[Learn More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)  

Loops are a quick and easy way to do something repeatedly. There are different types of loops for doing different things. A common and good starting loop is the `for` loop.  
The `for` loop evaluates specified conditons until they're false. Let's create an example to illustrate how a `for` loop works.  
We have an array of users.
```JavaScript
var users = ['Aaron', 'Ross', 'Steven'];
```
We want to display each users name until there is no more users to show. Let's create the conditons!
```JavaScript
for(var i = 0; i < users.length; i++) {
    console.log(users[i]); // Will log Aaron, Ross, Steven
}
```
Okay let's break down what just happened:
* First, we create a for loop - `for()`
* Within the parentheses, we do three things:
    * Create a variable named `i` and assign value 0
    * We check if the value of `i` is less than the length of the `users` array. We do this by using the `length` property.
    * Lastly, if this condition is met, we add 1 on to the variable `i` by using `i++` (increments value).
* Within the curly braces, we log the `users` array. Since we are incrementing the value of `i` every time the loop is true, and since arrays start at `0`, we know what our key will be each iteration, so we just pass `i` as the key: `users[i]`. As soon as the condition is false, the loop will stop.   
Have a look at the [loops.js](loops.js) file for more examples!