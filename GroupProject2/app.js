const express = require('express')
const app = express();
const hb = require('express-handlebars')
const homeRouter = require('./routers/homeRouter.js')
const profileRouter = require('./routers/profileRouter.js')
const communityRouter = require('./routers/communityRouter.js')
const administrationRouter = require('./routers/administrationRouter.js')
const basicAuth = require('basic-auth')
const bodyParser = require('body-parser');
var pg = require('pg');
const path = require('path');


app.use(express.static(path.join('public')));
app.use(bodyParser.urlencoded({ extended: false }))
// app.engine('handlebars', exphbs({defaultLayout: 'index' }));
app.engine('handlebars', hb({defaultLayout:'index'}));
app.set('view engine', 'handlebars');
app.set("views", "./views")
// app.set('view engine', exphbs);

var config = {
    user: 'wah',
    database: 'social_media',
    password: 'postgres', //whatever your password is, the default is postgres or password, try both
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);
client.connect();

const auth = function (req, res, next) {
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
    else {
        client.query('SELECT * FROM users', function (err, result) {
            if (err) {
                res.send(401, 'unauthorized');
            }
            else {

                let list = result.rows;
                console.log(list);
                for (let i = 0; i < list.length; i++) {
                    if (list[i].username == userInput.name && list[i].password == userInput.pass) {

                        req.user = list[i]
                        console.log('check 1');
                        return next();
                    }
                }
            }
        })
    }
}

app.use(auth)

app.get('/', async (req,res)=>{
    // console.log(req.user)
    let user = await JSON.stringify(req.user.id);  //user = {"id":1,"username":"eric","password":"12345","full_name":null,"email":null,"gender":null,"date_of_birth":null,"created_at":null}// //we will use req.user in the later handler//
    console.log('req.user'+ user );
    // console.log(user.id)
    res.end(user);

})

app.use('/home', homeRouter)
app.use('/profile', profileRouter)
app.use('/community', communityRouter)
app.use('/administration', administrationRouter)




app.listen(3000);