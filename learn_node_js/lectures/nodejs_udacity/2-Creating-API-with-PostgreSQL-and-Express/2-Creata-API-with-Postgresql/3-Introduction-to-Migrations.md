Migrations
Before we get started, I feel its important to say that database migrations could be a big topic, with much more time devoted to it than I am going to spend here. That being said, the complexity level of migrations can easily go beyond what we need for the application we are building in this course, so I have tried my best to contain the topic of migrations to just what is needed to implement this kind of project well, without losing any of the most important concepts. There will be resources available at the end of this lesson to help you go further with migrations, and I hope you find this section to be a helpful start!

That out of the way, its on with the show. In this video, I build a case for why migrations are helpful and introduce the foundational concepts of how they work.

See nd0067-fsjsnd-c2-l3-a03-migrations-v1_720p

Video Summary
Why we need migrations
Migrations are a record of a change made to the schema of a database, with documented instructions to implement and rollback that change

[Migration Instruction](./img/l3-creating-an-api-with-postgres.png)

Documentation
This is the npm library we will use for database migrations: **[DB-migrate](https://github.com/db-migrate/node-db-migrate)**


See nd0067-fsjsnd-c2-l3-a04-migrations-demo-v1_720p

#### Instructions

Instructions to install db-migrate
Install the global package npm install -g db-migrate
Install the package to the project yarn add db-migrate db-migrate-pg
Add a database.json reference file in the root of the project. Later, when we are working with multiple databases - this will allow us to specify what database we want to run migrations on. Here is an example database.json, you will just need to change the database names:
{
  "dev": {
    "driver": "pg",
    "host": "127.0.0.1",
    "database": "fantasy_worlds",
    "user": "magical_user",
    "password": "password123"
  },
  "test": {
    "driver": "pg",
    "host": "127.0.0.1",
    "database": "fantasy_worlds_test",
    "user": "test_user",
    "password": "password123"
  }
}
Create a migration db-migrate create mythical-worlds-table --sql-file
Add the SQL you need to the up and down sql files
Bring the migration up db-migrate up
Bring the migration down db-migrate down