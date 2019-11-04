const express = require('express')
const app = express()

// setting view engine

app.set('view engine', 'ejs')

// routing: GET and 

app.get('/', function (req, res) {
  res.render('home.ejs')
})
 
app.listen(3000, function() {
    console.log('Server is running on port 3000...')
})