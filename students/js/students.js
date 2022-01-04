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

//foreign key is email
var e = localStorage.getItem("value5");


document.getElementById("studentnumber1").innerHTML = a;
document.getElementById("fullname1").innerHTML = b;
document.getElementById("section1").innerHTML = c;
document.getElementById("status1").innerHTML = d;

//print sa console ng student details
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

var students_grade = []

//All Subjects
var coetsubjects = [

    //FIRST YEAR - FIRST AND SECOND SEMESTER
    ['BET1-C', 'Orientation to BET, Seminars and Field Trips', 'FIRST YEAR - FIRST SEMESTER'],
    ['CHEMGEN-C', 'General Chemistry (Lec)', 'FIRST YEAR - FIRST SEMESTER'],
    ['CHEMGENL-C', 'General Chemistry (Lab)', 'FIRST YEAR - FIRST SEMESTER'],
    ['CPET 1L-C', 'Program Logic and Formulation (Lab)', 'FIRST YEAR - FIRST SEMESTER'],
    ['ET1-C', 'Electrical Circuits (Lec)', 'FIRST YEAR - SECOND SEMESTER'],
    ['ET1L-C', 'Electrical Circuits (Lab)', 'FIRST YEAR - SECOND SEMESTER'],
    ['GEC1-C', 'Understanding the Self', 'FIRST YEAR - SECOND SEMESTER'],
    ['GEC4-C', 'Mathematics in the Modern World 1', 'FIRST YEAR - SECOND SEMESTER'],

    //SECOND YEAR - FIRST AND SECOND SEMESTER
    ['MATHA05-C', 'Pre-Calculus', 'SECOND YEAR - FIRST SEMESTER'],
    ['NSTP1-C', 'National Service Training Program 1', 'SECOND YEAR - FIRST SEMESTER'],
    ['PE1-C', 'Physical Fitness', 'SECOND YEAR - FIRST SEMESTER'],
    ['CAD-C', 'Computer Aided Drafting', 'SECOND YEAR - FIRST SEMESTER'],
    ['CHET-C', 'Chemistry for Engineering Technologists', 'SECOND YEAR - SECOND SEMESTER'],
    ['CHETL-C', 'Chemistry for Engineering Technologists(Lab)', 'SECOND YEAR - SECOND SEMESTER'],
    ['CPET2L-C', 'Object Oriented Programming 2(Lab)', 'SECOND YEAR - SECOND SEMESTER'],
    ['EST1-C', 'Electronics 1(Lec)', 'SECOND YEAR - SECOND SEMESTER'],

    //THIRD YEAR - FIRST AND SECOND SEMESTER
    ['EST1L-C', 'Electronics 1 Lab', 'THIRD YEAR - FIRST SEMESTER'],
    ['GEC2-C', 'Readings in Philippine History', 'THIRD YEAR - SECOND SEMESTER'],
    ['GEC5-C', 'Purposive Communication', 'THIRD YEAR - FIRST SEMESTER'],
    ['GEC7-C', 'Science, Technology, and Society', 'THIRD YEAR - SECOND SEMESTER'],
    ['MATHA13-C', 'Differential Calculus', 'THIRD YEAR - FIRST SEMESTER'],
    ['NSTP2-C', 'National Service Training Program 2', 'THIRD YEAR - SECOND SEMESTER'],
    ['PE2-C', 'Rhythmic Activities', 'THIRD YEAR - FIRST SEMESTER'],
    ['CPET3-C', 'Logic Circuits and Switching Theory Lec.', 'THIRD YEAR - SECOND SEMESTER'],

    //FOURTH YEAR - FIRST AND SECOND SEMESTER
    ['CPET3L-C', 'Logic Circuits and Switching Theory Lab.', 'FOURTH YEAR - FIRST SEMESTER'],
    ['CPET4-C', 'Data and Digital Communcations', 'FOURTH YEAR - SECOND SEMESTER'],
    ['CPET5L-C', 'Data Structures and Algorithms Lab.', 'FOURTH YEAR - FIRST SEMESTER'],
    ['CPET6L-C', 'Introduction to Hardware Description Language', 'FOURTH YEAR - SECOND SEMESTER'],
    ['GEC8-C', 'Ethics', 'FOURTH YEAR - FIRST SEMESTER'],
    ['GEM14-C', 'Life and Works of Rizal', 'FOURTH YEAR - SECOND SEMESTER'],
    ['MATHA23-C', 'Integral Calculus', 'FOURTH YEAR - FIRST SEMESTER'],
    ['PE3-C', 'Individual and Dual Sports', 'FOURTH YEAR - SECOND SEMESTER']


]


function displayTable() {

    var table = document.getElementById('fyfs1');
    var len = coetsubjects.length;
    for (let i = 0; i < len; i++) {

        //add row
        var row = table.insertRow();
        //add cells
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = coetsubjects[i][0];
        cell2.innerHTML = coetsubjects[i][1];
        cell3.innerHTML = '';

        //add onclick
        document.getElementsByTagName("tr")[i + 1].setAttribute("onclick", "rowGetter(this)");

    }
}

displayTable();


function addGrades() {
    var subcode = document.forms["add_grades"]['validationTooltip01'].value;
    var grade = document.forms["add_grades"]['validationTooltip02'].value;


    //find the subject code and update the grade element
    for (var i = 0, len = coetsubjects.length; i < len; i++) {
        x = coetsubjects[i][0]
        y = coetsubjects[i][1]
        z = coetsubjects[i][2]
        if (x == subcode) {
            //update the matrix
            coetsubjects[i] = [x, y, z, grade]


            //refresh table
            document.getElementById("fyfs1").innerHTML = "";

            var table = document.getElementById('fyfs1');
            var len = coetsubjects.length;
            for (let i = 0; i < len; i++) {

                //add row
                var row = table.insertRow();
                //add cells
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);

                cell1.innerHTML = coetsubjects[i][0];
                cell2.innerHTML = coetsubjects[i][1];
                cell3.innerHTML = coetsubjects[i][3];;

                //add onclick
                document.getElementsByTagName("tr")[i + 1].setAttribute("onclick", "rowGetter(this)");

            }
        }
    }
}