const myFunc = method => console.log(`JavaScript ${method} works`);

// myFunc будет вызвана через 5 секунд
setTimeout(myFunc, 1000, 'setTimeout()');
console.log('line5');
let intervalId = setInterval(myFunc, 1000, 'setInterval()');
console.log('line7');
setTimeout(() => clearInterval(intervalId), 6000);
