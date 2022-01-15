console.log('Task 1');

function numbersToSquare(a){
    let result = 0;
    for (let i = 1; i <= a; i++){
        result += i ** 2;
    }
    return result;
}

console.log(numbersToSquare(4));

/////////////////////////////////////

console.log('Task 2');

function avg2(a, b) {
    return (a + b) / 2;
}

console.log(avg2(5, 10));

//////////////////////////////////

console.log('Task 3');

let array = [[1,6,3,'6'], [10,15,13,'10']];

function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            const item = arr[i][j];
            if ((item % 2 === 0) && (typeof item === 'number')){
                sum += item;
            }
        }
    }
    return sum;
}
console.log(arraySum(array));

//////////////////////////////////////

console.log('Task 4');

let object = {};

function newElementToObject(key, value, obj) {
    if (obj[key] === undefined) {
        obj[key] = value;
    } else {
        console.log('Already exists');
    }
    return obj;
}
console.log(newElementToObject('name', 'Yarik', object));
console.log(newElementToObject('name', 'Pasha', object));

//////////////////////////////////////

// console.log('Task 5');
//
// let infinityConfirm = () => {
//     if (confirm('Click OK') === false){
//         while (true){
//             confirm('Click OK');
//         }
//     }
// };
//
// console.log(infinityConfirm());

//////////////////////////////////

console.log('Task 6');

let randomArr = [-2, 5, 3, 2, -6, '2', 3];

function sumOfArr(arg) {
    let sum = 0;
        for (let i = 0; i < arg.length; i++){
            if (typeof arg[i] === 'number'){
                sum += arg[i];
            }
        }
    return sum;
}
console.log(sumOfArr(randomArr));

randomArr.sort(function (a, b) {
    if (a < b){
        return 1;
    }
    if (a > b){
        return -1;
    }
    return 0;
});

console.log(randomArr);

function positiveArr(arg) {
    return arg > 0;
}

console.log(randomArr.filter(positiveArr));

function arrPlusTen(arg) {
    for (let i = 0; i < arg.length; i++){
        if (typeof arg[i] === 'number'){
            arg[i] += 10;
        }
    }
    return arg;
}

console.log(arrPlusTen(randomArr),'arrPlusTen');
