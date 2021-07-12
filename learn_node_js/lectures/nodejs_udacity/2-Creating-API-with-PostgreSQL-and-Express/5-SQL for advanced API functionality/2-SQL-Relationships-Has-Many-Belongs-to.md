SQL Relationships
Database tables can be related to other tables in the database. In the SQL lesson, we used foreign keys to relate information from one table with another. We had a list of herbs, and each row on the herbs table had a column world_id that held the id of a row in the worlds table. Because of the presence of this foreign key, the herbs table is related to the worlds table and we can make more interesting queries of this relationship.

Relationships between tables take different forms, and there is some language to describe these relationships. In this section we'll discuss the different types of relationships and how to create them.

See
nd0067-fsjsnd-c2-l6-a02-database-relationships-v1_720p

Video Summary
In this video we went over a few different types of database relationships. Here is a summary of the types.

[Img](img/l6-sql-for-advanced-api-functionality.png)

One to Many
One to many is like the relationship with plants and regions at the beginning of the course where many plants could be associated with one region by adding a foreign key on the plants tatble - the belong to side.

One to One
In a one-to-one relationship, one row in a table is associated with one row in another table - just one row. Where in the one to many, many plants could be associated with one region, this would be if there could only be one plant per region.

Many to Many
Many to many was the focus of this video and describes a more complex relationship between where rows on both tables can be associated with many rows on the other. This relationship is acheived by an intermediary table that stores each relationship as a row, this is called a join table.

[Img](./img/l6-sql-for-advanced-api-functionality.png)

