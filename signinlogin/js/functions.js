// CREATE ACCOUNT

var accounts = [
    ['Admin', 'TUPC', 'TUPC-ADMIN-1234', 'admin@gmail.com', 'admin12345'],
    ['PIC', 'TUPC', 'TUPC-PIC-1234', 'pic@gmail.com', 'pic12345'],
    ["REJAY", "MORADA", "TUPC-19-0764", "email1@gmail.com", "password1"],
    ["CYRINE", "OSORIO", "TUPC-19-0001", "email2@gmail.com", "password2"],
    ["ASPHER", "HINACAY", "TUPC-19-0002", "email3@gmail.com", "password3"],
    ["JAIRUS", "SAMBAJON", "TUPC-19-0003", "email4@gmail.com", "password4"],
    ["RAY", "VEGA", "TUPC-19-0004", "email5@gmail.com", "password5"]
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

                studnum = accounts[i][2];
                fullname = accounts[i][0] + ' ' + accounts[i][1];
                //section = accounts[i][2];
                outputText = studnum;
                // student details to transfer data in student page
                localStorage.setItem("value1", studnum);
                localStorage.setItem("value2", fullname);
                window.location.href = '../students/index.html';


                // window.location.href = '../students/index.html'
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

//source = https://pretagteam.com/question/how-can-i-pass-data-from-one-html-page-to-another-using-javascript
var a = localStorage.getItem("value1");
var b = localStorage.getItem("value2");

document.getElementById("studentnumber1").innerHTML = a;
document.getElementById("fullname1").innerHTML = b;
//document.getElementById("demo").innerHTML = "Paragraph changed!";