// let str = 'some';
// let srtObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(srtObj));
// console.log(str);
// console.log(srtObj);

// console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 200,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);




john.sayHello();

