CORS for API Endpoints
Adding CORS to our API is a small but essential step. This video talk about what CORS is, why we need it, and how to enable it.


See


Video Summary
CORS stands for Cross Origin Resource Sharing and is an important factor in making and handling API requests
Express provides a CORS integration that is pretty straightforward to set up
We can use CORS as a middleware on a route by route basis
Help! The API I want to use doesn't support CORS!
The plea above is a common one I have seen students struggle with.

First, how do you know the API doesn't support CORS? If you are making a normal fetch request to an endpoint the API says it supplies, but are getting an HTTP error similar to this one:

Reason: Did not find method in CORS header ‘Access-Control-Allow-Methods’
Then you might be working with an API that doesn't support CORS. To make certain, you can read more into the documentation of the API, or, another quick trick is to open Postman or another endpoint testing tool and try the exact same request there. Postman is not a browser and does not require CORS support, so if your request works from Postman but not from the browser, it is pretty much confirmed that your issue is that the API doesn't support CORS. This is a major failure on the API's side, CORS support is pretty much required in order to be useful to modern web applications, but you still see this problem around on older APIs from time to time.

When selecting APIs for your project, you should definietly look for which ones are CORS enabled. But, if you really must use one that isn't -- don't panic -- it is still possible. The issue is that CORS support is required by browsers. So the solution is to not make the request from the front end. Your back end will have to make the request to the API. So you can make a custom endpoint in your API that IS accessible from your front end, and that API endpoint will trigger a request to the actual API you want to use. Once it gets a response from that API, your back end will just pass that information to the frontend. It is more complicated than it should be, but its a 'best of a bad situation' solution. That is why in this course we only teach you to make APIs with CORS support!


Exercises 
Creating RESTful routes
In this exercise you are tasked with writing all the REST routes for a model. The model is for blog articles and you will find the model file already in the code base. Your job is to write the RESTful Express routes for it.

For now, your routes can return res.send('this is the ____ route') or another placeholder value, as we will be adding the logic that will run inside these routes in the next section.


Exercise Solution
Here is an example of the routes that would go in your server file. I added very basic error handling to each route to show how you can pass back an HTTP error code. In real life, the errors we look for and status codes we pass back would be much more specific, but this is a pattern for how it could look.

app.get('/articles', (_req: Request, res: Response) => {
    try {
        res.send('this is the INDEX route')
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})

app.get('/articles/:id', (_req: Request, res: Response) => {
    try {
       res.send('this is the SHOW route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.post('/articles', (req: Request, res: Response) => {
    const article: Article = {
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the CREATE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.put('/articles/:id', (req: Request, res: Response) => {
    const article: Article = {
      id: req.params.id, 
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the EDIT route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.delete('/articles/:id', (_req: Request, res: Response) => {
    try {
       res.send('this is the DELETE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}
A little extra:

Are you familiar with the syntax of using an underscore in Javascript like in the code above with the argument _req? The callback function we are creating will be given two arguments by default, the request and response. We can't change those two arguments, and we can't ignore them, even if we aren't going to use them. But it is pointless to create a variable we aren't going to use right?

In Javascript the underscore is a special identifier, and when used before a function argument it signals that we are not going to use that argument. Sometimes you might hear arguments named this way as throw away arguments This can be a helpful trick when using built in functions like map, filter, and reduce, or with arrow functions. Consider that these are the same, but the first syntax clearly marks that the argument is unimportant:

const exampleArrowFunct = _ => console.log(_)

const exampleArrowFunct = foo => console.log(foo)