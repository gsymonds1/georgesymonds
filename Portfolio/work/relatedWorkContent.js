var id = '1ioWsWWhAhvDNPCSVsR5340V_8OPOIMsk1sp6KwdSGqs';
var sheet_name = 'Sheet1';
var key = "AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ"
var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + id + '/values/' + sheet_name + '?alt=json&key=' + key;



function processData(rows) {

    var headers = rows[0];
    var content = document.getElementById('relatedWorkContent');
    var startingRow = 0; // Specify the line number from which you want to start reading content




    

    content.innerHTML += "<h2> RELATED WORK HERE</h2>";//title
 
}





//this gets the data from the google sheet
fetch(url)
    .then(response => response.json())
    .then(data => processData(data.values))


