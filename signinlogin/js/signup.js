// CREATE ACCOUNT

var students = [{}]
var signupbttn = document.getElementById('signup');

signupbttn.onclick = function() {
    window.location.href = '../students/index.html';
    var fname = document.getElementById('firstname').value;
    var sname = document.getElementById('surname').value;
    var studentnum = document.getElementById('studentno1').value;
    var section = document.getElementById('section1').value;
    var email = document.getElementById('email1').value;
    var pass1 = document.getElementById('password1').value;
    var pass2 = document.getElementById('confirmpassword').value;
    var fname = document.getElementById('firstname').value;
    var sname = document.getElementById('surname').value;


    students.push({
        email: email,
        password: pass1,
        studentno: studentnum,
        yearandsec: section,
        givenname: fname,
        surname: sname
    });

    window.location.href = '../students/index.html';
}