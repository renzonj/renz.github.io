var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;
}
currencyTwo = convertCurrency(currencyOne, exchangeRate)
console.log(currencyTwo);



function consoleLog(val) {
    console.log(val)
    return val
}
consoleLog('Hello');



function doubleIt(num) {
    return num * 2
}
function objectMaker(val) {
    return {
        prop: val
    }
}
one = doubleIt(10).toString();
two = objectMaker( doubleIt(100) );
console.log(one, two);


console.log("%cHello, World", "color: blue; font-size: 40px");


