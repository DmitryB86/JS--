// function ucFirst(text) {
//     if (!text) return text;
//     return text[0].toUpperCase() + text.slice(1);
// }

// alert(ucFirst("вася"));

// function checkSpam(text) {
//     //'viagra' или 'XXX'
//     return text.toLowerCase().includes('viagra') || text.toLowerCase().includes('xxx');

// }

// alert(checkSpam('buy ViARA now'));

// function truncate(str, maxlength) {
//     if (str.length < maxlength) {
//         return str;
//     } else {
//         return str.slice(0, maxlength - 1) + '…'; //+ '.'.repeat(str.length - maxlength);
//     }

// }

// let text = 'Вот, что мне хотелось бы сказать на эту тему:';
// alert(truncate(text, 20));

function extractCurrencyValue(text) {
    return Number(text.slice(1));
}

alert(extractCurrencyValue('$120') === 120);