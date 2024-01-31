var id = '1ioWsWWhAhvDNPCSVsR5340V_8OPOIMsk1sp6KwdSGqs';
var sheet_name = 'Sheet1';
var key = "AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ"
var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + id + '/values/' + sheet_name + '?alt=json&key=' + key;



function processData(rows) {

    var headers = rows[0];
    var content = document.getElementById('workContent');
    var startingRow = 0; // Specify the line number from which you want to start reading content

    if (content.classList.contains('1EARTH')) {
        // row=rows[1]
        var row = rows[1];
        console.log("Class is 1EARTH. Value assigned to rows[1].");
    
    } else if (content.classList.contains('CSD')) {
        // row=rows[2]
        var row = rows[2];
        console.log("Class is CSD. Value assigned to rows[2].");

    } else if (content.classList.contains('Photography')) {
        // row=rows[2]
        var row = rows[8];
        console.log("Class is CSD. Value assigned to rows[8].");

    } else   {
        var row = rows[0];
        console.log(row);
    }




    content.innerHTML += "<h2>" + row[1] + "</h2>";//title
    content.innerHTML += "<h4>" + row[4] + "</h4>";//yr
    content.innerHTML += "<h3>" + row[2] + "</h3>";//sub
    content.innerHTML += "<h4>" + row[3] + "</h3>";//media
    content.innerHTML += "<p>" + row[5] + "</p>";//p
    content.innerHTML += `<div class="picofmyworkandcaption"><img src="`+ row[6]+`" alt="Work 0"class="thismyworkpic"><p class="imagecaption">`+row[7]+`</p></div>`
    content.innerHTML += "<p>" + row[8] + "</p>";//p
    content.innerHTML += `<a href="`+row[9]+`">`+row[10]+`</a>`
}




//this gets the data from the google sheet
fetch(url)
    .then(response => response.json())
    .then(data => processData(data.values));


