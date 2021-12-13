var students = [{
    email: 'user1@gmail.com',
    password: 'pass1',
    studentno: 'TUPC-19-0001',
    yearandsec: 'BET-COET-3B',
    givenname: 'Rejay',
    surname: 'Morada'
}, {
    email: 'user2@gmail.com',
    password: 'pass2',
    studentno: 'TUPC-19-0002',
    yearandsec: 'BET-COET-3B',
    givenname: 'Cyrine',
    surname: 'Osorio'
}, {
    email: 'user3@gmail.com',
    password: 'pass3',
    studentno: 'TUPC-19-0003',
    yearandsec: 'BET-COET-3B',
    givenname: 'Aspher',
    surname: 'Hinacay'
}];




// LOGIN
var loginbttn = document.getElementById('login');

loginbttn.onclick = function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    for (var i = 0; i < students.length; i++) {
        if (email == students[i].email && password == students[i].password) {
            window.location.href = '../students/index.html';
            break;
        } else {
            alert('You are trying to break in!');
        }
    }
}