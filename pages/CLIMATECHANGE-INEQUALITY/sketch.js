  //graph drawin variables

  //TODO:
  // CAlculate mean
  let xpos = 5;
  let xstep = 1.5;
  let g = 0.5;

  x = 200;
  y = 100;

  //variable assignment for later
  let temperatures = [];
  let xcoord = [];
  let ycoord = [];
  let country = [];

  let tempArrayNo; //API Urls (min + max temperature by country)
  let ukUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=54.76&longitude=-2.70&start_date=1959-01-01&end_date=2022-11-19&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let canadaUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=60.11&longitude=-113.64&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let algeriaUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=28.00&longitude=3.00&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let iraqUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=33.00&longitude=44.00&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let indonesiaUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=-5.00&longitude=120.00&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let brazilUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=-10.00&longitude=-55.00&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let russiaUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=60.00&longitude=100.00&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let usaUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=39.76&longitude=-98.50&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let chinaUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=35.00&longitude=105.00&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let austrailaUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=-25.00&longitude=135.00&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let drcongoUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=-2.50&longitude=23.50&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let mexicoUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=23.00&longitude=-102.00&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let japanUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=35.69&longitude=139.75&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let argentinaUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=-34.00&longitude=-64.00&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let indiaUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=22.00&longitude=79.00&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let libyaUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=28.00&longitude=17.00&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let southafricaUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=-29.00&longitude=24.00&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
  let columbiaUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=4.00&longitude=-73.25&start_date=1959-01-01&end_date=2022-11-20&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
 
  let Countryhash = 0;
  let slider;
  let zeroFiller;

function preload(){
  //Loading JSOOOOOON
  ukJson = loadJSON(ukUrl);
  canadaJson = loadJSON(canadaUrl);
  algeriaJson = loadJSON(algeriaUrl);
  iraqJson = loadJSON(iraqUrl);
  indonesiaJson = loadJSON(indonesiaUrl)
  brazilJson = loadJSON(brazilUrl);
  russiaJson = loadJSON(russiaUrl)
  usaJson = loadJSON(usaUrl)
  chinaJson = loadJSON(chinaUrl)
  austrailaJson = loadJSON(austrailaUrl);
  drcongoJson = loadJSON(drcongoUrl);
  mexicoJson = loadJSON(mexicoUrl);
  japanJson = loadJSON(japanUrl);
  argentinaJson = loadJSON(argentinaUrl);
  indiaJson = loadJSON(indiaUrl);
  libyaJson = loadJSON(libyaUrl);
  southafricaJson = loadJSON(southafricaUrl);
  columbiaJson = loadJSON(columbiaUrl);

  


  img = loadImage('Newworldmap_grayscale.svg');

  let daMonth = [];
  

}

function setup() {
  createCanvas(1400, 700);
  background(220);
  img.resize(width, height);
  image(img, 0, 0);

  slider = createSlider(1, 12, 0); //month selection
  slider.position(width/2, 190);
  slider.style('width', '300px');
  
  
} 

function draw() {
  
  //background(220);
  
  // divide by 64
  text(frameCount, width-150, 18);
  fill(0);
  

  //  yr-mm-dd
  //1959-01-01
 
  //console.log(ukJson.daily.time.indexOf("1961-09-27")); //get index no

  //Setting the different variables between countries
  if (Countryhash == 0){ //UK
    console.log("success" + Countryhash);
    //translate(400,-50) //Coords Translation Matrix
    xcoord[Countryhash] = 400;
    ycoord[Countryhash] = -50;
    country[Countryhash] = "United Kingdom";
    drawgraphUK();
  } else if (Countryhash == 1){ //Canada
    console.log("success" + Countryhash);
    //translate(100,-50) //Coords Translation Matrix
    xcoord[Countryhash] = 100;
    ycoord[Countryhash] = -50;
    country[Countryhash] = "Canada";
    drawgraphCANADA();
  } else if (Countryhash == 2){ //Algeria
    console.log("success" + Countryhash);
    //translate(400,75) //Coords Translation Matrix
    xcoord[Countryhash] = 400;
    ycoord[Countryhash] = 75;
    country[Countryhash] = "Algeria";
     drawgraphALGERIA();
  } else if (Countryhash == 3){ //Iraq
    console.log("success" + Countryhash);
    //translate(600,75) //Coords Translation Matrix
    xcoord[Countryhash] = 600;
    ycoord[Countryhash] = 75;
    country[Countryhash] = "Iraq";
    drawgraphIRAQ();
  } else if (Countryhash == 4){ //Indonesia
    console.log("success" + Countryhash);
    //translate(800,200) //Coords Translation Matrix
    xcoord[Countryhash] = 900;
    ycoord[Countryhash] = 200;
    country[Countryhash] = "Indonesia";
    drawgraphINDONESIA();
  } else if (Countryhash == 5){ //Brazil
    console.log("success" + Countryhash);
    //translate(200,200) //Coords Translation Matrix
    xcoord[Countryhash] = 200;
    ycoord[Countryhash] = 200;
    country[Countryhash] = "Brazil";
    drawgraphBRAZIL();
  } else if (Countryhash == 6){ //Rusasia
    console.log("success" + Countryhash);
    //translate(700,-50) //Coords Translation Matrix
    xcoord[Countryhash] = 700;
    ycoord[Countryhash] = -50;
    country[Countryhash] = "Russia";
    drawgraphRUSSIA();
  } else if (Countryhash == 7){ //USA
    console.log("success" + Countryhash);
    //translate//Coords Translation Matrix
    xcoord[Countryhash] = 100;
    ycoord[Countryhash] = 75;
    country[Countryhash] = "United States";
    drawgraphUSA();
  } else if (Countryhash == 8){ //China
    console.log("success" + Countryhash);
    //translate//Coords Translation Matrix
    xcoord[Countryhash] = 800;
    ycoord[Countryhash] = 75;
    country[Countryhash] = "China";
    drawgraphCHINA();
  } else if (Countryhash == 9){ //Austrailia
    console.log("success" + Countryhash);
    //translate//Coords Translation Matrix
    xcoord[Countryhash] = 900;
    ycoord[Countryhash] = 325;
    country[Countryhash] = "Austrialia";
    drawgraphAUSTRAILIA();
  } else if (Countryhash == 10){ //DR Congo
    console.log("success" + Countryhash);
    //translate//Coords Translation Matrix
    xcoord[Countryhash] = 500;
    ycoord[Countryhash] = 200;
    country[Countryhash] = "DR Congo";
    drawgraphDRCONGO();
  } else if (Countryhash == 11){ //Mexico
    console.log("success" + Countryhash);
    //translate//Coords Translation Matrix
    xcoord[Countryhash] = 0;
    ycoord[Countryhash] = 75;
    country[Countryhash] = "Mexico";
    drawgraphMEXICO();
  } else if (Countryhash == 12){ //Japan
    console.log("success" + Countryhash);
    //translate//Coords Translation Matrix
    xcoord[Countryhash] = 900;
    ycoord[Countryhash] = 75;
    country[Countryhash] = "Japan";
    drawgraphJAPAN();
  } else if (Countryhash == 13){ //Argentina
    console.log("success" + Countryhash);
    //translate//Coords Translation Matrix
    xcoord[Countryhash] = 200;
    ycoord[Countryhash] = 325;
    country[Countryhash] = "Argentina";
    drawgraphARGENTINA();
  } else if (Countryhash == 14){ //India
    console.log("success" + Countryhash);
    //translate(600,75) //Coords Translation Matrix
    xcoord[Countryhash] = 700;
    ycoord[Countryhash] = 75;
    country[Countryhash] = "India";
    drawgraphINDIA();
  } else if (Countryhash == 15){ //Libya
    console.log("success" + Countryhash);
    //translate(600,75) //Coords Translation Matrix
    xcoord[Countryhash] = 500;
    ycoord[Countryhash] = 75;
    country[Countryhash] = "Libya";
    drawgraphLIBYA();
  } else if (Countryhash == 16){ //South Africa
    console.log("success" + Countryhash);
    //translate(600,75) //Coords Translation Matrix
    xcoord[Countryhash] = 500;
    ycoord[Countryhash] = 325;
    country[Countryhash] = "South Africa";
    drawgraphSOUTHAFRICA();
  } else if (Countryhash == 17){ //Columbia
    console.log("success" + Countryhash);
    //translate(600,75) //Coords Translation Matrix
    xcoord[Countryhash] = 100;
    ycoord[Countryhash] = 200;
    country[Countryhash] = "Columbia";
    drawgraphCOLUMBIA();
  
  } else {
    Countryhash = 0;
    draw();
  }

}


//I Coudn't make an array saving each JSON, so I had to make a function for each country's graph (different JSON files) so yeah theres some repition in code up a ahead :'(
function drawgraphUK() {
  let xShift = 0;
  let tempArrayNo = 0;
  let urlNo = 0;
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    let dajsons = [ukJson,canadaJson]

    //create function to calculate mean of year
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9,10,11,12    01,02,03,04,05,06,07,08,09  10,11,12
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (ukJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate =ukJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (ukJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    urlNo++
  }
  drawDaGraph();
}

function drawgraphCANADA() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (canadaJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = canadaJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (canadaJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphALGERIA() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (algeriaJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = algeriaJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (algeriaJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphIRAQ() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (iraqJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = iraqJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (iraqJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphINDONESIA() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (indonesiaJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = indonesiaJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (indonesiaJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphBRAZIL() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1980; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (brazilJson.daily.time.indexOf((i+"-"+zeroFiller+daMonth+"-01"))); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = brazilJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (brazilJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphRUSSIA() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (russiaJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = russiaJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (russiaJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphUSA() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (usaJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = usaJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (usaJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphCHINA() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (chinaJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = chinaJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (chinaJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log(daTemperature+","+daDate+","+annualDay+","+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphAUSTRAILIA() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (austrailaJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = austrailaJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (austrailaJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphDRCONGO() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (drcongoJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = drcongoJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (drcongoJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphMEXICO() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (mexicoJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = mexicoJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (mexicoJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphJAPAN() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (japanJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = japanJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (japanJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphARGENTINA() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (argentinaJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = argentinaJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (argentinaJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 


function drawgraphINDIA() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (indiaJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = indiaJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (indiaJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 


function drawgraphLIBYA() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (libyaJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = libyaJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (libyaJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 


function drawgraphSOUTHAFRICA() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (southafricaJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = southafricaJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (southafricaJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

function drawgraphCOLUMBIA() {
  let xShift = 0;
  let tempArrayNo = 0;
  
  for (let i = 1959; i <= 2022; i++){ //run though year by year
    
    daMonth = slider.value();// 1,2,3,4,5,6,7,8,9
    let zeroFiller = "";
    if (daMonth <= 9) {
      zeroFiller = "0";
    }

    annualDay = (columbiaJson.daily.time.indexOf(i+"-"+zeroFiller+daMonth+"-01")); //gets the first of every year
    //console.log(annualDay); //get index no 0,365,731, etc...

    fill(0);


    daDate = columbiaJson.daily.time[annualDay];
    //text(daDate,x+(xShift*100),y);  

    daTemperature = (columbiaJson.daily.temperature_2m_max[annualDay]);
    //text(daTemperature,x+(xShift*100),y+20);
    temperatures[tempArrayNo] = daTemperature;

    console.log("daTemperature: "+daTemperature+", daDate: "+daDate+", annualDays: "+annualDay+", tempArrayNo: "+tempArrayNo);

    xShift++;
    tempArrayNo++;
    
  }
  drawDaGraph();
} 

// Here: Take the variables from the previous country's fucntion, and use them to graph a graph, then move to the next country till all r done
function drawDaGraph() {//do this 100 by 100 
  text("Month:" + daMonth,width/2,20);
  noFill();
  beginShape();
  for(let i = 0; i <= 63; i ++) {  //x200 y 100    UK0   (+400,-50)
    //fill (255);
    let localx = x + xcoord[Countryhash]
    let localy = y + ycoord[Countryhash]

    ypos = map(temperatures[i], -40, 60, localy+100, localy);
    strokeWeight(1);
    stroke(50);
    //rect(x, y , xdimension, ydimension)
    //rect(xpos + (xstep*i),ypos, xstep, xstep);
    vertex(localx + (xstep*i),ypos)
    push()
    fill(150);
    textSize(4);
    text(temperatures[i],localx + (xstep*i),ypos-10);
    
    pop()

    push()
    textSize(10);
    text(country[Countryhash],localx,localy) //print country name
    noFill()
    rect(localx,localy,100,100) //graphframe
    pop()

  }

  g += 0.001;
  Countryhash++

  
  endShape();

}

//refresh the canvas when changing the month
function mouseReleased(){
  background(220);
  image(img, 0, 0);
}