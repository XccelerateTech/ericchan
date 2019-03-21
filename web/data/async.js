/*var http = new XMLHttpRequest();

http.open('GET', '/data/file.json');

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(http.responseText);
    } else {
        console.log('error occurred' + http.status);
    }
}
// onreadystatechange should be before http.send()
http.send();
*/

// window.onload = function() {
//fire up when the window loads//

// var http = new XMLHttpRequest();
// //two method based on the http variable//
// /*1. open method
// -set up the request forwards tells JS 
// where we want to get the data from the type of request
// we want to make and whether we want it to asynchronous or synchronous*/
// http.open("GET", "./tweets.json", true);

// //GET = The type of request//
// //path folder: data    = PASS through the URL to the data we want to retrieve//
// //3. boolean tell whether we want it synchronous or asy(true)//
// // The request has been set up above//

// http.onreadystatechange = function () {
//     // console.log(http);
//     if (http.readyState != XMLHttpRequest.DONE) {
//         return;
//     } else if (http.status == 200  && http.readyState==4) {
//         //make a stat change, it should be 4 steps//


//         console.log(JSON.parse(http.response));
//     } else {
//         console.log('error occurred' + http.status);

//     }
//     //check the readystate is full ,4=complete//
//     //status code . 200 =normal//
//     // . response has stored the json's content//
//     // jason.parse makes it an object (from json)//

// }

// http.send();
//told JS to go out and grab the data//



// };



var http = new XMLHttpRequest();

http.open("GET", "./tweets.json")
// target the file you want to get the location to grab your data, in real world it will be your url// 

//handle error and success//
http.onreadystatechange = function () { 
    if (http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if (http.status == 200) {
        (console.log(JSON.parse(http.responseText))) //get data into console//
    } else {
        console.log('error occurred' + http.status); //tell user there is and error//

    }
}

http.send();
console.log('starting request')



//basic template of html request//

/*1. request (get the data from server via json) 
open all the files js json html in server file
.sudo npm
npm install.. /http-server

follow the js flow*/