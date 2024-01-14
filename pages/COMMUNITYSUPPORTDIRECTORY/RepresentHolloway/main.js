var id = '1oMYFV6_H0zxxFOi5fflaVpqdKcdISluxAu1jw8YTk1w';
var sheet_name = 'Sheet1';
var key = "AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ"
var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + id + '/values/' + sheet_name + '?alt=json&key=' + key;

function processData(rows) {
  var headers = rows[0];
  var content = document.getElementById('content');
  rows.shift();

  function displayContent(row) {
    if (document.getElementById("categoryDropdown").value === "" || row[14].toLowerCase().includes(document.getElementById("categoryDropdown").value.toLowerCase())) {
      content.innerHTML += "<div class='circleContainer'><small class='circleText'>" + row[0] + "</small></div>"; // circle
      content.innerHTML += "<div class='contentContainer' style='float: left; width: calc(100% - 140px);'><h2><a href='" + row[13] + "' style='color: black; text-decoration: none;'>" + row[5] + "</a></h2><p>" + row[7] + "</p> <img src='" + row[12] + "' style='height: 23px; top: 0px;'> <br><br><br> </div>";
      
      content.innerHTML += "<a href='" + row[13] + "'><img src='" + row[11] + "' style='width: 23%; float: right; vertical-align: top; margin-top: -20vh; object-fit: cover; height: 100px; width: 100px;'></a>";
      content.innerHTML += '<div id="bottomSubPoint"><a href="about.html" target="_blank"><button id="bot_grouplink" class="btn btn-primary buttonMain">@'+row[5]+'</button></a></div>'//sub
      content.innerHTML += "<br><br>";
    }
  }

  function handleSearch() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    content.innerHTML = ""; // Clear previous content

    rows.forEach(row => {
      if (row[14].toLowerCase().includes(searchInput)) {
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
              console.log(row[14]);
                if (row[14].toLowerCase().includes(selectedCategory.toLowerCase())) {
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
