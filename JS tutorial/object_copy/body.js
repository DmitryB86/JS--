let user = {
    nameUser: 'John',
    size: {
        hight: 182,
        weight: 90

    }
}

alert(user.size.weight)

let clone = Object.assign({}, user)

clone.nameUser = clone.nameUser + ' Adamson'
alert(clone.nameUser)