### See
1.ND0067 FSJSND C2 L2 A05 SQL Filters V2
2.ND0067 FSJS C2 L2 A04 Intro To CRUD V1
Storing and accessing entries in a database
We've created a database and know how to structure it. But now we need to know about the stuff we're going to store in the database. How do we store information in a database? And once we've stored it, how do we get it back out again? The video below will show you how.

Video Summary
SQL commands to interact with rows in a database table
CRUD stands for Create Read Update Delete and represents the types of actions we often take on information in databases
SQL Filters
In the last video we touched on a helpful SQL filter WHERE. This video explores other filters and how to use them.



Video Summary
SQL filtering words can be added to refine and hone commands
Common filter words are WHERE, BETWEEN, LIKE, IF NULL, IF NOT NULL
Watch Out! Common SQL Mistakes
There are some really easy to make and easy to miss mistakes that can trip you up in SQL. Here are two of the most common ones - both have gotten me many times.

Double quotes instead of single quotes. Double and single quotes are used for different tasks in SQL. For common strings like finding a name in a WHERE statement you must use single quotes. This is really easy to mix up, especially if you are copy/pasting SQL queries, as the formatted special or back-tick quotes also might not work. So if a SQL command isn't running, but you know the syntax is good - double check for single quotes. Here is a good article about the differences in uses of double and single quote in Postgres from Prisma.io.
Missing a semicolon. So easy to miss, the semicolon at the end of a query is one of the most common mistakes to make. Thankfully its easy to fix by just adding a semi colon on the next line - but that fix only works if you notice it soon enough. This is why its a good idea to keep an eye on the beginning of the terminal line, to make sure it ends with this =# and not something like this -#. Another good practice for catching SQL syntax mistakes early is to pay attention to the result output after a command. If you make a new table you should get a message saying there's a new table, if you added an item you should see an insertion, if you do not get a response after running a command, something is wrong and you should stop and fix it.