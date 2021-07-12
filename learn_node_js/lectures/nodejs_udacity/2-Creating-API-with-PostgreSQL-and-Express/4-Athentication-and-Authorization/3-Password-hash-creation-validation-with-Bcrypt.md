Installing Bcrypt
In the last section I introduced you to the concepts of password hashing and salt. Bcrypt is a very common library for implementing password encryption and in this section I'm going to walk you through password protection and validation in a Node API.



Hashing passwords at user account creation
In this video I'll show how to add bcrypt password hashing when a user is added to the database.


See
nd0067-fsjsnd-c2-l5-a03-signup-password-hash-v1_720p
Video Summary
Here's an example of the bcrypt hashing method with salt and pepper:

   const hash = bcrypt.hashSync(
      u.password + pepper, 
      parseInt(saltRounds)
   );
Validating passwords at user sign in
In this video I'll show how to add a custom authentication route to our API and how to validate hashed passwords at sign in.



See
nd0067-fsjsnd-c2-l5-a04-password-validation-v1_720p

Video Summary
Here is an example of the bcrypt compare method that checks an incoming password for a match against the hashed password stored in the database

bcrypt.compareSync(password+pepper, user.password_digest)


Exercise Solution
Users table
Setting up the migration I ran:

db-migrate create users-table --sql-file
I kept the users table REALLY simple, which is actually all we need for this exercise. The up migration was:

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    password_digest VARCHAR
);
Installing Bcrypt
Below are the steps copied from the lesson content.

Steps to install Bcrypt
Task List




Create and Authenticate methods
Below are copies of the create and authenticate methods

CREATE
async create(u: User): Promise<User> {
    try {
      // @ts-ignore
      const conn = await Client.connect()
      const sql = 'INSERT INTO users (username, password_digest) VALUES($1, $2) RETURNING *'

      const hash = bcrypt.hashSync(
        u.password + pepper, 
        parseInt(saltRounds)
      );

      const result = await conn.query(sql, [u.username, hash])
      const user = result.rows[0]

      conn.release()

      return user
    } catch(err) {
      throw new Error(`unable create user (${u.username}): ${err}`)
    } 
  }
AUTHENTICATE
async authenticate(username: string, password: string): Promise<User | null> {
    const conn = await Client.connect()
    const sql = 'SELECT password_digest FROM users WHERE username=($1)'

    const result = await conn.query(sql, [username])

    console.log(password+pepper)

    if(result.rows.length) {

      const user = result.rows[0]

      console.log(user)

      if (bcrypt.compareSync(password+pepper, user.password_digest)) {
        return user
      }
    }

    return null
  }

