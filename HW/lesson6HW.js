console.log('Task 1');

function multiplyTable() {
    let body = document.querySelector('body')
    let table = document.createElement('table');
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const col = document.createElement('td');
            let sum = i * j;
            if (sum === 0) {
                sum = i || j;
                sum = sum ? sum : '0';
            }
            col.innerHTML = sum;
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    console.log(body);
    body.appendChild(table);
}

console.log(multiplyTable());

////////////////////////////////

console.log('Task 2');

let anyArr = [1, 1, 2, 2, 3];

function getUnique(arr){
        let result = [];
        for (let number of arr){
                if (!result.includes(number)){
                    result.push(number)
                }
        }
        return result;
    }


console.log(getUnique(anyArr));

//////////////////////////////////////////////

console.log('Task 3');

function counter(){
    let y = null;
    function neCounter(x) {
        y = y ? x + y : x;
        return y;
    }
    return neCounter;
}
let count = counter();


console.log(count(3));
console.log(count(5));
console.log(count(228));

///////////////////////////////////

console.log('Task 4');

// class Calculator {
//     constructor(){
//         this.firstNumber = '';
//         this.secondNumber = '';
//         this.sign = '';
//         this.result = 0;
//     }
//     read(){
//         this.firstNumber = prompt('Введите первое число');
//         this.secondNumber = prompt('Введите второе число число');
//     }
//     setAction(){
//         while (true){
//             this.sign = prompt('Введите действие');
//             if ((this.sign  === '+') || (this.sign === '-') || (this.sign === '*') || (this.sign === '/')){
//                 break;
//             }
//             alert('Используйте только +, -, * или /');
//         }
//     }
//     doAction(){
//         if (this.sign === '+'){
//             this.result = Number(this.firstNumber) + Number(this.secondNumber);
//         }
//         if (this.sign === '-'){
//             this.result = Number(this.firstNumber) - Number(this.secondNumber);
//         }
//         if (this.sign === '*'){
//             this.result = Number(this.firstNumber) * Number(this.secondNumber);
//         }
//         if (this.sign === '/'){
//             this.result = Number(this.firstNumber) / Number(this.secondNumber);
//         }
//
//         return isNaN(this.result) ? alert('Нужно вводить цифры') : this.result;
//     }
// }

// const calculator = new Calculator();
// calculator.read();
// calculator.setAction();
// const result = calculator.doAction();
//
// console.log(result);
