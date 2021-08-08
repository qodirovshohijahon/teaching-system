const express = require('express')
const Joi = require('joi')
const app = express()


app.use(express.json())

const books = [
    { id: 1, name: 'rich book'},
    { id: 2, name: 'Sher book'},
    { id: 3, name: 'good book'}
]

app.get('/', (req, res) => {
    res.send('Hello from Express');
    res.end()
})
app.get('/api/books', (req, res) => {
    res.send(books)
})

app.post('/api/books', (req, res) => {
    console.log((req.body));
    const bookSchema = {
        name: Joi.string().required().min(3)
    }

    const result = Joi.validate(req.body, bookSchema)
    if ( result.error ) {
        res.status(400).send(result.error.details[0].message)
    }
    const book = {
        id: books.length + 1,
        name: req.body.name
    }
    books.push(book)
    res.status(201).send(book)
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id))

    if (!book) {
        res.status(400).send('Book is not found')
    }
    res.send(book)
})

app.put('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id))
    if (!book)
        return res.status(400).send('Berilgan kitob id yo\'q')

    const bookSchema = {
        name: Joi.string().required().min(3)
    }
})

app.get('/api/articles/:year/:month', (req, res) => {
    res.send(req.query)
})

app.listen(3000, () => {
    console.log(`Server is running at 3000`);
})