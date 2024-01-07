var id = '1oMYFV6_H0zxxFOi5fflaVpqdKcdISluxAu1jw8YTk1w';
var sheet_name = 'Sheet1';
var key = "AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ"
var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + id + '/values/' + sheet_name + '?alt=json&key=' + key;


function processData(rows) {
  var headers = rows[0];
  var content = document.getElementById('content');
  rows.shift();
  // console.log(headers, rows);

  rows.forEach(row => {
    console.log(row[4]);

    //content.innerHTML += "<small class='circleText'>" + row[0] + "</small>";

    content.innerHTML += "<div class='circleContainer'><small class='circleText'>" + row[0] + "</small></div>"; // circle
    content.innerHTML += "<div class='contentContainer' style='float: left; width: calc(100% - 140px);'><h2><a href='" + row[13] + "' style='color: black; text-decoration: none;'>" + row[5] + "</a></h2><p>" + row[7] + "</p> <img src='" + row[12] + "' style='width: 50px; height: 50px; top: -100px;'> <br><br><br> </div>";
    
    // logo image under the description
content.innerHTML += ""; // Adjust width and height as needed


content.innerHTML += "<a href='" + row[13] + "'><img src='" + row[11] + "' style='width: 23%; float: right; vertical-align: top; margin-top: -20vh; object-fit: cover; height: 100px; width: 100px;'></a>";

    content.innerHTML += "<br><br>"
    //content.innerHTML += "<p>" + "Community/Group: " + row[8] + "</p>";
    //content.innerHTML += "<p>" + "Location: " + row[7] + "</p>";
    //content.innerHTML += "<p>" + "Timing: " + row[9] + "</p>";
    // content.innerHTML += "<hr>";
    
  });

}


fetch(url)
  .then(response => response.json())
  .then(data => processData(data.values));

