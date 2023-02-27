function User(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
}

let user = new User('Anna A.', true);

alert(user.name); // Jack
alert(user.isAdmin); // 