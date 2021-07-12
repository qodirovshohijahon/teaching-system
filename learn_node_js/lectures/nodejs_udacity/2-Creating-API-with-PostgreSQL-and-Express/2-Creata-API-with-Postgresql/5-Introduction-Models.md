In the previous lesson we spent a lot of time on tables and CRUD, but now our Node application is going to be triggering all of those actions for us. The focus of this video is performing CRUD operations on the database from within a Node program.


See nd0067-fsjsnd-c2-l3-a05-models-walkthrough-v2_720p


Play
Mute
Remaining Time -6:07
1xPlayback RatePicture-in-Picture
Fullscreen
Video Summary
Walkthru for creating the file and folder structure for models in the Node app
Walktrhu creating a model file with methods
Tables hold a list of items that share properties (columns), models are a class in our code that can be used as a template to create items that are stored as rows in the table.
Documentation
[Express documentation](https://expressjs.com/en/guide/routing.html)



### Exercises - Models

Models Exercise Tasks
In this exercise you are tasked with building out a model with all CRUD actions for the books table you created in the last exercise



Helpful Reminder:

We are using the books table from the previous exercise, here was the table schema from that exercise for reference:

book 
    id SERIAL PRIMARY  KEY,
    title VARCHAR(150),
    total_pages integer,
    author VARCHAR(255),
    type VARCHAR(100),
    summary text




Exercise Solution
Files and Folders

Create the models folder and books model file. The directory structure should look like this:src --> models --> book.ts

Extra: Did you notice or wonder why its the books (plural) table in the database, but the book (singular) file for the model? That's because the database table will hold many books, but the model file is defining what a book is for our application. The model is represented as a class, each book row in the database will be an instance of the book model. I've always felt its so cool how all of that fits together.

Typescript Type

In book.ts one of the first things we need is to define the Typescript type for book. This will allow us to pass this type around and use it in our function return types. Here is what the type should look like:

export type Book = {
     id: number;
     title: string;
     author: string;
     totalPages: number;
     summary: string;
}
CRUD methods

In the video we didn't build out all the CRUD model methods, but here you were tasked with building out all of them. Here is a copy of the entire model file:

// @ts-ignore
import Client from '../database'

export type Book = {
     id: number;
     title: string;
     author: string;
     totalPages: number;
     summary: string;
}

export class BookStore {
  async index(): Promise<Book[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT * FROM books'

      const result = await conn.query(sql)

      conn.release()

      return result.rows 
    } catch (err) {
      throw new Error(`Could not get books. Error: ${err}`)
    }
  }

  async show(id: string): Promise<Book> {
    try {
    const sql = 'SELECT * FROM books WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    conn.release()

    return result.rows[0]
    } catch (err) {
        throw new Error(`Could not find book ${id}. Error: ${err}`)
    }
  }

  async create(b: Book): Promise<Book> {
      try {
    const sql = 'INSERT INTO books (title, author, total_pages, summary) VALUES($1, $2, $3, $4) RETURNING *'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn
        .query(sql, [b.title, b.author, b.totalPages, b.summary])

    const book = result.rows[0]

    conn.release()

    return book
      } catch (err) {
          throw new Error(`Could not add new book ${title}. Error: ${err}`)
      }
  }

  async delete(id: string): Promise<Book> {
      try {
    const sql = 'DELETE FROM books WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    const book = result.rows[0]

    conn.release()

    return book
      } catch (err) {
          throw new Error(`Could not delete book ${id}. Error: ${err}`)
      }
  }
}
