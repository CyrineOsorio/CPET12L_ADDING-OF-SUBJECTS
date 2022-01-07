var coetsubjects = [
    ['BET1-C', 'Orientation to BET, Seminars and Field Trips', 'FIRST YEAR - FIRST SEMESTER'],
    ['CHEMGEN-C', 'General Chemistry (Lec)', 'FIRST YEAR - FIRST SEMESTER'],
    ['CHEMGENL-C', 'General Chemistry (Lab)', 'FIRST YEAR - FIRST SEMESTER'],
    ['EST1L-C', 'Electronics 1 Lab', 'THIRD YEAR - FIRST SEMESTER'],
    ['GEC2-C', 'Readings in Philippine History', 'THIRD YEAR - SECOND SEMESTER']
]

function myFunction() {
    let subjects = '';
    let ids = '';
    for (var i = 0, len = coetsubjects.length; i < len; i++) {
        a = coetsubjects[i][0];
        b = coetsubjects[i][1];
        subjects = a + "-" + b;
        ids = "s" + i;
        $('#modalBody')
            .append(`<input type="checkbox" style="width: 15%" id="${ids}" name="sub" value="${subjects}">`)
            .append(`<label for="${ids}" style="width: 80%">${subjects}</label></div>`)
    }
}
myFunction()

$(".approveone").click(function() {
    $(".studenttag").css("display", "none");
});