"use strict"
//common handler
const path = require('path')
const fs = require('fs');
const bodyParser = require('body-parser');
const SQLQuery = require('./notesWordsSQLQuery')
const SQL = require('./AuthChallenger')


const getNotesWordsFunc = async function (req, res, next) {
    let result = await SQLQuery.getData()
    let user_id = req.user.id
    console.log(user_id)
    console.log(result);
    let array = [];

    var i

    for (i = 0; i < result.length; i++) {

        if (result[i].user_id == user_id) {
            array.push(result[i]);
        }
    }

    console.log(array);


    let renderObject = { renderArrayProperty: array };

    res.render('./partials/get', renderObject)
}


const postNotesWordsFunc = async function (req, res, next) {
    let result = await SQLQuery.getData() //result = array object of the database
    console.log(result);

    let user_id = req.user.id
    console.log(user_id)

    let userArray = [];

    var i

    for (i = 0; i < result.length; i++) {

        if (result[i].user_id == user_id) {
            userArray.push(result[i]);
        }
    }

    console.log(userArray);


    let idNum = result[result.length - 1].id + 1;  //to get the last element plus one for pushing nre rows
    let array = await [idNum, user_id, req.body.data];
    // let array= await[5,1,req.body.data];
    SQLQuery.postData(array);
    console.log(userArray);
    res.redirect('/NotesWords')
}

const putNoteWordsIdFunc = async function (req, res, next) {
    res.send('The item has been updated')

    let gettingAllData = await SQLQuery.getData()

    let user_id = req.user.id
    console.log(user_id)

    let userArray = [];

    var i

    for (i = 0; i < gettingAllData.length; i++) {

        if (gettingAllData[i].user_id == user_id) {
            userArray.push(gettingAllData[i]);
        }
    }

console.log(userArray)

    let gg = userArray[req.params.id].id
    console.log(gg);
    let array = [req.query.name, gg]
    SQLQuery.putData(array);

    let result = await SQLQuery.getData()
    console.log(result);
    

}

const deleteNoteWordsIdFunc = async function (req, res) {
    // console.log('deleteNoteWordsIdFunc')
    // let existingData = read.user;
    // existingData.splice(req.params.id, 1);
    // let postedObj = { "user": existingData };
    // console.log(postedObj)
    // let json = JSON.stringify(postedObj)
    // let pathFile = path.join(__dirname, '..', 'assets/database/json.json');
    // console.log(pathFile);
    // fs.writeFile(pathFile, json, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    // });
    let gettingAllData = await SQLQuery.getData()

    let user_id = req.user.id
    console.log(user_id)

    let userArray = [];

    var i

    for (i = 0; i < gettingAllData.length; i++) {

        if (gettingAllData[i].user_id == user_id) {
            userArray.push(gettingAllData[i]);
        }
    }


    let gg = userArray[req.params.id].id
    let array = [gg]
    SQLQuery.deleteData(array);

    let result = await SQLQuery.getData()
    console.log(result);
    // let result = await SQLQuery.getData()
    // console.log(result);
    // let renderObject = {renderArrayProperty:result};
    // res.render('./partials/get', renderObject)
}




module.exports.getNotesWordsFunc = getNotesWordsFunc;
module.exports.postNotesWordsFunc = postNotesWordsFunc;
module.exports.putNoteWordsIdFunc = putNoteWordsIdFunc;
module.exports.deleteNoteWordsIdFunc = deleteNoteWordsIdFunc;
