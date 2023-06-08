  //graph drawin variables
  let xpos = 5;
  let xstep = 5;
  let g = 0.5;

  let ukUrl = "https://archive-api.open-meteo.com/v1/era5?latitude=54.76&longitude=-2.70&start_date=1959-01-01&end_date=2022-11-19&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";


function setup() {
  createCanvas(1400, 700);
  table = loadTable(ukUrl, 'csv', 'header')
} 

function draw() {
  console.log ("draw")
  background(220);
  text(frameCount, width-150, 18);

  getCountryData();

}

function getCountryData() {
  table = loadTable(ukUrl)
}

function drawGraph(){
//do this 100 by 100

/*
  noFill();
  beginShape();
  for(let i = 0; i < width/xstep; i ++) {
    //fill (255);
    factor = i/10;
    ypos = map(noise(factor), 0, 1, 0, height)
    strokeWeight(1);
    stroke(random(255));
    //rect(x, y , xdimension, ydimension)
    //rect(xpos + (xstep*i),ypos, xstep, xstep);
    vertex(xpos + (xstep*i),ypos)

  }

  g += 0.001;


  endShape();
  */
}

function placeGraph(){

}



