function Player(name){
    this.name= name;
    this.health= 100;
    this.attack= function attack(opponent) {opponent.health-= 10;
    };
}

var A = new Player('A');
var B = new Player('B');

/* randomly decide and attack once


var i=Math.floor(Math.random()*2);



if (i==0) {A.att
    ack(B)}
    else if (i==1) {B.attack(A)};


console.log(A.health)
console.log(B.health)*/


while(A.health > 0 && B.health >0 )
{

    var i=Math.floor(Math.random()*2);

    if (i==0) {A.attack(B)
    } else { B.attack(A);}    
}

console.log(A.health)
console.log(B.health)

if (A.health > 0) {console.log('A is the winner')}
else {console.log('B is the winner')}
