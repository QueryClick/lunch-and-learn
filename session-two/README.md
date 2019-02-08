# Lunch and Learn: Session Two

## Disclaimer
The code in this repository was developed for a training session within QueryClick. Feel free to use the code, but you probably shouldn't use anything in production before testing. This was all created for training and was developed quickly.

This file has three parts:   
1. [Documentation](#Documentation)
2. [Requirements](#Requirements) 
3. [Downloading, installing and running the application](#downloading-installing-and-running-the-application)

## Documentation
I have commented almost all lines of code for this session within its file as it would take **way** too long type it all here. Please feel free to go through each file and look at those comments!

* [What is an API?](#what-is-an-api)
* [HTTP Verbs](#http-verbs)
    * [GET](#get)
    * [POST](#post)
    * [PUT](#put)
    * [PATCH](#patch)
    * [DELETE](#delete)
* [RESTful](#restful)
* [What is asynchronous code?](#what-is-asynchronous-code)
* [What is a Promise](#what-is-a-promise)
    * [Promise examples](#some-promise-examples)
* [Why use const and let](#why-use-const-and-let)
    * [const](#const)
    * [let](#let)
    * [Block-scope](#so-what-is-this-block-scope-you-speak-of)
* [Arrow Function Expression](#arrow-function-expression)

### What is an API?
An Application Programming Interface, or more commonly known as an API, is a way of communicating with an application. In our scenario, an API is a way of communicating with a service via HTTP on many routes, and getting a response based on those routes. In simple terms, an API handles requests and sends a responses.   

**Example:**   
We search Google for the current weather in Glasgow.   
Google takes your request, and sends its own request to an external API called “wunderground”.   
Wundergorund takes in the request and responds with the weather data.   
Google then takes that response of weather data, and displays it to you in a wee nice snippet.  
An API can be used to run specific code when requested to.   

Like mentioned before, our scenario isn't the only way to use an API. We will also cover an API called [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), which provides an `interface` for fetching resources.

### HTTP Verbs
 > HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred as HTTP verbs. - MDN

Let's go over some of them!
#### GET
The `GET` request is used to retrieve data. For example, we want to retrieve blog posts from the endpoint `/api/posts`. We send a `GET` request to this endpoint, and the endpoint responds with our blog post data.   

Another example is that we want a specific blog post based off an ID. In our made-up API, we can send a `GET` request to the endpoint `/api/post/1`, where `1` is the ID. The endpoint then responds with that specific blog post.

#### POST
The `POST` request is used to send data to create something. For example, if we wanted to create a new blog post, we would send the data of the new blog post to the endpoint `/api/create/post`. The endpoint would then receive that data and save it to a database. The API would typically respond with either a status code or a message letting you know if the blog post was successfully created or if something went wrong.   

Another example would be if we wanted to send an email on our websites contact form. A user would fill out the form, and then press a button to submit the data. We would take that data and send it (`POST`) to our API, which would deal with validating, and sending the email. Of course, you should **never** trust user input. Do not just accept any data without making sure it is safe.

### PUT
`PUT` is very similar to `POST` in that it can send data to create something. However, `PUT` can also update a resource. An example would be if a user wanted to update their email address. When they fill our their new email address and press send, your API would deal with finding the correct user, and updating that email address.

### PATCH
`PATCH` is very similar to `PUT` and `POST` but makes partial modifications to data. This means that it will **only** change the specific data you want to (like an email address) and leave everything else alone.   

An example of the differences between `PUT` and `PATCH`:   

`PUT` is idempotent. If you wanted to change a clients email address, you would have to send the full clients information in the request body, otherwise, the data could be set to `null`.   
For example:  
Say we're changing my email from `aaron@queryclick.com` to `aaron.welsh@queryclick.com`  
```JSON
{
    "id": 1,
    "name": "Aaron",
    "email": "aaron.welsh@queryclick.com"
}
```
If you failed to add the users `name`, it would be become `null` and you would then have this as a user:
```JSON
{
    "id": 1,
    "name": null,
    "email": "aaron.welsh@queryclick.com"
}
```
`PATCH` is not idempotent (but it is possible to make them idempotent). `PATCH` requires extra information to tell the API exactly what its operation is.   
An example:   
Say we're changing my email from `aaron@queryclick.com` to `aaron.welsh@queryclick.com`  

```JSON
{
    "operation": "replace", 
    "field": "email", 
    "value": "aaron.welsh@queryclick.com"
},
```
You would now have this as the user:
```JSON
{
    "id": 1,
    "name": "Aaron",
    "email": "aaron.welsh@queryclick.com"
}
```

### DELETE
`DELETE` is exactly as it sounds. You use a `DELETE` request to delete a resource. For example, if a user wanted to delete their account, we would use a `DELETE` request to remove their data.


### Resources to learn more
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods   

https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them   

https://www.restapitutorial.com/lessons/httpmethods.html  

### RESTful
Representational State Transfer (REST) refers to a group of software architecture design constraints that bring about efficient, reliable, and scalable distributed systems. A system is called RESTful when it adheres to those constraints.

The basic idea of REST is that a resource, e.g. a document, is transferred with its state and relationships (hypertext) via well-defined, standardized operations and formats. Often API's or services call themselves RESTful when they directly modify  a type of document as opposed to triggering actions elsewhere.

Because HTTP, the standard protocol behind the Web, also transfers documents and hypertext links, simple HTTP APIs are sometimes colloquially referred to as RESTful APIs, RESTful services, or simply REST services, although they don't necessarily adhere to all REST constraints. Beginners can assume a REST API means an HTTP service that can be called using standard web libraries and tools.

[Source](https://developer.mozilla.org/en-US/docs/Glossary/REST)
### What is asynchronous code?
[Learn More](https://eloquentjavascript.net/11_async.html) 

It is common in software development to write code synchronously. Synchronous code is coordinated in time. Each line will be executed from top to bottom, and each line will have to finish executing before the next one can start. Sometimes synchronous code is the only valuable option. However, imagine if one of your lines of code could take a few seconds to finish executing... this could make a user have to wait for something to finish before seeing something else. This isn't good. This is where asynchronous programming comes in!   
Asynchronous still executes line by line, but rather than waiting for the line to finish, it will pass the line of code to the event loop, and then will use an implicit `Promise` to return its result. This would allow for the rest of the application to continue without being blocked.   
 
We humans typically perform tasks asynchronously to be a little more efficient. Let's look at another, real-life example:   

It's dinner time! You are cooking tomato pasta tonight.   
We know that the pasta takes 20 minutes to cook, and that the sauce takes 10 minutes to prepare and 10 minutes to cook.   
It would be pretty silly if we started to cook the pasta, and then just stared at it until it was ready and then started to prepare and then cook our sauce! That would mean we cannot eat for at least 40 minutes! This would be synchronous.   

What we would normally do is start cooking the pasta, and then start to prepare the sauce. Once our sauce is prepared, we start to cook our sauce. Once our sauce is cooked, our pasta should be done! Dinner only took around 20 minutes!   

Asynchronous doesn't make your code faster. Your code still takes the same amount of time to execute, but it happens in a more efficient way without blocking us from doing anything else. For example, if your function that calls an API to list users takes 2 seconds, even if it was asynchronous, it would still take 2 seconds. However, it wouldn't block the rest of the code from running.

### What is a Promise
> “Think of a promise as being like a meal receipt at a fast-food restaurant. You order your meal and pay for it, and the clerk gives you a number that you need to claim the food when it is done. When the food comes out, the clerk calls your number and you exchange the receipt for the food. Promises work the same way. You've called a function, passed it some data, and received a promise in return. When the "food" is done, the function resolves the promise (calls your number) and passes you the result. Attaching a callback to the promise is your way of handing back the receipt.” - Kyle Simpson

**Still don't know what a promise is?**   

A promise is just a placeholder for something that hasn’t happened/been resolved/rejected yet. For example:   
* You give the garage your car to fix 
* They know they can do it today, but don’t know when they will be finished
* They say they will give you a phone call when they’re done (promise)
* You continue on with your day as you’re not blocked by this. You can just take public transport to work!
* You get a phone call saying your car is done and can be picked up whenever
* You have finished work and are ready to get your car back, so you go and get it.

We use this with asynchronous design when calling an API because we know what we want, but we don’t need it this second; the application can still work without this information straight away. We can get it whenever it is ready and continue. We will be using promises to display data to our blog frontend whenever it is ready. 

#### Some Promise examples
Let's create a promise that will resolve in 2 seconds:
```JavaScript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('this will resolve in 2 seconds...');
  }, 2000);
});

myPromise
  .then((value) => {
    console.log(value);
  });
```
Output:
> this will resolve in 2 seconds...

So what did we actually just do there? Good question!

1. We created a new Promise and assigned it to a variable named `myPromise`. This promise has two arguments passed within it - `resolve` and `reject`.
2. Within this Promise, we created a [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) that will execute code within its callback after 2 seconds (2000 milliseconds).
3. Within this callback, we use the passed argument `resolve` to resolve the `Promise` with the string `this will resolve in 2 seconds...`
4. We then call `myPromise` variable with a `.then()` attached to it and within its callback, we console log the value returned (the string above).

**So what is `.then()`!?**   
[.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) method returns the promise if it was successful! But what happens if it wasn't successful?   
We then use [.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) when a promise has been rejected. Let's modify the code above and make it reject the promise:
```JavaScript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    reject('this will reject in 2 seconds...');
  }, 2000);
});

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
      console.error(err);
  })
```
Output (as an error):
> this will reject in 2 seconds...

Within this session, we use `Promises` to try and get data from our API. If we can successfully get the data (it resolves), we will do something within `.then()`. If we get an error (rejects) because the new blog post couldn't be created as the database was down, we handle that within the `.catch()`. This is very useful for letting a user know that their post couldn't be created!

[Learn more about Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Why use const and let
In the previous session we used `var` to assign data to a variable. In this session, we use [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) and sometimes [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let). Cool, but why?   

#### Const
Const means constant. Constants are block-scoped (we will look at block-scoped in a second!). A constants value cannot be reassignment, and it can't be redeclared. This is very important if you need to make sure that the data assigned to a variable is always the same and cannot be changed.

#### Let
Let is similar to a `const` in that it is block-scoped, but the value can change (within its blocked-scope). Let's look at examples of `const` and `let` when changing the value.   
**const**
```JavaScript
const sum = 20;
sum = 30;
```
Output
> Uncaught TypeError: Assignment to constant variable   

**let**
```JavaScript
let sum = 20;
sum = 30;
```
Output
> 30

#### So what is this 'block-scope' you speak of?
Block-scope is relevant within a block statement (or  compound statement in other languages). With `const` and `let` being block-scoped, it will allow for you to have different values depending on what block scope you're in. Let's do an example:   

```JavaScript
const name = 'Aaron';
{
    const name = 'John';
    console.log(name);
}
console.log(name);
```
Output:
> John   
> Aaron

This happens because the `const` (same with `let`) is unique in the sense of that scope. This is why we don't get the error from before (`Uncaught TypeError: Assignment to constant variable`) because it is unique to that scope.   

**What about `var`?**   
`var` is not block-scoped. A `var` declaration, wherever it happens, is executed before any other code. This is called hoisting. I won't cover hoisting here, [but this article covers it well](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1). `var` is however function-scoped! Similar to the code above, if we run:
```JavaScript
var name = 'Aaron';
function whoami() {
    var name = 'John';
    console.log(name)
}
whoami();
console.log(name)
```
The output:
> John  
> Aaron

**So what does this all mean?**   
Unless you have a very good reason to use `var` (which I doubt), you should use `const` and `let`. As a JavaScript developer, I always use `const` UNLESS I know I will have to change the value of a variable at some point; I would then use `let`.

Learn more about [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) and [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let). 
### Arrow Function Expression
An arrow function (also called a fat arrow) is just a compact alternative to the `function()` syntax that we used in that last session and within some of this session.  
Let's look at some examples:

**Function()**:
```JavaScript
function name() {
    console.log('My name is Aaron');
}
name();
```
Output:   
> My name is Aaron

**Arrow Function Expression**   
```JavaScript
const name = () => {
    console.log('Hello, my name is Aaron');
}
name();
```
Output:   
> Hello, my name is Aaron

Although they look like they do the same thing, they have some significant differences that could catch you out! The main one I will cover is `this` keyword. But first, let's get a basic understanding of what `this` means.   
`this` refers to the object that it belongs to. Let's create an example object to use `this` within:

```JavaScript
const person = {
    firstName: 'Aaron',
    lastName: 'Welsh',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.fullName());
```
Output: 
> Aaron Welsh

What would happen if we removed the `this`?   
```JavaScript
const person = {
    firstName: 'Aaron',
    lastName: 'Welsh',
    fullName: function() {
        return firstName + ' ' + lastName;
    }
};
console.log(person.fullName());
```
Output: 
> Uncaught ReferenceError: firstName is not defined

This (pun intended?) error happens because the function for `fullName` doesn't know of `firstName` and `lastName`.

Let's do the same code, but use an arrow function:

```JavaScript
const person = {
    firstName: 'Aaron',
    lastName: 'Welsh',
    fullName: () => {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.fullName());
```
Output:
> undefined undefined  

We get `undefined undefined` because within this scope, it has no clue what `firstName` and `lastName` is! Functions define their own `this` value. However, arrow functions do not bind `this`, but is bound lexically by keeping the meaning from its original context.  
You can learn more about arrow functions [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
## Requirements
1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Node.js](https://nodejs.org/en/download)

You can verify these are installed by opening your terminal and typing `git -v` for Git, and `node -v` for Node.js. This will tell you the softwares version.

**Installing Git:**   
https://www.atlassian.com/git/tutorials/install-git

**Installing Node.js:**  
Node.js is typically just an installer that has an installation wizard - https://nodejs.org/en/download/

## Downloading, installing and running the application.
The application is split up into two parts:   
1. Frontend - Where we will make our API calls to display data
2. Backend -  Where the API routes are defined

### Downloading source code
1. Clone this repository and CD to it:
    > `git clone https://github.com/QueryClick/lunch-and-learn.git && cd lunch-and-learn`
2. CD (change directory) to the session two directory
    > `cd session-two`

### Installing and running the application.
If you've followed the previous steps and are within the directory `session-two`:
1. Install dependencies
    > `npm i`

[**The next part you will need two terminals open**](https://giphy.com/gifs/RyXVu4ZW454IM)

#### Frontend
To start the frontend service, run the following command:
> `npm run frontend`

You should have a message in your terminal saying
> Frontend running on port http://localhost:8080

**Please note** that if you make any changes outside of the directory `public`, you will have to stop your console (typically `ctrl + c`) and start it again (`npm run frontend`). Otherwise, your code will not be updated.

#### Backend
**Before you start your backend service, we need to do a few things!**

**Create an `env.js` file**:   
_env.js should **never** be committed or shared. It is ignored from Git._
1. Within the `backend` directory, there is another directory named `config`. Within `config`, there is a file called `env.example.js`. simply rename this file to `env.js`.
2. Within this file, change the string `mongodb://localhost:27017/blog` to your MongoDB URL. The next requirement will explain how to install MongoDB.

**Install MongoDB**   
Our backend service uses MongoDB to store our blog posts to. Installing MongoDB is out of the scope of this session, but here are some tutorials on how to install to your OS. If you do have any questions, give me a shout!

Windows - https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-windows/   
Mac - https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-os-x/   
Linux - https://docs.mongodb.com/v3.2/administration/install-on-linux/   
OR, you could create a free one at Atlas - https://www.mongodb.com/cloud/atlas#faq and then just use that instance.

To start the frontend service, run the following command:
> `npm run backend`

You should have a message in your terminal saying
> Backend service running on port 3000

**Please note** that if you make any changes to the backend, you will have to stop your console (typically `ctrl + c`) and start it again (`npm run backend`). Otherwise, your code will not be updated.
