console.log('Task 1');

function numbersToSquare(a){
    let result = 0;
    for (let i = 1; i <= a; i++){
        let squares = i ** 2;
        result += squares;
    }
    return console.log(result);
}

numbersToSquare(4);

/////////////////////////////////////
