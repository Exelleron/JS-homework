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
