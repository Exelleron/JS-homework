let arr1 = [1,2,3];
let arr2 = [4,5];

let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr4 = [...arr1, ...arr2];
console.log(arr4);

/////////////////////////////////////

let arr = [3,5,5,121,9,23,93,17];

let arrReduce = arr.reduce(reduceFunc);

function reduceFunc(acc, val){
    return acc + val;
}

console.log(arrReduce);
