Documentation
Here are links to the documentation for the libraries I talked about in the video

- [x] [NPM Postgres](https://github.com/brianc/node-postgres)
- [x] [Typescript watch](https://github.com/gilamran/tsc-watch)


Where Databases Run
Since we are talking about connecting and running databases, I want to touch on where these databases are, because that can be confusing and there are lots of options.

You can run a database on your computer and connect to it locally kind of like localhost.
You can run a database on your own computer in a container system like Docker.
Container systems are also common remotely, for instance in the Udacity workspace, you are connecting to a database running in a virtual machine.
Services like AWS and Azure provide databases in the cloud.
In each of the situations above, the process of connecting to a database will look a little different, but you will still be connecting to a database as a user. Generally speaking, the more technologies or layers between you (or your application) and the database you want to use, the more complex it will be to connect to that database. To keep things simple for this course, the Node application and Postgres database will run in the same VM.

Environment Variables
Working with sensitive information can be hard, especially when your application relies on keys and passwords in order to connect to and access databases or APIs. The instructions below will walk you through adding a library for environment variables in Node so that we can safely store information away from public eyes without moving it out of reach.

The library we will use for environment variables is called dotenv. You can add it via npm or yarn like this: yarn add dotenv
Once we have dotenv listed in the package.json dependencies, we need to create one file. Make a new file called .env in the root of the project. In that file, add this: TEST_VAR=testing123. This is our first environment variable!
One last, super important step. The .env file hides sensitive information and makes it available to our application via a variable, so it holds a lot of really important, secret information. Information we don't want shared even in a respository. If a gitignore file exists in your project add the .env file there. If there isn't a gitignore, add a file called .gitignore to the root of the project and add a single line in the file that says just .env. If you include your env file in a public repository, you have completely negated the purpose of adding environment variables.
The dotenv library documentation lives here.

Note: your app should be agnostic to any environment so it can run on a local computer with any operating systems, docker, or the cloud. Other than storing the secret credentials, you can also use the .env file to set up portable environment variables, such as assigning a PORT number and determining development/test/production environment. To set up environment variables using dotenv library, this blog post provides some tips and tricks to store, load, and organize NodeJS environment variables.

Connecting the database
When we write the command psql <username> we enter the interactive terminal for working with Postgres. But with a backend application like the Node API we are creating in this course, we won’t be the ones using psql and connecting to a database. The only one making changes to the database will be our Node app. The Node application is going to run the same psql command as we do to connect to the database, but we need to add some additional information.

Video Summary
Adding the dotenv library walkthru
Creating a file for the database connection


#### Exercise

Your turn! In this exercise you are given the same starter Node app we began with at the start of the lesson. This exercise is mostly to get you introduced to the Node application and database setup we will be using for the rest of the course exercises.

Database: full_stack_dev
Username: full_stack_user
password: password123

The database is running on port 3001 in this environment.

With this information, you should be able to create the database file in the Node app that will connect to the database. Remember to use environment variables - you'll have to install that library yourself!

Note The Udacity workspace system may treat the .env file as hidden. You can always find it in terminal with ls -a.

Local Environment
If you want to do this exercise on your local computer and already have docker installed, there is a docker compose file provided for you with generic content in this **[repo](https://github.com/udacity/nd0067-c2-creating-an-api-with-postgresql-and-express-project-starter)**. Note that you may need to update this docker file or setup to make it work for your machine.



#### Sollution

Solution
Installing Dotenv

If you struggled to get the dotenv package installed, there are written instructions in the lesson content for you to follow, as well as a link to the package documentation.

Environment Variables

After installing Dotenv you have a .env file. The exercise instructions gave you some bits of information for connecting to the database, your challenge was to turn them into environment variables and use them to create the database connection.

Below is an example of a working dotenv file, your variables names do not have to match these, but the variable names should be indicative of what they hold.

POSTGRES_HOST=127.0.0.1
POSTGRES_DB=full_stack_dev
POSTGRES_USER=full_stack_user
POSTGRES_PASSWORD=password123
Database connection file

Here is an example database file.

import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
} = process.env 

const client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
})

export default client
Things to note here:

The dotenv.config() line initializes the environment variables. You can't access the env vars unless this line exists in your code, it typically goes as close to the beginning of the program as possible.
You don't have to destructure the variables out of process.env like I did here, this was just to show you that process.env is just a regular old Javascript object that can be destructured, and it cleans things up a little.
Remember that as far as we're concerned in this course, pool is just a connection to the database.