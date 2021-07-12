let express = require('express')

let app = express()
app.use(express.static('public'))

app.listen(3000, () => {
    console.log('Express server is running 3000')
})

app.get('/', (req, res) => {
    res.render('index.html')
})

