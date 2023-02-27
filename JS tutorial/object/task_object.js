// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;
//   }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key]
// }
// if (sum != 0) {
//     alert(sum);
// } else {
//     alert(0)
// }

// до вызова функции
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};