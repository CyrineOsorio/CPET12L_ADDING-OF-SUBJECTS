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

var firstyearfirstsem = [
    //FIRST YEAR - FIRST  SEMESTER
    ['BET1-C', 'Orientation to BET, Seminars and Field Trips','',''],
    ['CHEMGEN-C', ' General Chemistry (Lec)','',''],
    ['CHEMGENL-C', ' General Chemistry (Lab)','',''],
    ['CPET 1L-C', ' Program Logic and Formulation (Lab)','','']
]

var firstyearsecondsem = [
    //FIRST YEAR - SECOND SEMESTER
    ['ET1-C', 'Electrical Circuits (Lec)','',''],
    ['ET1L-C', 'Electrical Circuits (Lab)','',''],
    ['GEC1-C', 'GEC1-C','',''],
    ['GEC4-C', 'Mathematics in the Modern World 1','','']
]

var secondyearfirstsem = [
    //FIRST YEAR - FIRST AND SECOND SEMESTER
    ['MATHA05-C', ' Pre-Calculus','',''],
    ['NSTP1-C', ' National Service Training Program 1','',''],
    ['PE1-C', ' Physical Fitness','',''],
    ['CAD-C', ' Computer Aided Drafting','',''],
]

var secondyearsecondsem = [
   
    ['MATHA05-C', ' Pre-Calculus','',''],
    ['NSTP1-C', ' National Service Training Program 1','',''],
    ['PE1-C', ' Physical Fitness','',''],
    ['CAD-C', ' Computer Aided Drafting','',''],
]

var thirdyearfirstsem = [
    
    ['MATHA05-C', ' Pre-Calculus','',''],
    ['NSTP1-C', ' National Service Training Program 1','',''],
    ['PE1-C', ' Physical Fitness','',''],
    ['CAD-C', ' Computer Aided Drafting','',''],

]

var thirdyearsecondsem = [
    
    ['MATHA05-C', ' Pre-Calculus','',''],
    ['NSTP1-C', ' National Service Training Program 1','',''],
    ['PE1-C', ' Physical Fitness','',''],
    ['CAD-C', ' Computer Aided Drafting','',''],

]

var fourthyearfirstsem = [
    
    ['MATHA05-C', ' Pre-Calculus','',''],
    ['NSTP1-C', ' National Service Training Program 1','',''],
    ['PE1-C', ' Physical Fitness','',''],
    ['CAD-C', ' Computer Aided Drafting','',''],
]

var fourthyearsecondsem = [
    
    ['MATHA05-C', ' Pre-Calculus','',''],
    ['NSTP1-C', ' National Service Training Program 1','',''],
    ['PE1-C', ' Physical Fitness','',''],
    ['CAD-C', ' Computer Aided Drafting','',''],
    
    //SECOND YEAR - FIRST AND SECOND SEMESTER
    //['MATHA05-C', 'Pre-Calculus', 'SECOND YEAR - FIRST SEMESTER'],
    //['NSTP1-C', 'National Service Training Program 1', 'SECOND YEAR - FIRST SEMESTER'],
    //['PE1-C', 'Physical Fitness', 'SECOND YEAR - FIRST SEMESTER'],
   // ['CAD-C', 'Computer Aided Drafting', 'SECOND YEAR - FIRST SEMESTER'],
  //  ['CHET-C', 'Chemistry for Engineering Technologists', 'SECOND YEAR - SECOND SEMESTER'],
    //['CHETL-C', 'Chemistry for Engineering Technologists(Lab)', 'SECOND YEAR - SECOND SEMESTER'],
   // ['CPET2L-C', 'Object Oriented Programming 2(Lab)', 'SECOND YEAR - SECOND SEMESTER'],
   // ['EST1-C', 'Electronics 1(Lec)', 'SECOND YEAR - SECOND SEMESTER']
    //THIRD YEAR - FIRST AND SECOND SEMESTER


    //FOURTH YEAR - FIRST AND SECOND SEMESTER

];
//print coetsubjects in console
//console.log(firstsubjects)


// funtions for displaying of list in table
//reference: https://stackoverflow.com/questions/15164655/generate-html-table-from-2d-javascript-array
function createTable1a(tableData) {
    var table = document.getElementById('1a');
    var row = {};
    var cell = {};

    tableData.forEach(function(rowData) {
        row = table.insertRow(-1); // [-1] for last position in Safari
        rowData.forEach(function(cellData) {
            cell = row.insertCell();
            cell.textContent = cellData;
        });
    });
    //document.body.appendChild(table);
}

createTable1a(firstyearfirstsem);

function createTable1b(tableData) {
    var table = document.getElementById('1b');
    var row = {};
    var cell = {};

    tableData.forEach(function(rowData) {
        row = table.insertRow(-1); // [-1] for last position in Safari
        rowData.forEach(function(cellData) {
            cell = row.insertCell();
            cell.textContent = cellData;
        });
    });
    //document.body.appendChild(table);
}

createTable1b(firstyearsecondsem);

function createTable2a(tableData) {
    var table = document.getElementById('2a');
    var row = {};
    var cell = {};

    tableData.forEach(function(rowData) {
        row = table.insertRow(-1); // [-1] for last position in Safari
        rowData.forEach(function(cellData) {
            cell = row.insertCell();
            cell.textContent = cellData;
        });
    });
    //document.body.appendChild(table);
}

createTable2a(secondyearfirstsem);

function createTable2b(tableData) {
    var table = document.getElementById('2b');
    var row = {};
    var cell = {};

    tableData.forEach(function(rowData) {
        row = table.insertRow(-1); // [-1] for last position in Safari
        rowData.forEach(function(cellData) {
            cell = row.insertCell();
            cell.textContent = cellData;
        });
    });
    //document.body.appendChild(table);
}

createTable2b(secondyearsecondsem);



function createTable3a(tableData) {
    var table = document.getElementById('3a');
    var row = {};
    var cell = {};

    tableData.forEach(function(rowData) {
        row = table.insertRow(-1); // [-1] for last position in Safari
        rowData.forEach(function(cellData) {
            cell = row.insertCell();
            cell.textContent = cellData;
        });
    });
    //document.body.appendChild(table);
}

createTable3a(thirdyearfirstsem);

function createTable3b(tableData) {
    var table = document.getElementById('3b');
    var row = {};
    var cell = {};

    tableData.forEach(function(rowData) {
        row = table.insertRow(-1); // [-1] for last position in Safari
        rowData.forEach(function(cellData) {
            cell = row.insertCell();
            cell.textContent = cellData;
        });
    });
    //document.body.appendChild(table);
}

createTable3b(thirdyearsecondsem);

function createTable4a(tableData) {
    var table = document.getElementById('4a');
    var row = {};
    var cell = {};

    tableData.forEach(function(rowData) {
        row = table.insertRow(-1); // [-1] for last position in Safari
        rowData.forEach(function(cellData) {
            cell = row.insertCell();
            cell.textContent = cellData;
        });
    });
    //document.body.appendChild(table);
}

createTable4a(fourthyearfirstsem);

function createTable4b(tableData) {
    var table = document.getElementById('4b');
    var row = {};
    var cell = {};

    tableData.forEach(function(rowData) {
        row = table.insertRow(-1); // [-1] for last position in Safari
        rowData.forEach(function(cellData) {
            cell = row.insertCell();
            cell.textContent = cellData;
        });
    });
    //document.body.appendChild(table);
}

createTable4b(fourthyearsecondsem);



//adding remakrs

function addremarks() {

    var subjectcode = document.forms["addremarksform"]['validationTooltip01'].value;
    var remarks = document.forms["addremarksform"]['validationTooltip02'].value;

  window.alert(subjectcode)

    //outputText = "";

    // search each cell for the query string
    // source = https://stackoverflow.com/questions/8809425/search-multi-dimensional-array-javascript
   
        
        // conditions or handling errors
        //if (outputText == "") {
        //    outputText = "Bulaga";
       // }
        // output the result
       // window.alert(outputText);
}
