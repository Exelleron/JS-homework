console.log('Task 2');

console.log(typeof 9);
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});
console.log(typeof 'string');
console.log(typeof 11n);
console.log(typeof true);
console.log(typeof Symbol('ip'));

/////////////////////////////////////////

console.log('Task 3');

let name = prompt('Введите имя', '');

if(name) {
    alert(`Привет, ${name}`);
    console.log(`Привет, ${name}`);
} else {
    alert('Ошибка, имя не указано');
    console.log('Ошибка, не тот тип данных');
}

/////////////////////////////////////////

console.log('Task 4');

console.log((name) ? `Привет, ${name}` : 'Ошибка, не тот тип данных');

/////////////////////////////////////////

console.log('Task 5');

let n = 7;
let fDayOff;

switch (n) {
    case 1:
        fDayOff = false;
        break;
    case 2:
        fDayOff = false;
        break;
    case 3:
        fDayOff = false;
        break;
    case 4:
        fDayOff = false;
        break;
    case 5:
        fDayOff = false;
        break;
    case 6:
        fDayOff = true;
        break;
    case 7:
        fDayOff = true;
        break;
}

console.log(fDayOff);
