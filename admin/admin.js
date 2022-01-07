// ------------------------------------------------------------------------------------------------------------
// ADMIN JAVASCRIPT!!!!!!!!!!!!!

//All Subjects
var coetsubjects = [

    //FIRST YEAR - FIRST AND SECOND SEMESTER
    ['BET1-C', 'Orientation to BET, Seminars and Field Trips', 'FIRST YEAR - FIRST SEMESTER', 'Offer'],
    ['CHEMGEN-C', 'General Chemistry (Lec)', 'FIRST YEAR - FIRST SEMESTER', 'Not Offer'],
    ['CHEMGENL-C', 'General Chemistry (Lab)', 'FIRST YEAR - FIRST SEMESTER', 'Not Offer'],
    ['CPET 1L-C', 'Program Logic and Formulation (Lab)', 'FIRST YEAR - FIRST SEMESTER', 'Offer'],
    ['ET1-C', 'Electrical Circuits (Lec)', 'FIRST YEAR - SECOND SEMESTER', 'Not Offer'],
    ['ET1L-C', 'Electrical Circuits (Lab)', 'FIRST YEAR - SECOND SEMESTER', 'Not Offer'],
    ['GEC1-C', 'Understanding the Self', 'FIRST YEAR - SECOND SEMESTER', 'Not Offer'],
    ['GEC4-C', 'Mathematics in the Modern World 1', 'FIRST YEAR - SECOND SEMESTER', 'Not Offer'],

    //SECOND YEAR - FIRST AND SECOND SEMESTER
    ['MATHA05-C', 'Pre-Calculus', 'SECOND YEAR - FIRST SEMESTER', 'Not Offer'],
    ['NSTP1-C', 'National Service Training Program 1', 'SECOND YEAR - FIRST SEMESTER', 'Not Offer'],
    ['PE1-C', 'Physical Fitness', 'SECOND YEAR - FIRST SEMESTER', 'Not Offer'],
    ['CAD-C', 'Computer Aided Drafting', 'SECOND YEAR - FIRST SEMESTER', 'Not Offer'],
    ['CHET-C', 'Chemistry for Engineering Technologists', 'SECOND YEAR - SECOND SEMESTER', 'Not Offer'],
    ['CHETL-C', 'Chemistry for Engineering Technologists(Lab)', 'SECOND YEAR - SECOND SEMESTER', 'Not Offer'],
    ['CPET2L-C', 'Object Oriented Programming 2(Lab)', 'SECOND YEAR - SECOND SEMESTER', 'Not Offer'],
    ['EST1-C', 'Electronics 1(Lec)', 'SECOND YEAR - SECOND SEMESTER', 'Not Offer'],

    //THIRD YEAR - FIRST AND SECOND SEMESTER
    ['EST1L-C', 'Electronics 1 Lab', 'THIRD YEAR - FIRST SEMESTER', 'Not Offer'],
    ['GEC2-C', 'Readings in Philippine History', 'THIRD YEAR - SECOND SEMESTER', 'Not Offer'],
    ['GEC5-C', 'Purposive Communication', 'THIRD YEAR - FIRST SEMESTER', 'Not Offer'],
    ['GEC7-C', 'Science, Technology, and Society', 'THIRD YEAR - SECOND SEMESTER', 'Not Offer'],
    ['MATHA13-C', 'Differential Calculus', 'THIRD YEAR - FIRST SEMESTER', 'Not Offer'],
    ['NSTP2-C', 'National Service Training Program 2', 'THIRD YEAR - SECOND SEMESTER', 'Not Offer'],
    ['PE2-C', 'Rhythmic Activities', 'THIRD YEAR - FIRST SEMESTER', 'Not Offer'],
    ['CPET3-C', 'Logic Circuits and Switching Theory Lec.', 'THIRD YEAR - SECOND SEMESTER', 'Not Offer'],

    //FOURTH YEAR - FIRST AND SECOND SEMESTER
    ['CPET3L-C', 'Logic Circuits and Switching Theory Lab.', 'FOURTH YEAR - FIRST SEMESTER', 'Not Offer'],
    ['CPET4-C', 'Data and Digital Communcations', 'FOURTH YEAR - SECOND SEMESTER', 'Not Offer'],
    ['CPET5L-C', 'Data Structures and Algorithms Lab.', 'FOURTH YEAR - FIRST SEMESTER', 'Not Offer'],
    ['CPET6L-C', 'Introduction to Hardware Description Language', 'FOURTH YEAR - SECOND SEMESTER', 'Not Offer'],
    ['GEC8-C', 'Ethics', 'FOURTH YEAR - FIRST SEMESTER', 'Not Offer'],
    ['GEM14-C', 'Life and Works of Rizal', 'FOURTH YEAR - SECOND SEMESTER', 'Not Offer'],
    ['MATHA23-C', 'Integral Calculus', 'FOURTH YEAR - FIRST SEMESTER', 'Not Offer'],
    ['PE3-C', 'Individual and Dual Sports', 'FOURTH YEAR - SECOND SEMESTER', 'Not Offer']

]


//print coetsubjects in console
console.log(coetsubjects)



// funtions for displaying of list in table
//reference: https://stackoverflow.com/questions/15164655/generate-html-table-from-2d-javascript-array


function displayTable() {

    var table = document.getElementById('allsubtable');
    var len = coetsubjects.length;
    for (let i = 0; i < len; i++) {

        //add row
        var row = table.insertRow();
        //add cells
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = coetsubjects[i][0];
        cell2.innerHTML = coetsubjects[i][1];
        cell3.innerHTML = coetsubjects[i][2];
        cell4.innerHTML = coetsubjects[i][3];

        //add onclick
        document.getElementsByTagName("tr")[i + 1].setAttribute("onclick", "rowGetter(this)");

    }
}

displayTable();




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
                displayTable();
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
                outputText = "Successfully Added";
                displayTable();

            }
            // output the result
            window.alert(outputText);
        }
    }
}

function updateOfferStatus() {
    var subcode = document.forms["updateOfferStatusform"]['validationTooltip03'].value;
    var offerstatus = document.forms["updateOfferStatusform"]['validationTooltip04'].value;

    var outputText = ""

    //find the subject code and update the remark element
    for (var i = 0, len = coetsubjects.length; i < len; i++) {
        w = coetsubjects[i][0]
        x = coetsubjects[i][1]
        y = coetsubjects[i][2]
        if (w == subcode) {
            //update the matrix
            coetsubjects[i] = [w, x, y, offerstatus]

            outputText = "Successfully Update the Status"
        }
    }
    if (outputText == "") {
        outputText = "Subject Code Not Existing"
    }
    //refresh table
    document.getElementById("allsubtable").innerHTML = "";
    displayTable()
    window.alert(outputText)
}




//Show Offered Subject

function showOffered() {
    var remarks = "Offer"
    let result = []
    for (var i = 0, len = coetsubjects.length; i < len; i++) {
        x = coetsubjects[i][0];
        y = coetsubjects[i][1];
        z = coetsubjects[i][3];
        if (remarks == z) {
            result_1 = x + " " + y + "\n"
            result.push(result_1)
            console.log(result_1)
            console.log(result)
        }
    }


    modalBody.innerHTML = result.map(i => `<li>${i}</li>`).join('');
}

showOffered()