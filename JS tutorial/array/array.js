// https://learn.javascript.ru/array#skopirovan-li-massiv
// let fruits = ["Яблоки", "Груша", "Апельсин"];

// let shoppingCart = fruits;

// shoppingCart.push("Банан");

// alert(fruits.length); // 4

// https://learn.javascript.ru/array#operatsii-s-massivami
/**
 * Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
 *
 */

// let styles = [];
// styles.push('Джаз');
// styles.push('Блюз');
// styles.push('Рок-н-ролл');
// // styles.unshift("Яблоки", "Груша", "Апельсин");
// styles.unshift('Рэп', 'Регги');



// console.log(styles);
// console.log(styles[Math.floor((styles.length - 1) / 2)]);
// console.log(styles.shift());

// https://learn.javascript.ru/array#vyzov-v-kontekste-massiva

// let arr = ["a", "b"];

// arr.push(function () {
//     alert(this);
// });

// arr[2](); // ?

// https://learn.javascript.ru/array#summa-vvedyonnyh-chisel

// function sumInput() {

//     let arr = []
//     while (true) {

//         let newElem = prompt('Enter number', 0);
//         if (newElem === '' || !isFinite(newElem) || newElem === null) break;
//         arr.push(+newElem);
//     }
//     let summ = 0;
//     for (let elem of arr) {
//         summ += elem
//     }
//     return summ;
// }

// alert(sumInput());

// https://learn.javascript.ru/array#podmassiv-naibolshey-summy

function summArr(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {

        let SumSmallAr = 0;
        for (let j = i; j < arr.length; j++) {

            SumSmallAr += arr[j];
            maxSum = Math.max(maxSum, SumSmallAr);
        }
    }
    return maxSum;
}

alert(summArr([-1, 2, 3, -9]))
