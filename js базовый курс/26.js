console.log(typeof(String(null)));
console.log(typeof(String(4)));


console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fintSize = 26 + 'px';

// To number

console.log(typeof(Number('4')));

console.log(typeof(+'5'));

console.log(typeof(parseInt('15px', 10)));

// let answer = +prompt('Hello', '');

// To boolean

// false - 0, '', null, undefined, NaN;

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

console.log(typeof(Boolean('4')));

console.log(typeof(!!'4444'));

