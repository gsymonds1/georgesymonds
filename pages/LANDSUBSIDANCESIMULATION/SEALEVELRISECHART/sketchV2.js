let table;
let numRows;
let numCols;

let date = []
let GMSL = [] //Global Mean Sea Level

let diagramX;
let diagramY;

function preload(){
  table = loadTable("assets/sealevel.csv","csv","header"); 
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  //getting info of csv
  numRows = table.getRowCount();
  numCols = table.getColumnCount();
  //print(numRows +","+numCols)

  //load data
  for (let r = 0; r<table.getRowCount(); r++){
    date[r] = table.getString(r,0); // 0 = first row
    GMSL[r] = table.getNum(r,1); // 1 = second row
    //print(date[r]+","+GMSL[r])
  }
  minMax();
  
}


let size = [];
function draw() {
  background(240);
  chartInfo();

  diagramX = width/4*3-90;  
  diagramY = height/2;
  let radius = width/5 - 100;
  let ang = 360/numRows;

  for (let i = 0;i<numRows;i++){       //access every rosw of GMSL
    //size[i] = map(GMSL[i],-3.5,79.5,0,205); 
    size[i] = map(GMSL[i],dataMin,dataMax,0,205); 
    let pointX = (size[i]+radius)*cos(radians(ang*i))+diagramX;
    let pointY = (size[i]+radius)*sin(radians(ang*i))+diagramY;
    
    let cirX = radius*cos(radians(ang*i))+diagramX; //inner circle
    let cirY = radius*sin(radians(ang*i))+diagramY;

    //draw the line
    if (i % 12 ===0){
      strokeWeight(0.5);
      stroke('blue');
    } else {
      strokeWeight(0.1);
    stroke('black');
      }
    line(cirX,cirY,pointX,pointY)
    
    //hover interaction
    //draw data points
    let dataSize = 8;
    let dis = dist(mouseX,mouseY,pointX,pointY)
    if (dis<7){ // IF mouse is hovered over a data point
      fill('red')
      dataSize = 16;
      noStroke();
      circle(pointX,pointY,dataSize);
    //print(i)
      //show Information
      textAlign(CENTER)
      textSize(18)
    //print information
      fill('black')
      text(date[i],diagramX,diagramY+100) //print date
      textSize(18*3)
      text(GMSL[i] +"mm",diagramX,diagramY-20) //print Sea Level
    } else {
      fill('blue');
      noStroke();
      circle(pointX,pointY,dataSize);
    }
    
  }
}

function chartInfo(){
 textSize(18);
 textAlign(LEFT);
 fill('black');
 text("Global Average Absolute Sea Level Change, 1993-2014 from the US Environmental Protection Agency using data from CSIRO, 2015; NOAA, 2015. \n\nThis data contains “cumulative changes in sea level for the world’s oceans since 1880, based on a combination of long-term tide gauge measurements and recent satellite measurements. It shows average absolute sea level change, which refers to the height of the ocean surface, regardless of whether nearby land is rising or falling. Satellite data are based solely on measured sea level, while the long-term tide gauge data include a small correction factor because the size and shape of the oceans are changing slowly over time. (On average, the ocean floor has been gradually sinking since the last Ice Age peak, 20,000 years ago.)",width/5,height/4+30,width/4);
 textSize(18*2);
 text("Global Average Absolute Sea Level Change, 1993-2014",width/5,height/5,width/4);
}


let dataMin = 0; 
let dataMax = 0;
function minMax(){ //to normalise data height later
    for(let i=0; i<numRows;i++){ //run thru all rows of GMSL
        if(table.getNum(i,1)>dataMax){
            dataMax = table.getNum(i,1); // then set highest value of GMSL to dataMax
        }
    }
    dataMin = dataMax;
    for (let i=0; i<numRows; i++){
        if (table.getNum(i,1)<dataMin){
            dataMin = table.getNum(i,1); 
        }
    }
    print(dataMin+","+dataMax)
}