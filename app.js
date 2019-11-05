require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const apiKey = process.env.APIKEY

// setting view engine

app.set('view engine', 'ejs')

// middleware

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: false}))

// routing: GET and 

app.get('/', function (req, res) {
  res.render('home.ejs', { weather: null, error: null })
})

app.post('/', function (req, res) {
  console.log(req.body.location)
  let err = false
  weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q='+req.body.location+'&units=metric&APPID='+apiKey
  request(weatherURL, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    /* console.log('body:', body); // Print the HTML for the Google homepage. */
    if (error) {
      res.render('home.ejs', { weather: null, error: "error please try again" })
    } else {
      let weather = JSON.parse(body)
      // console.log(weather.weather)
      if (weather.main == undefined) {
        res.render('home.ejs', { weather: null, error: "error please try again" })
      } else {
        var locationWeather = "The weather in " + req.body.location + " is " + weather.main.temp + "\xB0C."
        console.log(weather.main.temp)
        res.render('home.ejs', { weather: locationWeather, error: err })
      }
    }
  });
  // res.render('home.ejs', { weather: locationWeather, error: err })
})
 
app.listen(3000, function() {
  console.log('Server is running on port 3000...')
})