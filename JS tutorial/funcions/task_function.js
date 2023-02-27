// function checkAge(age) {
//     (age > 18) ? true : confirm('Родители разрешили?');
// }

// age = prompt('How old are you?');
// checkAge(age);

// function checkAge(age) {
//     (age > 18) || confirm('Родители разрешили?');
// }

// age = prompt('How old are you?');
// checkAge(age);

// function min(a, b) {
//     return (a < b) ? a : b

// }
// alert(min(10, 5))

function pow(x, n) {
    if (n >= 1) {
        return x ** n
    }
}
let x = prompt('x?')
let n = prompt('n?')
// if (n < 1) {
//     alert('Must be more than 1');
// } else {
//     alert(pow(x, n))
// }
let res = (n < 1) ? alert('Must be more than 1') : alert(pow(x, n));