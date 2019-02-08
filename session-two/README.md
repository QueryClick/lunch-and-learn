# Lunch and Learn: Session Two

## Disclaimer
The code in this repository was developed for a training session within QueryClick. Feel free to use the code, but you probably shouldn't use anything in production before testing. This was all created for training and was developed quickly.

This file has three parts:   
1. [Documentation](#Documentation)
2. [Requirements](#Requirements) 
3. [Downloading, installing and running the application](#downloading-installing-and-running-the-application)

## Documentation
I have commented almost all lines of code for this session within its file as it would take **way** too long type it all here. Please feel free to go through each file and look at those comments!

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
 > HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred as HTTP verbs.

Let's go over some of them!
#### GET
The `GET` request is used to retreive data. For example, we want to retreive blog posts from the endpoint `/api/posts`. We send a `GET` request to this endpoint, and the endpoint responds with our blog post data.   

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
    "name": null,
    "email": "aaron.welsh@queryclick.com"
}
```

### DELETE
`DELETE` is exactly as it sounds. You use a `DELETE` request to delete a resource. For example, if a user wanted to delete their account, we would use a `DELETE` request to remove their data.

### RESTful

### What is asynchronous code?

### What is a Promise

### Fetch API

### Why use const and let

### Arrow Function Expression

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
