"use strict"
const express = require('express');
const indexHandler = require('../handlers/indexHandler.js')
const path = require('path')
const noteRouter = require('./noteRouter')

const indexRouter = express.Router();
// const path = require('path')
// const dateTimeRouter = require('../routers/dateTimeRouter')

// routing middleware use
//specify the function loggerFunc

//create url endpoint and router middleware binding relationship
indexRouter.use(indexHandler.htmlFunc)//every request route to the indexRouter, should call everytime 


// indexRouter.use('/notes', dateTimeRouter)
// indexRouter.get('/about', indexHandler.aboutFunc)
// indexRouter.get('/contact', indexHandler.contactFunc)


module.exports = indexRouter;