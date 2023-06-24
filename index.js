
// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
// app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'))

// Controllers & Routes
// app.use('/places',require('./Controllers/places'))

// app.get('/', (req, res) => {
//     res.render('home')

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
  }]
  
// })

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
