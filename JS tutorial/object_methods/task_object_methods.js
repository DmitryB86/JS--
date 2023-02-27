// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }

// let user = makeUser();

// alert(user.ref.name);


// let calculator = {
//     // ... ваш код ...
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     },

//     read() {
//         this.a = +prompt('a?');
//         this.b = +prompt('b?');

//     }

// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
};

