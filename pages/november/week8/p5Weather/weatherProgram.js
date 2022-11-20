/*
Yes YEs So, todaya we gon be extracting ewather data from a Json 

*/

let weatherjson = false;
let weatherloaded = 0;
let counter = 0;
let yr, ukdate;
let theta = 0.0; //for waves
let img;


function setup() {
  createCanvas(800, 800);
  setInterval(countdown, 1000); //setinterval is timer, assigned to 1000ms in countdown()
  img = loadImage("temp.png");
}


function countdown() {
  let m = month(); //built in p5 function
  let d = day();
  counter--;

  if (counter <0) { //counter starts at 0 so this happens when program starts
    counter = 30;
    yr = int(random(1963,2022)); //pulls rando number between 1963-2022

    let apidate = `${yr}-${m}-${d}`;

    ukdate = `${d}-${m}-${yr}`;

    let weatherurl = `https://archive-api.open-meteo.com/v1/era5?`;  //weather url

    weatherurl += `latitude=51.5002&longitude=-0.1262`; //variables attached to nd of url
    weatherurl += `&start_date=${apidate}&end_date=${apidate}`; //// Start and end dates
    weatherurl += `&daily=temperature_2m_max,rain_sum&timezone=auto`; // Request temperature and rain
    loadJSON(weatherurl, loadedweather);
  }
}

function loadedweather(json){
  weatherjson = json; 
}

function draw (){
  background(230);
  textSize(18);
  text(frameCount, width-150, 18);
  text(counter, width-90, 18);
  text(weatherloaded, width-25, 18);
  
  console.log ('fail');

  // If the JSON hasn't loaded then don't go any further
  if(weatherjson===false) return;
  console.log ('success');

  // Otherwise get the date, temp, and rain
  let temp = weatherjson.daily.temperature_2m_max;
  let rain = weatherjson.daily.rain_sum;

  // Add gradiated image to the background
  let pos = map(temp, -20, 40, -1000, 0);
  image(img, 0, pos); // Position is linked to the temp

  let x = 10;
  let y = 30;
  textAlign(LEFT);
  text(`Date: ${ukdate}`, x, y);
  text(`Temp:  ${temp}°C`, x, y+15);
  text(`Rain:  ${rain}mm`, x, y+30);

}





