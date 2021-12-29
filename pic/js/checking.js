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

var firstsubjects = [
    //FIRST YEAR - FIRST  SEMESTER
    ['BET1-C', 'Orientation to BET, Seminars and Field Trips','',''],
    ['CHEMGEN-C', ' General Chemistry (Lec)','',''],
    ['CHEMGENL-C', ' General Chemistry (Lab)','',''],
    ['CPET 1L-C', ' Program Logic and Formulation (Lab)','','']
]

var first2subjects = [
    //FIRST YEAR - SECOND SEMESTER
    ['ET1-C', 'Electrical Circuits (Lec)','',''],
    ['ET1L-C', 'Electrical Circuits (Lab)','',''],
    ['GEC1-C', 'GEC1-C','',''],
    ['GEC4-C', 'Mathematics in the Modern World 1','','']
]

var secondsubjects = [
    //FIRST YEAR - FIRST AND SECOND SEMESTER
    ['MATHA05-C', ' Pre-Calculus','',''],
    ['NSTP1-C', ' National Service Training Program 1','',''],
    ['PE1-C', ' Physical Fitness','',''],
    ['CAD-C', ' Computer Aided Drafting','',''],
]

var thirdsubjects = [
    
    ['MATHA05-C', ' Pre-Calculus','',''],
    ['NSTP1-C', ' National Service Training Program 1','',''],
    ['PE1-C', ' Physical Fitness','',''],
    ['CAD-C', ' Computer Aided Drafting','',''],

]

var fourthsubjects = [
    
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
function createTable(tableData) {
    var table = document.getElementById('1stsubjects');
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

createTable(firstsubjects);

function createTableb(tableData) {
    var table = document.getElementById('1st2subjects');
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

createTableb(first2subjects);

function createTable1(tableData) {
    var table = document.getElementById('2ndsubjects');
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

createTable1(secondsubjects);

function createTable2(tableData) {
    var table = document.getElementById('3rdsubjects');
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

createTable2(thirdsubjects);

function createTable3(tableData) {
    var table = document.getElementById('4thsubjects');
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

createTable3(fourthsubjects);



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
