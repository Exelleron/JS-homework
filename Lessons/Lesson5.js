const valObject0 = {
    a: 1,
    b: 2,
    c: { 		a: 1,  	b: 2 },
    d: {  			a: 10,  		b: { a: 20, b: 20}   }

};

let sum = 0;

function func(parm) {
    for (const key in parm) {
        if(typeof parm[key] == 'object'){
            func(parm[key])
        }
        if(parm[key] > 0 ){
            sum += parm[key]
        }
    }
    return sum;
}
console.log(func(valObject0));

/////////////////////

