// alert(null || 2 || undefined)

// alert(alert(1) || 2 || alert(3));

// alert(alert(1) && alert(2))
// alert(null == true);

// let age = prompt('Enter age');
// alert(age >= 14 && age <= 90);

// let age = prompt('Enter age');
// alert(!(age >= 14 && age <= 90));
// alert(age < 14 || age > 90);

// if (-1 || 0) alert('first');
// if (-1 && 0) alert('second');


let logingUser = prompt('Who are you?')
if (logingUser == 'Admin') {
    let pass = prompt('Enter password');
    if (pass == 'Main') {
        alert('Hello BOSS')
    }
    else if (pass == null || pass == '') {
        alert('Cancel')
    }
    else {
        alert('Wrong  pass')
    }
}
else if (logingUser == '' || logingUser == null) {
    alert('Cancel')
}
else {
    alert('I do not know you')
}