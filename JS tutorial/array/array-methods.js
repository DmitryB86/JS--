// https://learn.javascript.ru/array-methods#perevedite-tekst-vida-border-left-width-v-borderleftwidth
// function camelize(str) {
//     return str
//         .split('-')
//         .map(
//             (word, ind) => ind == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('');

// }


// console.log(camelize("background-color"));

// https://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu

// function filterRange(ar, a, b) {


//     return arr.filter(item => (a <= item && item <= b));

// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

// https://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu-na-meste

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         if (num < a || num > b) {
//             arr.splice(i, 1)
//         }
//     }
//     return arr
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 6);

// alert(arr);

// https://learn.javascript.ru/array-methods#sortirovat-v-poryadke-po-ubyvaniyu
// let arr = [5, 2, 1, -10, 8, 0, 0, -2, -5, -3];

//
// arr.sort((a, b) => b - a);

// alert(arr);


// https://learn.javascript.ru/array-methods#skopirovat-i-otsortirovat-massiv
// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log(sorted);
// console.log(arr);
// https://learn.javascript.ru/array-methods#sozdat-rasshiryaemyy-kalkulyator
// function Calculator() {

//     this.plusminus = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };

//     this.calculate = function (str) {

//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2]

//         if (!this.plusminus[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.plusminus[op](a, b);
//     }

//     this.addMethod = function (name, func) {
//         this.plusminus[name] = func;
//     };
// }

// https://learn.javascript.ru/array-methods#transformirovat-v-massiv-imyon

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map(item => item.name);

// alert(names)

// https://learn.javascript.ru/array-methods#transformirovat-v-obekty

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

alert(usersMapped[0].id);
alert(usersMapped[0].fullName);