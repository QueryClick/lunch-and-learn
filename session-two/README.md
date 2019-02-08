# Lunch and Learn: Session Two

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

## Documentation
To come...