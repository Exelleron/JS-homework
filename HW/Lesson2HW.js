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


