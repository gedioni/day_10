//creates an object for the express module
const express = require('express')
//creating routes
const routes = require('./routes')
//helps set up your path system
const path = require('path')
//runs the express module
const app = express()

//setting my view engine, where you tell your server which version of your control that you are going to use
app.set('view engine', 'ejs')

//this creates a static file server that allows clients to download individual files needed to run the application
app.use(express.static(path.join(__dirname, 'public')))

//home route
app.get('/', routes.home)

//about route
app.get('/about', routes.about)

//sets up the port
app.listen(3000, () => console.log('app listening on port 3000'))


