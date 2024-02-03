var id = '1ioWsWWhAhvDNPCSVsR5340V_8OPOIMsk1sp6KwdSGqs';
var sheet_name = 'linktree';
var key = "AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ"
var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + id + '/values/' + sheet_name + '?alt=json&key=' + key;

function processData(rows) {
    var content = document.getElementById('content');
    rows.shift();

    function displayContent(row) {
        // Add this line to check if the selected category is present in row[12]

        //content.innerHTML += "<div class='circleContainer'><small class='circleText'>" + row[1] + "</small></div>"; //circle nu
        // content.innerHTML += "<div class='contentContainer' style='width: calc(100% - 100px);'><h2><a href='" + row[1] + "' style='text-decoration: none;'>" + row[0];
        // content.innerHTML += "<br><br><br>"
        content.innerHTML += `
    <div class="innerTableContent">
        <h2 style="flex: 1; margin: 0; vertical-align: top;">
            <a href='${row[1]}' style='text-decoration: none;'>${row[0]}</a>
        </h2><br><br>
        <img class="secondLine" src="/linktree/white share logo.png" alt="Small Image">
        <img src="${row[2]}" style="flex: 0 0 100px; object-fit: cover; height: 100px; width: 100px;"><br>
    </div><br>
`;
//content.innerHTML += '<div id="bottomSubPoint"><a href="about.html" target="_blank"><button id="bot_grouplink" class="contentContainer btn buttonMain" style="width:70%">@' + row[5] + '</button></a></div>' //sub
        

    }



    rows.forEach(row => {
        displayContent(row);
    });
}

fetch(url)
    .then(response => response.json())
    .then(data => processData(data.values));
