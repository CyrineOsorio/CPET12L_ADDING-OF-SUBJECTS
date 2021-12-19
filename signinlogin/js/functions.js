// CREATE ACCOUNT

var students = [
    ["Rejay", "Morada", "TUPC-19-0764", "email1@gmail.com", "password1"],
    ["Cyrine", "Osorio", "TUPC-19-0001", "email2@gmail.com", "password2"],
    ["Aspher", "Hinacay", "TUPC-19-0002", "email3@gmail.com", "password3"],
    ["Jairus", "Sambajon", "TUPC-19-0003", "email4@gmail.com", "password4"],
    ["Ray", "Vega", "TUPC-19-0004", "email5@gmail.com", "password5"]
];


// search the email in array
//why email? because email is the primary key :(
function signUp() {

    var fname = document.forms["signup_form"]['firstname'].value;
    var sname = document.forms["signup_form"]['surname'].value;
    var studentnum = document.forms["signup_form"]['studentno1'].value;
    //var section = document.forms["signup_form"]['section1'].value;
    var email = document.forms["signup_form"]["email1"].value;
    var pass1 = document.forms["signup_form"]['password1'].value;
    var pass2 = document.forms["signup_form"]['confirmpassword'].value;

    outputText = "";

    // search each cell for the query string
    for (var i = 0; i < students.length; i++) {
        for (var j = 0; j < students[i].length; j++) {
            if (students[i][j].search(email) != -1) {
                outputText += students[i];
                outputText = "Account already exist"
                break; // need this break to prevent multiple results of the same array
            }
        }
    }

    // conditions or handling errors
    if (pass1 != pass2) {
        outputText = "Password didn't match"
    } else if (outputText == "") {
        outputText = "Created Account Successfully"
        students.push([fname, sname, studentnum, email, pass1])
        window.location.href = '../students/index.html';
    }

    // output the result
    window.alert(outputText);
}






// // LOG IN ACCOUNTS

function logIn() {

    var email = document.forms["login_form"]['email'].value;
    var pass = document.forms["login_form"]['password'].value;

    outputText = "";

    // search each cell for the query string
    for (var i = 0; i < students.length; i++) {
        for (var j = 0; j < students[i].length; j++) {
            if ((email == students[i][j]) && (pass == students[i][j])) {
                outputText += students[i];
                window.location.href = '../students/index.html';
                break; // need this break to prevent multiple results of the same array
            }
        }
    }

    // conditions or handling errors
    if (outputText == "") {
        outputText = "Sign In Account Unsuccessfully";
    }

    // output the result
    window.alert(outputText);

}