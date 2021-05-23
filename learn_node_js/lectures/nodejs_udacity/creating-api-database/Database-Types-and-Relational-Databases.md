#### See [ND0067 FSJS C2 L2 A01 What Is A Database V1.mp4]
Video Summary
Databases are organized data storage (often, but not exclusively for computers)
How a database is organized is dependent on how the information it stores will be used
What makes it hard to talk about databases is how many different forms they can take
Different Databases for Different Tasks
There are tons of different types of databases, each with strengths and weaknesses for different purposes. Choose the right one for your situation, and it will help you move quick and smooth. Choose the wrong one and you might fight against it while building out functionality. For a practical overview, let's take a look at ten of the most common database technologies and divide them up by type. This isn't intended to be an exhaustive list of types or databases, it's just to set the scene for the rest of the database work we will do in the course.

SQL/Relational Type Databases
SQL type databases are organized to be query-able using SQL (Structured Query Language) and organize information in tables. These are pretty much like giant spreadsheets, where an item stored in the database is a row in the table, and columns hold data points on each item.

Ideal Use Cases:
Repeating, structured data, such as:

user information
product inventories
blogs
Common SQL/Relational Database Technologies:
MySQL
PostgreSQL
MariaDB
Microsoft SQL Server
NoSQL
As you might have guessed, a NoSQL database ...doesn't use SQL. Really this means it isn't set up like a spreadsheet. These databases can take a few different forms and are used for large sets of distributed data (like for use in micro service architectures).

Ideal Use Cases:
Partially structured or un-structured data: really big collections of complex data, caches

Types of NoSQL Databases:
Key-Value store
A key-value store is a non-relational, noSQL database type that stores data in key-value pairs (exactly like objects or dictionaries in programming). These databases are fast because the keys are unique and easily searchable, and they are flexible, because these key value pairs can store any combination of data types required.
Document store
A document store is a non-relational, noSQL database type that organizes data into documents. Documents can hold any shape of data, which means document stores can easily handle data with no structure or that is arbitrarily nested, which can be a headache to account for in a relational way.
Column-oriented
Data organized by column instead of by row. This architecture scales easily and makes fast, efficient queries. I'm including this architecture as a NoSQL type dbms, but this architecture can actually be used with SQL as well.
Common NoSQL Database Technologies:
Redis [Key Value store]
MongoDB [Document store]
Elasticsearch [Document store]
Apache Cassandra [Column-oriented]
Postgres
Relational databases are where we will spend the rest of the course. We will be creating and connecting to a PostgreSQL (mostly known as just Postgres) database, which is a relational, SQL type database.

Why Postgres?
Here are some reasons why we chose Postgres for this course:

Availability - It is open source and free to use with any project
Common - It is a relational, SQL database which is the most common type of database right now
Popular and well tested - Postgres is a very popular database, and a common choice among enterprise software
Transferable skills - Because Postgres uses SQL, what you learn with Postgres is entirely transferable to working with a MySQL database or any other SQL database