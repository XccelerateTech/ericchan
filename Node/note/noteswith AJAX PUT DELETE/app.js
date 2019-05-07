"use strict" // variable must be declared (eg., const let)
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'assets')));


// import needed router middleware.
const indexRouter = require('./routers/indexRouter.js'); //the variable exclusive on the module.exports
const noteRouter = require('./routers/noteRouter.js')





//application middleware use
//mount specific url endpoint to specific router middleware
app.use('/index', indexRouter); //when click url , 3000/index, go to indexRouter.js    
//app.js作流用，分task比其他file做
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ extended: false }))

app.use('/notesWords', noteRouter)





const hostname = 'localhost';
const port = 3000

app.listen(port, hostname, function () {
    console.log(`The ${hostname} server listening port ${port}`)
});