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
  res.render('home.ejs', { weather: "Enter a location in the text box to see your local weather." })
})

app.post('/', function (req, res) {
  console.log(req.body.location)
  let locationWeather = "The weather in " + req.body.location + " is 75F and sunny."
  let err = false
  res.render('home.ejs', { weather: locationWeather, errorMessage: err })
})
 
app.listen(3000, function() {
  console.log('Server is running on port 3000...')
})