let myFun1 = function (callback){
    console.log(123);
    callback('cde');
}

let myFun2 = function (abc) {
console.log(abc)

}

myFun1(myFun2)
