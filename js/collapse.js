// function for collapsing race comments column of table
function collapse(event, classname) {
    event.preventDefault();
    var elts = document.getElementsByClassName(classname);

    for (i = 0; i < elts.length; ++i) {
        var currentDisplay = window.getComputedStyle(elts[i]).display;
        if (currentDisplay === "block" || elts[i].classList.contains('shown')) {
            elts[i].classList.remove('shown');
            elts[i].classList.add('hidden');
        } else {
            elts[i].classList.remove('hidden');
            elts[i].classList.add('shown');
        }
    }
}

function resetHidden() {
    var navlinks = document.getElementsByClassName('navlink');
    for (var i = 0; i < navlinks.length; i++) {
        navlinks[i].classList.remove('hidden', 'shown');
    }

    var comments = document.getElementsByClassName('comment');
    if (comments.length > 0) {
        for (var i = 0; i < comments.length; i++) {
            comments[i].classList.remove('hidden', 'shown');
        }
    }
}

// reset if window size is dynamically changed
window.addEventListener('resize', resetHidden);