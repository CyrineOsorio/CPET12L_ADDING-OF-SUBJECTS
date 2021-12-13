// CREATE ACCOUNT


var students = [
    ["Rejay", "Morada", "TUPC-19-0764", "email1@gmail.com", "password1"],
    ["Cyrine", "Osorio", "TUPC-19-0001", "email2@gmail.com", "password2"],
    ["Aspher", "Hinacay", "TUPC-19-0002", "email3@gmail.com", "password3"],
    ["Jairus", "Sambajon", "TUPC-19-0003", "email4@gmail.com", "password4"],
    //  ["Ray", "Vega", "TUPC-19-0004", "email5@gmail.com", "password5"]
];


var signupbttn = document.getElementById('signup');

signupbttn.onclick = function() {

    var fname = document.getElementById('firstname').value;
    var sname = document.getElementById('surname').value;
    var studentnum = document.getElementById('studentno1').value;
    //var section = document.getElementById('section1').value;
    var email = document.getElementById('email1').value;
    var pass1 = document.getElementById('password1').value;
    var pass2 = document.getElementById('confirmpassword').value;

    for (var i = 0; i < students.length; i++) {

        var a = students[i][3]
        if (email == a) {
            window.alert("Account is already exists");
            window.alert(students);
            break;
        } else {
            students.push([fname, sname, studentnum, email, pass1]);
            window.alert(students);
        }

    }
}