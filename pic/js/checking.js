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