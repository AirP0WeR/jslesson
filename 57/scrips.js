// filter

// const names = ['Ivan', 'Ann' , 'Ksenia', 'Voldemar'];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLocaleLowerCase());

// console.log(result);

// every/some

// const some = [4, 'dsfsaf', 'sadfsd'];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];
//                     // 0   4
//                     // 4   5
//                     // 9   1
//                     // 10  3

// const res = arr.reduce((sum, curent) => sum + curent);

// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, curent) => sum + curent);

// console.log(res);

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);