// var pg = require('pg');

// const SQLStatement = require('./notesWordsSQLStatement')

// var config = {
//     user: 'wah',
//     database: 'postgres',
//     password: 'postgres', //whatever your password is, the default is postgres or password, try both
//     host: 'localhost',
//     port: 5432,
//     max: 10, // max number of clients in the pool
//     idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
// }

// var client = new pg.Client(config);

// client.connect();

// function getUser() {
//     return new Promise(function (resolve, reject) {
//         client.query(SQLStatement.getUserSQL, function (err, results) {
//             if (err) {
//                 console.log(err);
//             }

//             resolve(results.rows);
//         })
//     })
// }

// module.exports.getUser= getUser;