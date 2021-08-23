const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'asdfsad', 2134);


function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);