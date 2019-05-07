const express = require('express')
const app = express();
const hb = require('express-handlebars')
const homeRouter = require('./routers/homeRouter.js')
const profileRouter = require('./routers/profileRouter.js')
const communityRouter = require('./routers/communityRouter.js')
const administrationRouter = require('./routers/administrationRouter.js')

app.use(express.static('public'));
app.engine('handlebars',hb({ defaultLayout:'index'}));
app.set('view engine', 'handlebars');


// app.get('/', (req,res)=>{
//     res.render('./partials/render')
// })

app.use('/home', homeRouter)
app.use('/profile', profileRouter)
app.use('/community', communityRouter)
app.use('/administration', administrationRouter)


// app.get('/', ())

app.listen(3000);