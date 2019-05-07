var pg = require('pg');
var SQLStatement = require('./notesWordsSQLStatement')
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


function getData() {
    return new Promise(function (resolve, reject) {
        client.query(SQLStatement.getnoteWordsSQL, function (err, results) {
            if (err) {
                console.log(err);
            }

            resolve(results.rows);
        })
    })
}

function postData(array){
    return new Promise(function (resolve, reject) {
        client.query(SQLStatement.postnoteWordsSQL,array, function (err, results) {
            if (err) {
                console.log(err);
            }
            resolve(results.rows);
        })
    })
}

function putData(array){
    return new Promise(function (resolve, reject) {
        client.query(SQLStatement.putnoteWordsSQL,array, function (err, results) {
            if (err) {
                console.log(err);
            }
            resolve(results.rows);
        })
    })
}

function deleteData(array){
    return new Promise(function (resolve, reject) {
        client.query(SQLStatement.deletenoteWordsSQL,array, function (err, results) {
            if (err) {
                console.log(err);
            }
            resolve(results.rows);
        })
    })
}

module.exports.getData = getData;
module.exports.postData = postData;
module.exports.putData = putData;
module.exports.deleteData = deleteData;