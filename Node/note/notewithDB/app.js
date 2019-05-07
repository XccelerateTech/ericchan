"use strict" // variable must be declared (eg., const let)
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const hb = require('express-handlebars');
const methodOverride = require('method-override')
const basicAuth = require('basic-auth')
// const AuthChallenger = require('./handlers/AuthChallenger')
app.engine('handlebars',hb({ defaultLayout:'index'}));
// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars');
// app.use(express.static(path.join(__dirname, 'assets')));


// import needed router middleware.
const noteRouter = require('./routers/noteRouter.js')


var pg = require('pg');
var config = {
    user: 'wah',
    database: 'postgres',
    password: 'postgres', //whatever your password is, the default is postgres or password, try both
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);
client.connect();


const auth = function(req, res, next) {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        res.status(401);
        return res.end();
    }
 
    console.log(req.headers);
    let userInput = basicAuth(req);
    console.log(userInput);
 
    if (!userInput || !userInput.name || !userInput.pass) {
        return unauthorized(res);
    }
    else{client.query('SELECT * FROM note_users', function(err, result){
        if(err){
            res.send(401, 'unauthorized');
        }
        else{
            
            let list = result.rows;
            console.log(list);
            for(let i = 0; i < list.length; i++){
                if (list[i].username == userInput.name && list[i].password == userInput.pass){

                    req.user = list[i]
                    console.log('check 1');
                    return next();
                }
            }
        }
    })}


}


// app.use(auth)




//application middleware use
//mount specific url endpoint to specific router middleware
 
//app.js作流用，分task比其他file做
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(auth)
app.use(methodOverride('_method'));

app.use('/notesWords', noteRouter)

app.get('/', async (req,res)=>{
    // console.log(req.user)
    let user = await JSON.stringify(req.user);
    console.log('req.user'+ user);
    res.end(user);

})
const hostname = 'localhost';
const port = 3000

app.listen(port, hostname, function () {
    console.log(`The ${hostname} server listening port ${port}`)
});