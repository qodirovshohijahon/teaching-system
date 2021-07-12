Now that you have a good sense of what JWTs are and what they can do, we are back with instructor Alyssa Hope to implement JWT authentication in a Node API. First thing we need to do is set up the tools we'll need.



Create JWT at user sign up
In this video I'll go over how to create a token using the jsonwebtoken library and add that step to the user creation flow.

See
nd0067-fsjsnd-c2-l5-a05-authentication-with-jwts-v1_720p

Add JWT validation to an endpoint
In this video I'll show you how to protect private routes by requiring JWT validation.
[Img]("./../img/l5-authentication-and-security-in-a-node-api.png")
See
nd0067-fsjsnd-c2-l5-a06-protecting-a-route-v1_720p

Video Summary
A quick introduction to how tokens can be required in order to perform certain actions.

Implementing JWTs in a real application
The video above shows in theory how to require a token to be present in order to perform an action. However, there is one big way that the solution above would not be sufficient for a real app, and that is how the JWT is passed to the API. In the video, you may have noticed that I get the token from req.body.token. And this technically works and is easy when testing with Postman and other tools. But in real life, the token will not be part of the request body. Instead, tokens live as part of the request header.

There are many reasons for this, like added security. But that discussion is a bit outside the scope of this course, what we will focus on instead is how to get the token out of the header and use it in our logic. When we use JWTs, we pass them as a special header called the Authorization header using this format:

Authorization: Bearer <token>

Where Bearer is a string separated by the token with a space.

Getting the header

In Node, we can locate the authorization header sent with a request like this:

const authorizationHeader = req.headers.authorization

Very similar to the way we get the request body.

Parsing the header

Then, to get the token out of the authorization header, we need to do a little bit of Javascript string parsing. Remember that the word "Bearer" and the token are together as string, separated by a space. We can separate them with this logic:

const token = authorizationHeader.split(' ')[1]

Where we split the string by the space, and take the second item. The second item is the token.

Putting it all together

Now we have a way to get the token from its correct location in the authorization header, so the code from the video could be revised to look like this:

const create = async (req: Request, res: Response) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }

    ....rest of method is unchanged
}
And this would work. But to be even more professional about this, let's make this process of requiring token verification easily replicable by turning it into a function.

Making a custom Express middleware

In the handler file, we are going to add a new function called verifyAuthToken. I'll first show you the function, most of the logic is a direct copy from the create method above:

const verifyAuthToken = (req: Request, res: Response, next) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)

        next()
    } catch (error) {
        res.status(401)
    }
}
Things to note:

This function takes in three arguments, req and res (exactly like a route handler) and another called next. This is how we create a custom Express middleware.

We complete the function, not with a return but by calling next. If the token could not be verified, we will send that 401 error.

Now, we can tell Express to use this middleware, like this:

const mount = (app: express.Application) => {
    app.get('/users', index)
    app.get('/users/:id', show)
    app.post('/users', verifyAuthToken, create)
    app.put('/users/:id', verifyAuthToken, update)
    app.delete('/users/:id', verifyAuthToken, destroy)
}
So, for the CREATE route, you can see that the request will come in and verifyAuthToken will be called before the handler's create method.

And that's it! You've created a custom Express middleware!


Authentication with JWTs Exercise
Do the tasks in the checklist to complete the exercise for this section, then check your work with the solution!


Authentication with JWTs Exercise
Do the tasks in the checklist to complete the exercise for this section, then check your work with the solution!


Exercise Solution
Here are some code examples that fulfill this exercise:

handlers/users.ts --> CREATE

const create = async (req: Request, res: Response) => {
    const user: User = {
        username: req.body.username,
        password: req.body.password,
    }
    try {
        const newUser = await store.create(user)
        var token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET);
        res.json(token)
    } catch(err) {
        res.status(400)
        res.json(err + user)
    }
}
handlers/users.ts --> AUTHENTICATE

const authenticate = async (req: Request, res: Response) => {
  const user: User = {
    username: req.body.username,
    password: req.body.password,
  }
  try {
      const u = await store.authenticate(user.username, user.password)
      var token = jwt.sign({ user: u }, process.env.TOKEN_SECRET);
      res.json(token)
  } catch(error) {
      res.status(401)
      res.json({ error })
  }
}
handlers/books.ts --> CREATE

const create = async (req: Request, res: Response) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }

    try {
        const book: Book = {
            title: req.body.title,
            author: req.body.author,
            total_pages: req.body.total_pages,
            summary: req.body.summary
        }

        const newBook = await store.create(book)
        res.json(newBook)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}
handler/books.ts --> DELETE

const destroy = async (req: Request, res: Response) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }

    try {
        const deleted = await store.delete(req.body.id)
        res.json(deleted)
    } catch (error) {
        res.status(400)
        res.json({ error })
    }
}
Extra Challenge
Make sure users can only edit their own information. The important thing to remember for this is that the token carries the user information - including their id. This is a useful extra challenge because in real world apps, the primary use for JWTs is for authorization, or, figuring out if a person is allowed to do the action they are trying to do. Typically apps will give users roles, and different roles (like ADMIN, or GUEST) have different abilities within the app. Authorization can get pretty tricky so that's as far as I'm going to for now, but its nice to dip a toe into the idea of authorization in this challenge. You'll notice that this example is simplistic, and doesn't do everything that would be required in a real situation, but its just to open up the idea of what can be done with JWTs and authorization.

handlers/users.ts --> UPDATE

const update = async (req: Request, res: Response) => {
    const user: User = {
        id: parseInt(req.params.id),
        username: req.body.username,
        password: req.body.password,
    }
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        if(decoded.id !== user.id) {
            throw new Error('User id does not match!')
        }
    } catch(err) {
        res.status(401)
        res.json(err)
        return
    }

    try {
        const updated = await store.create(user)
        res.json(updated)
    } catch(err) {
        res.status(400)
        res.json(err + user)
    }
}
And if you created a custom middleware for this - great job! You can even create a few different middlewares for different levels of authorization needed - for instance one middleware to look for a valid token and another to check for an admin role on the user, or to check if they are trying to edit a page they don't own.