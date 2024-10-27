function sortTable() {
    const sortSelector = document.getElementById('sort-select');
    sortSelector.addEventListener('change', function () {
        const sortMethod = this.value;

        var index = -1;
        var text = true;

        if (sortMethod === "alpha") {
            index = 0;
        }
        else if (sortMethod === "time") {
            index = 1;
        }

        else if (sortMethod === "place") {
            index = 2;
            text = false;
        }

        var table = document.getElementById("athlete-table");
        var sorting = true;

        while (sorting) {
            sorting = false;
            var rows = table.rows;

            for (i = 1; i < (rows.length - 1); ++i) {
                var rowA = rows[i].getElementsByTagName("td")[index];
                var rowB = rows[i + 1].getElementsByTagName("td")[index];

                if (text) {
                    if (rowA.innerText.toLowerCase() > rowB.innerText.toLowerCase()) {
                        console.log(rowA.innerText.toLowerCase(), rowB.innerText.toLowerCase())
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        sorting = true;
                        break;
                    }
                }
                else {
                    if (parseInt(rowA.innerText) > parseInt(rowB.innerText)) {
                        console.log(rowA.innerText.toLowerCase(), rowB.innerText.toLowerCase())
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        sorting = true;
                        break;
                    }
                }

            }
        }
    });
}

function sortAlpha() {
    var table = document.getElementById("athlete-table");
    var sorting = true;

    while (sorting) {
        sorting = false;
        var rows = table.rows;

        for (i = 1; i < (rows.length - 1); ++i) {
            var rowA = rows[i].getElementsByTagName("td")[0];
            var rowB = rows[i + 1].getElementsByTagName("td")[0];

            if (rowA.innerText.toLowerCase() > rowB.innerText.toLowerCase()) {
                console.log(rowA.innerText.toLowerCase(), rowB.innerText.toLowerCase())
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                sorting = true;
                break;
            }
        }
    }
}

function collapse() {
    var section = document.getElementsByClassName("comment");

    for (i = 0; i < (section.length - 1); ++i) {
        if (section[i].style.display === "") {
            section[i].style.display = "none";
        } else {
            section[i].style.display = "";
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    sortTable();
});