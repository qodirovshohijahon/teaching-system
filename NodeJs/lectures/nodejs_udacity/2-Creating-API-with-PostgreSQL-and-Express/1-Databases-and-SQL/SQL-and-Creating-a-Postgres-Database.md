#### See
1 [ND0067 FSJSND C2 L2 A02 Intro To SQL V2]
2 [ND0067 FSJS C2 L2 A03 Intro To Relational Databases V1]

What is SQL?
Because SQL is associated with a type of database, people sometimes mistakenly think SQL itself is a database, but SQL is actually a language or syntax. SQL stands for Structured Query Language and it is the syntax that allows us to interact with a SQL type database. Like using bash in a terminal to operate a computer instead of a mouse, SQL is the language that allows us to operate on a database without any extra graphical tools.

For example, in a spreadsheet we use a mouse and graphical user interface (GUI) to click on columns, update values, copy values, add rows, filter views, etc... but a database doesn't always have a GUI so we to use SQL commands in the terminal to perform these actions.

Introduction to SQL
Before we learn to write SQL commands, we need a database to run commands on! This video walks you through creating and connecting to database via psql.


Video Summary
SQL is the standard language for relational database management systems
psql in terminal allows us to execute SQL commands
Non-meta psql commands must end in semi colons
executing common psql commands
Common psql commands
open psql: psql postgres
connect to a database: \c <database_name>
create a new database: create database <database_name>
get out of psql: \q
Helpful Resource
A good list of helpful meta-commands can be found from Chartio here.

The Database Schema - Tables and Columns
We have created a database! But... what does that mean exactly? It is now time to talk about the structure of a Postgres database.

Video Summary
Structure of a relational database table is like a spreadsheet with columns
Command to list database tables is '\dt'
The Primary Key is a piece of information unique to each row, often an ID.
Command to create a new table:
CREATE TABLE [IF NOT EXISTS] <table_name> (
 column1_name column1_datatype,
 column2_name column2_datatype,
 column2_name column2_datatype
);