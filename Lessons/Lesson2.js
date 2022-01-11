let count = 5;

while(true) {
    console.log(count++);
    if(count === 11) {
        break;
    }
}

/////////////////////////////

do {
    console.log('count');
} while(false);

while(true) {
    console.log('second count');
    break;
}

while(false) {
    console.log('second count');
}

///////////////////////////

for(let i = 0; i <= 5; i++) {
    console.log('i:', i);
}

let j = 0;
for (; j<5;) {
    console.log('j:',j);
    if(j === count) {
        break;
    }
    j++;
}

///////////////////////////
// FOR ARRAYS

let arr = [1, 'ge', 2, 3, 555, 4, 5];

for(let i of arr) {
    console.log(i);
}

////////////////////////////
// FOR OBJECTS

let person = {
    firstName: 'Jake',
    lastName: 'Mitchel',
    birthDate: '04.09.2001',
};

for(let p in person) {
    console.log(`Property: ${p}, value: ${person[p]}`)
}

///////////////////////////////

let arr2 = [2, 0, 4, 8];

for (let i of arr2) {
    if (i === 0) {
        continue;
    }
}

//////////////////////////////

let proud = 'The London of Great Britain';

console.log(proud.indexOf('Britain'));

console.log(
    true + false,
    12 / '6',
    'number' + 15 + 3,
    15 + 3 + "number",
    [1] > null ,
    "foo" + + "bar",
    'true' == true,
    false == 'false',
    null == '',
    !!"false" == !!"true",
    ['x'] == 'x',
    [] + null + 1,
    [1,2,3] == [1,2,3]
);

///////////////////////////////////

let result;
function sum(val1, val2) {
    return val1 + val2;
}
console.log(sum(1,2));

console.log(sum(10,35));

console.log(sum('privet','poka'));
