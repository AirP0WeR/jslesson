let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('sadfasd');
console.log(num);


// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(1, 4));
// console.log(calc(12, 4));
// console.log(calc(1, 5));

function ret() {
    let num = 50;

    return num;
}

const anothetNum = ret();
console.log(anothetNum);


const logger = function() {
    console.log('hello');
};

logger();

const calc = (a, b) => { 
    return a + b;
};