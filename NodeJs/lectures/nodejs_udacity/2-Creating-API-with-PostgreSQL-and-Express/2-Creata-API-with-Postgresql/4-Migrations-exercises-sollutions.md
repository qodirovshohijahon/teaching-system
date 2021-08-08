Solution
DB-migrate

Written instructions for installing db-migrate are in the lesson content.

Create the migration

With the library set up correctly, you should have been able to run the command db-migrate create books-table --sql-file

And have it generate the corresponding folder and files in the migrations folder of your app.

Write the SQL

With the migration files created, you needed to go into the sqls folder, find the up file and fill it with this query:

CREATE TABLE books (
    id SERIAL PRIMARY  KEY,
    title VARCHAR(150),
    total_pages integer,
    author VARCHAR(255),
    type VARCHAR(100),
    summary text
);
You'll see that I added an id column even though it wasn't mentioned. This is because every table should have a primary key, and none of the other data points associated with book were suitable as a primary key because they can't be guaranteed to be unique. Remember that semicolon!

Note - What types did you choose for your columns? Most of these are pretty straightforward, you'll note I added author as a full 255 character string, just in case a book has multiple authors.

Now for the down file!

DROP TABLE books;
Run the migration

Running db-migrate up in the terminal should create the table books.

Check the migration

And after running dt to display tables you should see a table books included in the list! (There may be other system tables already in the database, so you'll need to check for your table specifically. But if you see a message like "No relations exist" then something went wrong.)