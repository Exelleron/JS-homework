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
// function hello2(name) {
//     console.log(`Hello, ${name || "anonymous"}`);
// }

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

////////////////////////////////////

function chess(square = 8) {
    let black = '#';
    let white = '!';
    let cheese = '';
    for (let i = 0; i < square; i++) {
        for (let j = 0; j < square; j++) {
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

///////////////////////////////////////

console.log('Task 6');

function cubesCalculate(count) {
    let result = [];

    for (let i = 1; i <= count; i++) {
        result.push(Math.pow(i, 3));
    }
    return result;
}

console.log(cubesCalculate(6));

////////////////////////////////

console.log('Task 7');

function onlyNumbArr(array) {
    return array.filter(function (arrayElement) {
        return typeof arrayElement === 'number';
    })
}
console.log(onlyNumbArr([1, 'hello', 2, 3, 4, '5', '6', 7, null]));

////////////////////////////////

console.log('Task 8');

function multiply(a, b) {
    let multiplyTable = [null];
    for (let i = 1; i <= 10; i++) {
        let multiplyResult = [null];
        for (let j = 1; j <= 10; j++) {
            multiplyResult.push(i * j)
        }
        multiplyTable.push(multiplyResult);
    }

    return multiplyTable[a][b]
}

console.log(multiply(5,6));
