const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/user", (req,res)=>{

console.log('you reached the backend')
console.log(req.body.name)

let resArrayObject = {
    name : req.body.name
}

res.send(resArrayObject)

})

app.listen(5000)