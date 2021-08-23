'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4 ,5);

// const obj = {
//     a: 20,
//     b: 15,
//     summ: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.summ();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`hello ${this.name}`);
//     };
// }

// const ivan = new User('Ivan', 28);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);

// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(4));




// 1) Обычная функция: this = window, но если стоит use strict - undefined
// 2) Контектст у методов объекта - сам объект
// 3) this в конструктерах класса - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind


const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();


// const double = a  => a * 2;

// console.log(double(4));