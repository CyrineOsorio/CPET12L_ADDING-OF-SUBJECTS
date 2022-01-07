// displaying the students detail list in pic page
//Given Name, Last Name, School ID, Course Year and Section, Email, Password, Status
var accounts = [
    ["REJAY", "MORADA", "TUPC-19-0764", 'BET-COET-S-3B', "email1@gmail.com", "password1", "Processing"],
    ["CYRINE", "OSORIO", "TUPC-19-0001", 'BET-COET-S-3B', "email2@gmail.com", "password2", "Processing"],
    ["ASPHER", "HINACAY", "TUPC-19-0002", 'BET-COET-S-3B', "email3@gmail.com", "password3", "Processing"],
    ["JAIRUS", "SAMBAJON", "TUPC-19-0003", 'BET-COET-S-3B', "email4@gmail.com", "password4", "Processing"],
    ["RAY", "VEGA", "TUPC-19-0004", 'BET-COET-S-3B', "email5@gmail.com", "password5", "Processing"]
]

localStorage.setItem("accounts", accounts);

function displayTable() {

    var table = document.getElementById('picstudenttable');
    var len = accounts.length;
    let x = ''
    for (let i = 0; i < len; i++) {

        //add row
        var row = table.insertRow();
        //add cells
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = accounts[i][4];
        cell2.innerHTML = accounts[i][2];
        cell3.innerHTML = accounts[i][0] + " " + accounts[i][1];
        cell4.innerHTML = accounts[i][6];

        //add onclick
        document.getElementsByTagName("tr")[i + 1].setAttribute("onclick", "rowGetter(this)");

    }

}

displayTable()


function getDataFromCurrentCell(e) {

    var currow = (e.target.parentNode.innerText); //Current row.
    // whole cell;
    // var postTitle = event.target.parentNode.parentNode.childNodes[1].textContent;
    var firstcell = e.target.parentNode.childNodes[0].textContent;
    var secondcell = e.target.parentNode.childNodes[1].textContent;
    var thirdcell = e.target.parentNode.childNodes[2].textContent;
    var fourthcell = e.target.parentNode.childNodes[3].textContent;

    alert(firstcell)
    alert(secondcell)
    alert(thirdcell)
    alert(fourthcell)

    // set student details from student cell to transfet on checking page
    localStorage.setItem("firstcell", firstcell);
    localStorage.setItem("secondcell", secondcell);
    localStorage.setItem("thirdcell", thirdcell);
    localStorage.setItem("fourthcell", fourthcell);


    document.location = 'checking.html'

}