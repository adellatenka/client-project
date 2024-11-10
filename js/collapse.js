// function for collapsing race comments column of table
function collapse(classname) {
    var elts = document.getElementsByClassName(classname);

    for (i = 0; i < elts.length; ++i) {
        var currentDisplay = window.getComputedStyle(elts[i]).display;
        if (currentDisplay === "block" || elts[i].style.display === "block") {
            elts[i].style.display = "none";
        } else {
            elts[i].style.display = "block";
        }
    }
}