"use strict"
//common handler
const path = require('path')
const fs = require('fs');
const bodyParser = require('body-parser');


let read

fs.readFile(path.join(__dirname, '..', 'assets/database/json.json'), (err, data) => {
    if (err) throw err;
    else read = JSON.parse(data);
});

const getNotesWordsFunc = function (req, res, next) {
    const readStream = fs.createReadStream(path.join(__dirname, '..', 'assets/database/json.json'))
    readStream.pipe(res)
    console.log('getNotesWordsFunc')
}

const getNotesWordsIdFunc = function (req, res, next) {
    console.log('getNotesWordsIdFunc');
    console.log(req.originalUrl)
    let existingData = read.user
    console.log(existingData);//array
    console.log(req.params.id)//1
    res.send(existingData[req.params.id]);

}

const postNotesWordsFunc = function (req, res, next) {
    res.send('received');
    let existingData = read.user
    let postedData = req.body.data
    existingData.push(postedData);

    console.log(existingData);

    let postedObj = { "user": existingData };
    console.log(postedObj)

    let json = JSON.stringify(postedObj)
    fs.writeFile(path.join(__dirname, '..', 'assets/database/json.json'), json, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

const putNoteWordsIdFunc = function (req, res, next) {
    let existingData = read.user;
    existingData.splice(req.params.id, 1, req.body.name);
    let postedObj = { "user": existingData };
    console.log(postedObj)
    let json = JSON.stringify(postedObj)
    fs.writeFile(path.join(__dirname, '..', 'assets/database/json.json'), json, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    res.send('The item has been updated');
}

const deleteNoteWordsIdFunc = function (req, res, next) {
     console.log('deleteNoteWordsIdFunc')
    let existingData = read.user;
    existingData.splice(req.params.id, 1);
    let postedObj = { "user": existingData };
    console.log(postedObj)
    let json = JSON.stringify(postedObj)
    let pathFile = path.join(__dirname, '..', 'assets/database/json.json');
    console.log(pathFile);
    fs.writeFile(pathFile, json, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    res.send('deleted');
}


const getNotesWordoneuserFunc = function (req, res) {
    console.log(req.body);
    console.log(read);
    let existingData = read.user
    res.send(existingData[req.body.id]);
}

module.exports.getNotesWordsFunc = getNotesWordsFunc;
module.exports.getNotesWordsIdFunc = getNotesWordsIdFunc;
module.exports.postNotesWordsFunc = postNotesWordsFunc;
module.exports.putNoteWordsIdFunc = putNoteWordsIdFunc;
module.exports.deleteNoteWordsIdFunc = deleteNoteWordsIdFunc;
module.exports.getNotesWordoneuserFunc = getNotesWordoneuserFunc;