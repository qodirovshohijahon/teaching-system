SQL commands for sorting
There are a few more SQL commands that will really come in handy, all of these are for ordering the responses you get back from a query.

Order By, Ascending, and Descending

These commands allow you to order responses alphabetically or by a number. First, you choose the column that you want to use to order the rows, then you can choose the direction - ascending or descending. Here's an example:

SELECT * FROM products ORDER BY price DESC;

This query would get you all rows and columns from the products table. We have chosen to use the price column as the piece of information we want to order by, and chosen DESC as the direction, so the response we see will be a list of all products where products with the highest prices would come first and get smaller as you scrolled down the list.

SELECT * FROM users ORDER BY name ASC;

Same thing but with alphabetical order instead of numerical. This query would get all the rows and columns from the users table, and sort the rows by name starting with A and going up to Z.

SQL Joins


See nd0067-fsjsnd-c2-l6-a04-sql-joins-v1_720p


Video Summary
This video explains and implements an inner join in psql.

Example join syntax:

SELECT * FROM products INNER JOIN order_products ON product.id = order_products.id;


Exercise: SQL Joins


SQL Joins Exercise
Now its your turn to write a SQL join! Migrations for the previous tables are provided in this project. Your task is to write a join that will find all users who have created orders. You will need to test this query and add the rows in each database via psql since there is no web interface.



Exercise Solution
Here is a join that would fulfill the requirements of this exercise:

SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id;

How did we get to this solution? We know that the orders table records the id of the user creating the order in the user_id column. If a user has ever made an order, their id has been recorded in the orders table as the the user_id of an order. So, this join looks for all user ids that show up in both of those tables to find the users who have made orders.