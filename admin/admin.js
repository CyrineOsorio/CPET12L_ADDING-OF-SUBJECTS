// ------------------------------------------------------------------------------------------------------------
// ADMIN JAVASCRIPT!!!!!!!!!!!!!

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


//print coetsubjects in console
console.log(coetsubjects)



// funtions for displaying of list in table
//reference: https://stackoverflow.com/questions/15164655/generate-html-table-from-2d-javascript-array
function createTable(tableData) {
    var table = document.getElementById('allsubtable');
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

createTable(coetsubjects);





//reference: https://www.rgagnon.com/jsdetails/js-0018.html
//reference: https://stackoverflow.com/questions/19689103/displaying-2d-array-onto-a-table-javascript

function submitFunction(j) {

    var subcode = document.forms["listofsubs"]['validationTooltip01'].value;
    var subname = document.forms["listofsubs"]['validationTooltip02'].value;
    var yearandsem = document.forms["listofsubs"]['validationTooltip04'].value;

    outputText = "";

    //conditions for remove subject
    if (j == 1) {
        for (var i = 0, len = coetsubjects.length; i < len; i++) {
            if (coetsubjects[i][0] === subcode) {
                coetsubjects.splice(i, 1);
                // funtions for displaying and refreshing of list in table
                document.getElementById("allsubtable").innerHTML = "";
                createTable(coetsubjects);
                outputText = "Successfully deleted the subject";
                break; // need this break to prevent multiple results of the same array
            }
        }
        // conditions or handling errors
        if (subcode == "") {
            outputText = "Type the subject code, please."
        } else if (outputText == "") {
            outputText = "Subject didn't exist";
        }
        // output the result
        window.alert(outputText);
    }


    //conditions for add subject
    if (j == 2) {
        if ((subcode == "") || (subname == "") || (yearandsem == "")) {
            window.alert("Complete the form plesase");
        } else {
            for (var i = 0, len = coetsubjects.length; i < len; i++) {
                if (coetsubjects[i][0] === subcode) {
                    outputText = "Subject already exist";
                    break; // need this break to prevent multiple results of the same array
                }
            }
            // conditions or handling errors
            if (outputText == "") {
                coetsubjects.push([subcode, subname, yearandsem])
                    // funtions for displaying and refreshing of list in table
                document.getElementById("allsubtable").innerHTML = "";
                createTable(coetsubjects);
                outputText = "Successfully Added";
            }
            // output the result
            window.alert(outputText);
        }
    }
}

function myFunction() {
    let text = " "
    for (var i = 0, len = coetsubjects.length; i < len; i++) {
        a = coetsubjects[i][0]
        b = coetsubjects[i][1]
        text += a + " " + b
    }
    window.alert(text)

}

myFunction();

//----------------OFFERED SUBJECTS--------------

// function para sa table sa loob ni offered subjects
// get lahat ng laman loob ni edit na pop up at magdisplay sa offered na div


function getAllSubjects() {
    //kuhain yung sa checklist na mga nacheck
    var mgaCheckedSubject = document.getElementsByName('sub');
    //listahan yan, dito mapupunta yung mga nacheck
    var listahan1 = [];

    //for every items na nandun sa subject checklist
    for (var checkbox of mgaCheckedSubject) {

        //kapag nacheck yung isang checkbox
        if (checkbox.checked) {
            //ipupush or idadagdag sa listahan1
            listahan1.push(checkbox.value);
            //lahat ng nasa listahan1 ay gagawin list sa html yung <li> 
            listahanOffered.innerHTML = listahan1.map(i => `<li>${i}</li>`).join('');
        }

    }
}

//slice natin yung coetsubjects na list para iset natin sila as value nung mga checkboxes.
// dapat nag iterate yung id at yung for sa label para pag hinover sila yung macclick