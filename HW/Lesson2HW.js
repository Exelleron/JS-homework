console.log('Task 1');

let string = 'Вася;Петя;Вова;Олег';
let splitString = string.split(';');

console.log(splitString);

//////////////////////////////////////////

console.log('Task 2');

function hello2(name) {
    if (name) {
        console.log(`Hello, ${name}`);
    } else {
        console.log('Hello, anonymous');
    }
}

hello2('Vasiliy');

////////////////////////////////////////

console.log('Task 3');

function addOneForAll(...args) {
    return args.map(function(num) {
        return num + 1;
    })
}

let val = addOneForAll(0, 2, 6, 99);
console.log(val);

//////////////////////////////////////

console.log('Task 4');

let result = 0;

for (;;) {
    result++;
    if (Math.random() > 0.9) {
        break;
    }
}
console.log(result);


console.log('Task 5');

function chess(square = 8) {
    let black = '#';
    let white = '!';
    let cheese = '';
    for (let i = 0; i < square; i++) { //Линия 1.
        for (let j = 0; j < square; j++) { //Клетка .1
            if (i % 2 !== 0) {
                if (j % 2 === 0) {
                    cheese += black;
                } else {
                    cheese += white;
                }
            }
            if (i % 2 === 0) {
                if (j % 2 !== 0) {
                    cheese += black;
                } else {
                    cheese += white;
                }
            }
        }
        cheese += '\n';
    }
    return cheese;
}

console.log(chess());

console.log('Task 6');

function cubesCalculate(count) {
    let result = [];

    for (let i = 1; i <= count; i++) {
        result.push(Math.pow(i, 3));
    }
    return result;
}

console.log(cubesCalculate(6));

console.log('Task7');

function onlyNumbArr(array) {
    return array.filter(function (arrayElement) {
        return typeof arrayElement === 'number';
    })
}
console.log(onlyNumbArr([1, 'hello', 2, 3, 4, '5', '6', 7, null]));
