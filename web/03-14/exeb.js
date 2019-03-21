
/*
var http = new XMLHttpRequest();

http.open('GET', '');

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(http.responseText);
    } else {
        console.log('error occurred' + http.status);
    }
}

http.send();
*/

/*
function informMe(endpoint, value, callback){
    http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`);

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(http.responseText);
        var data = http.responseText
        callback(data);

    } else {
        console.log('error occurred' + http.status);
    }
}
}

informMe(country, china, function(date){
    console.log(JSON.parse(data))
}
);

*/



function informMe(endpoint, value,callback){
    var http= new XMLHttpRequest();

    http.open('GET',`https://restcountries.eu/rest/v2/${endpoint}/${value}`)

    http.onreadystatechange = function() {

    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status==200) {
        // console.log(http.responseText);
        var data =(http.responseText)
        callback(data)

        
    } else {
        console.log('error occurred' + http.status);
    }
}
http.send();

    }
    


informMe('capital','tallinn',function(data) {

    let demo = document.getElementById('demo')
    // demo.innerHTML = `${data}`
const thisData = JSON.parse(data)
    demo.innerHTML = `${thisData[0].name}`
    demo.innerHTML = `${thisData[0].population}`
    console.log(thisData)


}
)


//when callback, you can use different things afterwards, eg., console.log , alert....//
