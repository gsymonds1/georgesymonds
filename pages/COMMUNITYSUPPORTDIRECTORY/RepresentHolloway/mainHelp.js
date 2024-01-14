var id = '1oMYFV6_H0zxxFOi5fflaVpqdKcdISluxAu1jw8YTk1w';
var sheet_name = 'Sheet2';
var key = "AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ"
var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + id + '/values/' + sheet_name + '?alt=json&key=' + key;

function processData(rows) {
    var headers = rows[0];
    var content = document.getElementById('content');
    rows.shift();

    function displayContent(row) {
        // Add this line to check if the selected category is present in row[12]
        if (document.getElementById("categoryDropdown").value === "" || row[12].toLowerCase().includes(document.getElementById("categoryDropdown").value.toLowerCase())) {
            content.innerHTML += "<div class='circleContainer'><small class='circleText'>" + row[0] + "</small></div>"; //circle nu
            content.innerHTML += "<div class='contentContainer' style='float: left; width: calc(100% - 140px);'><h2><a href='" + row[11] + "' style='color: black; text-decoration: none;'>" + row[5] + "</a></h2><p>" + row[7] + "</p> <img src='" + row[10] + "' style=' height: 23px; top: -100px;'> <br><br><br> </div>"; //title. desc.
            content.innerHTML += "<img src='" + row[9] + "' style='width: 23%; float: right; vertical-align: top; margin-top: -20vh; object-fit: cover; height: 100px; width: 100px;'> "; //side pic
            content.innerHTML += '<div id="bottomSubPoint"><a href="about.html" target="_blank"><button id="bot_grouplink" class="btn btn-primary buttonMain">@' + row[5] + '</button></a></div>' //sub
            content.innerHTML += "<br><br>";
        }
    }

    function handleSearch() {
        var searchInput = document.getElementById('searchInput').value.toLowerCase();
        content.innerHTML = ""; // Clear previous content

        rows.forEach(row => {
            if (row[12].toLowerCase().includes(searchInput)) {
                displayContent(row);
            }
        });
    }



    document.getElementById('searchInput').addEventListener('input', handleSearch);

    document.getElementById('categoryDropdown').addEventListener('change', function () {
        handleCategoryFilter(this);
    });

    function handleCategoryFilter(select) {
        var selectedCategory = select.value;
        if (selectedCategory !== "") {
            // Clear previous content
            content.innerHTML = "";
            rows.forEach(row => {
                if (row[12].toLowerCase().includes(selectedCategory.toLowerCase())) {
                    displayContent(row);
                }
            });
        } else {
            // If no category selected, display all rows
            content.innerHTML = "";
            rows.forEach(row => {
                displayContent(row);
            });
        }
    }

    rows.forEach(row => {
        displayContent(row);
    });
}

fetch(url)
    .then(response => response.json())
    .then(data => processData(data.values));
