let express = require('express')

let app = express()
app.set('view engine', 'pug')
app.listen(3000, () => {
    console.log(`Server is running at 3000 port`)
})

app.get('/', (req, res) => {
    res.end('Hello from express')
})

app.get('/file', (req, res) => {
    res.render('index', {
        productName: 'Lenova',
        productQuality: 'Good'
    })
})
 