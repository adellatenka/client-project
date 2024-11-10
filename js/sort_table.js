// function for sorting athlete results table
function sortTable() {
    const sortSelector = document.getElementById('sort-select');
    sortSelector.addEventListener('change', function () {
        // get selected sort filter from dropdown
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

        // loop while table is not fully sorted
        while (sorting) {
            sorting = false;
            var rows = table.rows;

            for (i = 1; i < (rows.length - 1); ++i) {
                // get two table elements
                var rowA = rows[i].getElementsByTagName("td")[index];
                var rowB = rows[i + 1].getElementsByTagName("td")[index];

                // compare elements
                if (text) {
                    if (rowA.innerText.toLowerCase() > rowB.innerText.toLowerCase()) {
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        sorting = true;
                        break;
                    }
                }
                else {
                    if (parseInt(rowA.innerText) > parseInt(rowB.innerText)) {
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        sorting = true;
                        break;
                    }
                }

            }
        }
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    // run sorting listener after all content has loaded
    sortTable();
});
