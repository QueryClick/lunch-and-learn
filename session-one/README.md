# Lunch and Learn: Session One

## Outline of first session

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
[Learn more about objects here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects).
 