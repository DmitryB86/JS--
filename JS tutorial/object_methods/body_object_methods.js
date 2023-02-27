let user = {
    name: 'Victor',
    age: 5,
    eyes: 'blue'
};
let admin = {
    name: 'Boris',
    age: 2,
    eyes: 'brown'
};

function sayHi() {
    alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

console.log(user)