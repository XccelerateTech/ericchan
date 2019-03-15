
function multiplyNumber(number) {

    if (number <= 0 || isNaN(number) === true) {
        return "ERROR";
    } else if (number >= 1000000) {
        return number;
    } else {
        while (number <= 1000000) {
            number *= 10
        }
        return number
    }
}




console.log(multiplyNumber('Hello'))
console.log(multiplyNumber(10))
console.log(multiplyNumber(66))