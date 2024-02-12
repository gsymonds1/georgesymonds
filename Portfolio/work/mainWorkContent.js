var id = '1ioWsWWhAhvDNPCSVsR5340V_8OPOIMsk1sp6KwdSGqs';
var sheet_name = 'Sheet1';
var key = "AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ";
var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + id + '/values/' + sheet_name + '?alt=json&key=' + key;

function processData(rows) {
    var content = document.getElementById('workContent');
    var content2 = document.getElementById('relatedWorkContentTitle');

    const classToRowIndexMap = {
        '1EARTH': 1,
        'CSD': 2,
        'TCR': 3,
        'RESEARCHDATABASE': 4,
        'KR': 5,
        'DOC2': 6,
        'MEMO': 7,
        'Photography': 8,
        'MV': 9,
        'TRT': 10,
        'VES':11,
        'DD':12,
        'UV2': 13,
        'GUN': 14,
        'BEANIE': 15,
        'KEYSCAPE': 16,
        'JKT': 17,
        'EMOTIONS': 18,
        'ALBUMCOVERS': 19,
        'WECARE': 20,
        'CREATIONSTATION': 21,
        'LIFE': 22,
    };

    var row = rows[classToRowIndexMap[content.classList.value]] || rows[0];
    console.log(`Class is ${content.classList.value}. Value assigned to rows[${classToRowIndexMap[content.classList.value] || 0}].`);

    renderBodyContent(row, content);
    // renderRelatedContent(row, content2);

    //DETECT + PRINT RELATED WORK
    // Check all other rows in column 11
    const columnIndex11 = 11;
    const currentColumn11Value = row[columnIndex11];

    // Split the keywords into an array
    const currentKeywordsArray = currentColumn11Value.split(',').map(keyword => keyword.trim());
    content2.innerHTML += "<p><strong>RELATED WORK:</strong></p>";
    for (let i = 0; i < rows.length; i++) {
        if (i !== classToRowIndexMap[content.classList.value]) { // Skip the current row
            const column11Value = rows[i][columnIndex11];

            // Split the keywords of the current row into an array
            const otherKeywordsArray = column11Value.split(',').map(keyword => keyword.trim());

            // Check if there's any common keyword
            if (currentKeywordsArray.some(keyword => otherKeywordsArray.includes(keyword))) {
                console.log(`Matching keyword found in row ${i + 1}: ${rows[i][1]}`);
                
                content2.innerHTML += "<p>title:" + rows[i][1] + "</p>";
                content2.innerHTML += ``

            }
        }
    }
}

function renderBodyContent(row, content) {
    content.innerHTML += "<h2>" + row[1] + "</h2>"; // title
    content.innerHTML += "<h4>" + row[4] + "</h4>"; // yr
    content.innerHTML += "<h3>" + row[2] + "</h3>"; // sub
    content.innerHTML += "<h4>" + row[3] + "</h4>"; // media
    content.innerHTML += "<p>" + row[5] + "</p>"; // p
    if (row[6].trim() !== '') {
        content.innerHTML += `<div class="picofmyworkandcaption"><img src="${row[6]}" alt="Work 0" class="thismyworkpic"><p class="imagecaption">${row[7]}</p></div>`;
    }
    content.innerHTML += "<p>" + row[8] + "</p>"; // p
    content.innerHTML += `<a href="${row[9]}">${row[10]}</a>`;
}

// function renderRelatedContent(row, content2) {
//     console.log("relatedWorkContentTitle");
//     content2.innerHTML += "<p>RELATED WORK HERE</p>";
//     content2.innerHTML += "<p>title:</p>" + row[1];
// }

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => processData(data.values))
    .catch(error => console.error('Error fetching data:', error));