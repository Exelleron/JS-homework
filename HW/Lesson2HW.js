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

// console.log('Task 3');
//
// function addOneForAll(...args) {
//     args.map(function (num) {
//         return num++;
//     })
// }
//
// let val = addOneForAll(1, 2, 3, 4);
//
// console.log(val);
// console.log(addOneForAll(1,2,3,4));
