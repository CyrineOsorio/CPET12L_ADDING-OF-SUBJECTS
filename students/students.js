// ------------------------------------------------------------------------------------------------------------
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

//displaying student details when student signing in or creating
var a = localStorage.getItem("value1");
var b = localStorage.getItem("value2");
var c = localStorage.getItem("value3");
var d = localStorage.getItem("value4");

document.getElementById("studentnumber1").innerHTML = a;
document.getElementById("fullname1").innerHTML = b;
document.getElementById("section1").innerHTML = c;
document.getElementById("status1").innerHTML = d;

//print sa console ng student details
console.log(a);
console.log(b);
console.log(c);
console.log(d);