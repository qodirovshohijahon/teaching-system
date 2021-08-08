Database Security
We have learned how to store data in a Postgres database, but there are a few topics we haven’t covered. One of the big concepts we’ve side stepped up to this point is data security. When we’re storing information like worlds, plants, or weapons, none of that information is sensitive. If someone got access to our database they could make a mess but the bad things they could do with that information are limited. Other tables though, for example a users table, have information that needs to be protected like passwords, IDs, even emails or credit card information - there are lots of data points that an attacker could use maliciously if they got a hold of it. This section introduces the important concepts behind 
protecting passwords in a database.

See
nd0067-fsjsnd-c2-l5-a02-salt-and-password-hashing-v1_720p

Video Summary
A hashed password has been run through a function that generates a long encrypted string from the original password.
The same password run through the same hash function will generate the same response, this is how we can match passwords when users log in
Simply hashing passwords though isn't enough, adding Salt, an extra string sequence to the beginning or end of a password before hashing it makes it much harder for attackers to decrypt passwords
Bcrypt is a very common library for password hashing in web apps
Fun Extra -- What does Salt mean anyway?
I always thought that Salt was one of the million tech acronyms, but it isn't! In fact, there's some debate about how we even came to use the word salt for this process. Some say it is a reference to ancient war and salting fields to make them unusable, others say we use the word salt because it is an additive put on food that changes it. This argument is strengthened by the process of salt and peppering, which is yet another layer we can add to password hashes to make sure they are harder to unravel in case of a break in.

Here is an interesting stack overflow thread discussing the various possible etymologies for the word salt in cryptography. https://stackoverflow.com/questions/244903/why-is-a-password-salt-called-a-salt

