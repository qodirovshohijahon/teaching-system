Exercise Solution
Well done completing the challenge! Below I have completed one implementation of this database so you can compare it to what you did - but remember - there is more than one good way to build a database!

Part 1: Where to start
We have the instructions, but where to start? The requirements talk about storing animal sightings in the same way we store plant sightings, and this leaves us with some serious questions about what the next step should be, here are the options I see:

We could make a table called sightings to hold all sightings and then add a type column to specify if the sighting was of an animal, plant, or any other sort of thing might be added in the future.
We could add individual tables for animal and plant sightings.
You could really go either way, in a real world situation I would lean towards separate tables for each type of sighting, because it leaves more room for flexibility to change the structure of the tables separately.

Part 2: Create the table
I was boring and decided to call this table animals, though creatures, mythical_creatures, or fantastic_beasts would all have been very good options.

CREATE TABLE animals ...

Now for the slightly trickier part, deciding the rows. Right off the bat the first thing I know is that I'm going to add a serial primary key.

CREATE TABLE animals ( id SERIAL PRIMARY KEY ...);

Good first step. Now we need to take a closer look at the other columns.

The next one I pick out is the reference to region. Yes, this could be a VARCHAR ... but that isn't very helpful. This field needs to be a foreign key. So I add this:

CREATE TABLE animals ( id SERIAL PRIMARY KEY, region_id REFERENCES regions(id)...);

The command above being part of the create table command is a little different than the alter table command we ran in the video, so you might have had to do some googling or you could have done a separate alter table query after creating this table. Either is fine, the above is just an example of what it looks like as part of a create query.

From here its pretty smooth sailing, we just have to decide types and names for each column, here is what I did:

name: VARCHAR(100)

sighting_date: date

individuals: integer

description: text

The only important things here are that:

description should be the only text type
sighting date needs to be type date
Part 3: Extra Challenge
The extra challenge was to add a users table and attach a user to a sighting. For this, my users table is going to be very simple. The columns will be id and name since those are the only ones pertinent to this task.

The only really important thing to make sure you did here, is that the foreign key constraint on the animals table needs to point to the ID column on the users table, and ID should be the PRIMARY KEY on the users table. It might be tempting to use name as the connecting column between the two tables, but a person's name is not guaranteed to be unique and should therefore never be used as a primary key.

Its also worth noting that for users we would typically use a more complex type of ID than serial, but for our purposes here, its completely fine. We'll get more into details for user tables later in this course.

Here's an example user table for this exercise: CREATE TABLE users ( id SERIAL PRIMARY KEY, name VARCHAR, email VARCHAR);

The real goal of this extra challenge was to make sure you understood where the foriegn key should go. The foreign key belongs on the sighting

CREATE TABLE animals ( id SERIAL PRIMARY KEY, region_id REFERENCES regions(id), user_id REFERENCES users(id), individuals integer, sighting_date date, description text);