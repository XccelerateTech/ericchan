function whoIsInSpace(){
    var http= new XMLHttpRequest();

    http.open('GET',`http://api.open-notify.org/astros.json`)

    http.onreadystatechange = function() {

    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status==200) {
        console.log(http.responseText);
        var data= JSON.parse(http.responseText)
        console.log(data)
        console.log(data.people)
       

        const emptyArray= [];
        const answer = data.people.map(function(x) {
            console.log(x.name)
            emptyArray.push(x.name)
        })

           console.log(emptyArray);
         


        

        
    } else {
        console.log('error occurred' + http.status);
    }
}
http.send();

    }
    whoIsInSpace()
    
    
    
