const person = {
    name: 'Alex',
    tel: '+75553334565',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// console.log(JSON.stringify(person));

// const newJs = (JSON.stringify(person));

// console.log(JSON.parse(newJs));


const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = "ann";

console.log(person);
console.log(clone);