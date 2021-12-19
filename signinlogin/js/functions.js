// CREATE ACCOUNT

var accounts = [
    ['Admin', 'TUPC', 'TUPC-ADMIN-1234', 'admin@gmail.com', 'admin12345'],
    ['PIC', 'TUPC', 'TUPC-PIC-1234', 'pic@gmail.com', 'pic12345'],
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
    for (var i = 0; i < accounts.length; i++) {
        for (var j = 0; j < accounts[i].length; j++) {
            if (accounts[i][j].search(email) != -1) {
                outputText += accounts[i];
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
        accounts.push([fname, sname, studentnum, email, pass1])
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
    // source = https://stackoverflow.com/questions/8809425/search-multi-dimensional-array-javascript
    if (email == 'admin@gmail.com' && pass == 'admin12345') {
        window.location.href = '../admin/index.html'
    } else if (email == 'pic@gmail.com' && pass == 'pic12345') {
        window.location.href = '../pic/index.html'
    } else {
        for (var i = 0, len = accounts.length; i < len; i++) {
            if ((accounts[i][3] === email) && (accounts[i][4] === pass)) {
                outputText = "Login Success";
                window.location.href = '../students/index.html'
                break; // need this break to prevent multiple results of the same array
            }
        }
        // conditions or handling errors
        if (outputText == "") {
            outputText = "Account didn't exist";
        }
        // output the result
        window.alert(outputText);
    }
}

// STUDENT PAGE

function openpage() {
    var x = document.getElementById("section");
    if (window.innerWidth > 1000) {
        x.style.display = "grid";
    }
}

function details_hide_show() {
    var x = document.getElementById("section");
    if (x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
}