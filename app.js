const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// setting view engine

app.set('view engine', 'ejs')

// middleware

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: false}))

// routing: GET and 

app.get('/', function (req, res) {
  res.render('home.ejs')
})

app.post('/', function (req, res) {
  console.log(req.body.location)
  // res.end()
})
 
app.listen(3000, function() {
  console.log('Server is running on port 3000...')
})