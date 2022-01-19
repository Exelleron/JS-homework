console.log('Task 1');

const user = {
    name: 'Yarik',
    birthDate: '1997.01.01',
};

function whenBirthday( value ) {
    console.log(this.birthDate + value, "this.birthDate")
}

function bindFunc(foo, context, ...arg) {
    if(typeof foo === "function"){
        return foo.bind(context);
    }
    return "foo is not a function";
}
bindFunc(whenBirthday, user, 1,2,3,4,5);


/////////////////////////////

console.log('Task 2');

function countKeys() {
    return Object.keys(this).length;
}

console.log(countKeys.call(user));

/////////////////////////////

console.log('Task 3');

const valObject0 = {
    values: [1, '2', 4, 8, '8',  3, 10, null, false],
};

function arrayFromObject() {
    let array = [];
    for (let i = 0; i < this.values.length; i++){
        let elements = this.values[i];
        if ((typeof elements === 'number') && (elements > 2) && (elements < 10) && (elements % 2 === 0)){
            array.push(elements);
        }
    }
    return array;
}

console.log(arrayFromObject.call(valObject0));
