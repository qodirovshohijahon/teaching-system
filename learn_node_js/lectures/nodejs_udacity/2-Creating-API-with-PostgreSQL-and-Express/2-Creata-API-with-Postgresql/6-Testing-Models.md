Models are a main component in our API, therefore they should be well tested so that developers can sleep well at night. The focus of this video is installing the testing library Jasmine and creating unit tests for the models we created in the last section.


See 
nd0067-fsjsnd-c2-l3-a06-testing-models-v1_720p


Video Summary
Installing Jasmine
What model tests should cover
Helpful syntax for writing unit tests
Installing Jasmine
Add globally for CLI commands npm install -g jasmine
Add Jasmine and its Typescript types locally to package.json yarn add jasmine @types/jasmine
Run Jasmine initialization to get test structure jasmine init
Integration vs Unit Testing
I touch on this topic in the video but it deserves a little more explanation. This isn't a course on testing so I'm not going too far into it, but understanding the main differences between these is important.

A unit test, tests a small chunk of code in your application. Unit tests are for the individual functions or classes in your code, to make sure each one is doing what you need. These are small, typically fast to write, and can really save you time when trying to understand where a problem is happening in the program.

An integration test checks how the individual pieces of your application logic work together. The span of one integration test will cover multiple chunks of code (that can and should each have their own unit tests) and make sure that working correctly together in a flow or process.

I refer to the tests we wrote in this section as integration tests because they test a flow in the application from model to database and back. Its not a large process, so they won't look very different from unit tests, but it is a good opportunity to talk about the differences.

#### Testing Exercise
Its your turn to set up the integration tests for the model we created in the last section.

Task List




Testing Setup
To set up testing, there are quite a few steps, so check here to see if you got them all!

1. Create the database
You had to use psql to add a new database called full_stack_test

2. Add the Environment Variable
We need a new variable called ENV to the .env file. Another viable name for this variable would be MODE, but ENV is probably more common. Set ENV=dev so that the default environment is development.

3. Update the database connection file
Here is a copy of the database file that will allow the app to connect to either the test or dev database.

import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  ENV,
} = process.env

let client
console.log(ENV)

if(ENV === 'test') {
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  })
}

if(ENV === 'dev') {
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  })
}

export default client
4. Add the new script to run the tests
Now we need to write a script that will allows us to run the tests with the correctt environment. This script will connect to the test database, run the migrations, run the tests, and then clear the database so its ready for the next round!

Add this script to your package.json scripts section:

"test": "ENV=test db-migrate --env test up && jasmine-ts && db-migrate db:drop test",
5. Write the tests
Now its just a matter of writing some tests to cover the model methods. There are lots of levels you can go to here, to keep it simple I'm just giving you a starter test file.

import { Book, BookStore } from '../book';

const store = new BookStore()

describe("Book Model", () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a update method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(store.index).toBeDefined();
  });

  it('create method should add a book', async () => {
    const result = await store.create({
      title: 'Bridge to Terabithia',
      total_pages: 250,
      author: 'Katherine Paterson',
      type: 'Childrens'
    });
    expect(result).toEqual({
      id: "1",
      title: 'Bridge to Terabithia',
      total_pages: 250,
      author: 'Katherine Paterson',
      type: 'Childrens'
    });
  });

  it('index method should return a list of books', async () => {
    const result = await store.index();
    expect(result).toEqual([{
      id: "1",
      title: 'Bridge to Terabithia',
      total_pages: 250,
      author: 'Katherine Paterson',
      type: 'Childrens'
    }]);
  });

  it('show method should return the correct book', async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: "1",
      title: 'Bridge to Terabithia',
      total_pages: 250,
      author: 'Katherine Paterson',
      type: 'Childrens'
    });
  });

  it('delete method should remove the book', async () => {
    store.delete("1");
    const result = await store.index()

    expect(result).toEqual([]);
  });
});