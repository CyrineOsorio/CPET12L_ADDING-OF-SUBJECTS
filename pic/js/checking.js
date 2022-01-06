function openpage() {
    var x = document.getElementById("offered");
    if (window.innerWidth > 1000) {
        x.style.display = "grid";
    }
}

function details_hide_show() {
    var x = document.getElementById("offered");
    if (x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }

}

// Reference: https://stackoverflow.com/questions/32383547/javascript-search-for-element-in-multidimensional-array


// student grades
var students_grade = [
    //FIRST YEAR - FIRST AND SECOND SEMESTER

    ['BET1-C', 'Orientation to BET, Seminars and Field Trips', 'FIRST YEAR - FIRST SEMESTER', 1.5],
    ['CHEMGEN-C', 'General Chemistry (Lec)', 'FIRST YEAR - FIRST SEMESTER', 5.0],
    ['CHEMGENL-C', 'General Chemistry (Lab)', 'FIRST YEAR - FIRST SEMESTER', 1.5],
    ['CPET 1L-C', 'Program Logic and Formulation (Lab)', 'FIRST YEAR - FIRST SEMESTER', 1.5],
    ['ET1-C', 'Electrical Circuits (Lec)', 'FIRST YEAR - SECOND SEMESTER', 1.5],
    ['ET1L-C', 'Electrical Circuits (Lab)', 'FIRST YEAR - SECOND SEMESTER', 1.5],
    ['GEC1-C', 'Understanding the Self', 'FIRST YEAR - SECOND SEMESTER', 1.5],
    ['GEC4-C', 'Mathematics in the Modern World 1', 'FIRST YEAR - SECOND SEMESTER', 1.5],

    //SECOND YEAR - FIRST AND SECOND SEMESTER
    ['MATHA05-C', 'Pre-Calculus', 'SECOND YEAR - FIRST SEMESTER', 1.5],
    ['NSTP1-C', 'National Service Training Program 1', 'SECOND YEAR - FIRST SEMESTER', 5.0],
    ['PE1-C', 'Physical Fitness', 'SECOND YEAR - FIRST SEMESTER', 1.5],
    ['CAD-C', 'Computer Aided Drafting', 'SECOND YEAR - FIRST SEMESTER', 1.5],
    ['CHET-C', 'Chemistry for Engineering Technologists', 'SECOND YEAR - SECOND SEMESTER', 1.5],
    ['CHETL-C', 'Chemistry for Engineering Technologists(Lab)', 'SECOND YEAR - SECOND SEMESTER', 1.5],
    ['CPET2L-C', 'Object Oriented Programming 2(Lab)', 'SECOND YEAR - SECOND SEMESTER', 1.5],
    ['EST1-C', 'Electronics 1(Lec)', 'SECOND YEAR - SECOND SEMESTER', 5.0],

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

    var table = document.getElementById('allsub');
    var len = students_grade.length;
    let x = ''
    for (let i = 0; i < len; i++) {
        // x += students_grade[i][1];

        //add row
        var row = table.insertRow();
        //add cells
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = students_grade[i][0];
        cell2.innerHTML = students_grade[i][1];
        cell3.innerHTML = students_grade[i][2];
        cell4.innerHTML = students_grade[i][3];
        cell5.innerHTML = students_grade[i][4];

        //add onclick
        document.getElementsByTagName("tr")[i + 1].setAttribute("onclick", "rowGetter(this)");

    }

}

displayTable();



function addremarks() {
    var subcode = document.forms["addremarksform"]['validationTooltip01'].value;
    var remark = document.forms["addremarksform"]['validationTooltip02'].value;

    var outputText = ""

    //find the subject code and update the remark element
    for (var i = 0, len = students_grade.length; i < len; i++) {
        w = students_grade[i][0]
        x = students_grade[i][1]
        y = students_grade[i][2]
        z = students_grade[i][3]
        if (w == subcode) {
            //update the matrix
            students_grade[i] = [w, x, y, z, remark]

            outputText = "Successfully Update the Remark"
        }
    }
    if (outputText == "") {
        outputText = "Subject Code Not Existing"
    }
    //refresh table
    document.getElementById("allsub").innerHTML = "";
    displayTable()
    window.alert(outputText)
}




function submitToAdmin() {
    alert('hello')
}