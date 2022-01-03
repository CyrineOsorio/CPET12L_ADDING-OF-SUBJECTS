// CREATE ACCOUNT
//Given Name, Last Name, School ID, Course Year and Section, Email, Password, Status
var accounts = [
    ["REJAY", "MORADA", "TUPC-19-0764", 'BET-COET-S-3B', "email1@gmail.com", "password1", "Processing"],
    ["CYRINE", "OSORIO", "TUPC-19-0001", 'BET-COET-S-3B', "email2@gmail.com", "password2", "Processing"],
    ["ASPHER", "HINACAY", "TUPC-19-0002", 'BET-COET-S-3B', "email3@gmail.com", "password3", "Processing"],
    ["JAIRUS", "SAMBAJON", "TUPC-19-0003", 'BET-COET-S-3B', "email4@gmail.com", "password4", "Processing"],
    ["RAY", "VEGA", "TUPC-19-0004", 'BET-COET-S-3B', "email5@gmail.com", "password5", "Processing"]
];

//print accounts in console
console.log(accounts)
localStorage.setItem("value7", accounts);


// search the email in array
//why email? because email is the primary key :)
function signUp() {

    var fname = document.forms["signup_form"]['firstname'].value;
    var sname = document.forms["signup_form"]['surname'].value;
    var studentnum = document.forms["signup_form"]['studentno1'].value;
    var section = document.forms["signup_form"]['section0'].value;
    var email = document.forms["signup_form"]["email1"].value;
    var pass1 = document.forms["signup_form"]['password1'].value;
    var pass2 = document.forms["signup_form"]['confirmpassword'].value;

    outputText = "";

    // search each cell for the query string
    for (var i = 0; i < accounts.length; i++) {
        for (var j = 0; j < accounts[i].length; j++) {
            if (accounts[i][j].search(email) != -1) {
                outputText += accounts[i];
                //printing sa console
                console.log(accounts);
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
        accounts.push([fname, sname, studentnum, section, email, pass1, 'Processing'])

        for (var i = 0, len = accounts.length; i < len; i++) {
            if ((accounts[i][4] === email) && (accounts[i][5] === pass1)) {

                studnum = accounts[i][2];
                fullname = accounts[i][0] + ' ' + accounts[i][1];
                section = accounts[i][3];
                stats = accounts[i][6];
                email = accounts[i][4]

                // student details to transfer data in student page
                localStorage.setItem("value1", studnum);
                localStorage.setItem("value2", fullname);
                localStorage.setItem("value3", section);
                localStorage.setItem("value4", stats);
                localStorage.setItem("value5", email);
                window.location.href = '../students/index.html';
                console.log(accounts);
                break; // need this break to prevent multiple results of the same array
            }
        }

    }

    // output the result
    window.alert(outputText);
    console.log(accounts);
}


// ------------------------------------------------------------------------------------------------------------
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
            if ((accounts[i][4] === email) && (accounts[i][5] === pass)) {

                studnum = accounts[i][2];
                fullname = accounts[i][0] + ' ' + accounts[i][1];
                section = accounts[i][3];
                stats = accounts[i][6];
                email = accounts[i][4]
                outputText = "Sign in successfully";
                //print sa console
                console.log(studnum);
                console.log(fullname);
                console.log(section);
                // student details to transfer data in student page
                localStorage.setItem("value1", studnum);
                localStorage.setItem("value2", fullname);
                localStorage.setItem("value3", section);
                localStorage.setItem("value4", stats);
                localStorage.setItem("value5", email);
                window.location.href = '../students/index.html';
                console.log(accounts);
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