const text = document.getElementById('textarea');
function storage() {

    localStorage.setItem('text', JSON.stringify(text.value));
}
text.value = localStorage.getItem('text');

///////

let arr = [1, 2, 3, 4, 5];
console.log(arr);
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);
