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

    } else if (content.classList.contains('TCR')) {
        // row=rows[2]
        var row = rows[3];
        console.log("Class is TCR. Value assigned to rows[3].");

    } else if (content.classList.contains('RESEACHDATABASE')) {
        // row=rows[2]
        var row = rows[4];
        console.log("Class is CSD. Value assigned to rows[4].");

    } else if (content.classList.contains('KR')) {
        // row=rows[2]
        var row = rows[5];
        console.log("Class is KR. Value assigned to rows[5].");

    } else if (content.classList.contains('DOC2')) {
        // row=rows[2]
        var row = rows[6];
        console.log("Class is DOC2. Value assigned to rows[6].");

    } else if (content.classList.contains('MEMO')) {
        // row=rows[2]
        var row = rows[7];
        console.log("Class is MEMO. Value assigned to rows[7].");

    } else if (content.classList.contains('Photography')) {
        // row=rows[2]
        var row = rows[8];
        console.log("Class is CSD. Value assigned to rows[8].");

    } else if (content.classList.contains('UV2')) {
        // row=rows[2]
        var row = rows[13];
        console.log("Class is UV2. Value assigned to rows[13].");

    } else   {
        var row = rows[0];
        console.log(row);
    }


    

    content.innerHTML += "<h2>" + row[1] + "</h2>";//title
    content.innerHTML += "<h4>" + row[4] + "</h4>";//yr
    content.innerHTML += "<h3>" + row[2] + "</h3>";//sub
    content.innerHTML += "<h4>" + row[3] + "</h3>";//media
    content.innerHTML += "<p>" + row[5] + "</p>";//p
    if (row[6].trim() !== '') {
        content.innerHTML += `<div class="picofmyworkandcaption"><img src="${row[6]}" alt="Work 0" class="thismyworkpic"><p class="imagecaption">${row[7]}</p></div>`;
    }
    content.innerHTML += "<p>" + row[8] + "</p>";//p
    content.innerHTML += `<a href="`+row[9]+`">`+row[10]+`</a>`



    //THE RELATED FOOTER
    var content2 = document.getElementById('relatedWorkContentTitle');
    console.log("relatedWorkContentTitle");
    content2.innerHTML += "<p>RELATED WORK HERE</p>";


}




//this gets the data from the google sheet
fetch(url)
    .then(response => response.json())
    .then(data => processData(data.values))


