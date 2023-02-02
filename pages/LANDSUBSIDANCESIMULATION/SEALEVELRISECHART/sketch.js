//GRAPH variable assignment
let table;
let numRows;
let numCols;





let date = []
let GMSL = [] //Global Mean Sea Level

let diagramX;
let diagramY;

//Bridge - connecting what happens in the graph to effect the Balls 
let oldBallrepresentitveValue = -170
let ballrepresentitveValue = -170


//BALLS variable assignment
let circles = [];
let number = 100;
let Ballsize = 40;

let chosenOne = 0

let slider;
let val = 20;

let drawLoopNo = 0;

yFriction = 0.99;
xFriction = 0.99;



function preload(){ //getting the csv up
  table = loadTable("assets/sealevel2.csv","csv","header"); 
}



function setup() { 
//GRAPH
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

//BALLS
  //slider = createSlider(0, 555, 20);
  //slider.position(10, 1500);
  //slider.style('width', '250px');
    
  setCircles();
  
}



//BALLS
function setCircles() {
  //let val = slider.value();
  let val = map(ballrepresentitveValue,-184,83,1,150); ///ien 17
  
  for(let i=0; i<val; i++){
    // pos, velocity, accerleration
    circles[i] = new Circle(createVector(width/2,height/2),createVector(random(-2,2),0),createVector(0,0.1));
  }
  oldBallrepresentitveValue = ballrepresentitveValue;
}




let size = [];
function draw() {
  background(240);
//GRAPH
  chartInfo();
  diagramX = width/2;  //the chart position on screen (everything mapped to these)
  diagramY = height/2;      // same^
  let radius = width/9; //set Radius of Big Circle
  let ang = 360/numRows; //the angle between each line/point

  for (let i = 0;i<numRows;i++){       //access every rosw of GMSL
    //size[i] = map(GMSL[i],-3.5,79.5,0,205); 
    size[i] = map(GMSL[i],dataMin,dataMax,1,150); 
    let pointX = (size[i]+radius)*cos(radians(ang*i))+diagramX;
    let pointY = (size[i]+radius)*sin(radians(ang*i))+diagramY;
    
    let cirX = radius*cos(radians(ang*i))+diagramX; //inner circle
    let cirY = radius*sin(radians(ang*i))+diagramY;

    //draw the line
    if (i % 12 ===0){
      strokeWeight(0.5);
      stroke('blue');
    } else {
      strokeWeight(0.05);
    stroke('black');
      }

      
    line(cirX,cirY,pointX,pointY)
    
    if (i % 12 ===0){ //printing date stamps
      noStroke();
      textSize(10);
      fill('black');
      let dateShortend = date[i].slice(0,4)
      text(dateShortend,pointX+10,pointY)
    }

    //hover interaction
    //draw data points
    let dataSize = 8;
    let dis = dist(mouseX,mouseY,pointX,pointY)
    if (dis<0.8){ // IF mouse is hovered over a data point
      fill('red')
      dataSize = 16;
      noStroke();
      circle(pointX,pointY,dataSize);
    
      //show Information
      textAlign(CENTER)
      textSize(18)
    //print information
      fill('blue')
      text(date[i],diagramX,diagramY+70) //print date
      fill('black')
      textSize(18*3)
      text(GMSL[i] +"mm",diagramX,diagramY-20) //print Sea Level
      ballrepresentitveValue = GMSL[i];
      
    } else {
      fill('blue');
      noStroke();
      if (i % 12 ===0){
      circle(pointX,pointY,dataSize);}
    }

    

    //text(ballrepresentitveValue,200,200)
  }

//BALLS
  //let sliderVal = slider.value();

  textSize(12)
  text(floor(map(ballrepresentitveValue,-184,83,1,150)),20,height/5) //display ball count
  strokeWeight(Ballsize);
  
  //DELETING old circles if there too many (after changing data point)
  //for (let s =1;s<ballrepresentitveValue;i++){ 
    if (circles.length > map(ballrepresentitveValue,-184,83,1,150)) {
      circles.splice(0, 1);
    }
 // }

  for(let i = 0; i < circles.length; i++) {
    
    circles[i].show();
    circles[i].move();
    circles[i].wall();
    circles[i].gravity();
    circles[i].friction();
    circles[i].collide();
  }
  
  //Rerunning the creation of balls (as found it setup() if a different info-point is selceted)
  if (ballrepresentitveValue != oldBallrepresentitveValue){
    setCircles()
  }
  
  drawLoopNo = drawLoopNo + 1;


}
//GRAPH
function chartInfo(){ //Printing all the info text
 textSize(12);
 textAlign(LEFT);
 fill('black');
 textStyle(NORMAL); 
 text("Global Average Absolute Sea Level Change, 1993-2014 from the US Environmental Protection Agency using data from CSIRO, 2015; NOAA, 2015. \n\nThis data contains “cumulative changes in sea level for the world’s oceans” for every month between 1880-2014, based on a combination of long-term tide gauge measurements and recent satellite measurements. \n\nIt shows average absolute sea level change, which refers to the height of the ocean surface, regardless of whether nearby land is rising or falling. Satellite data are based solely on measured sea level, while the long-term tide gauge data include a small correction factor because the size and shape of the oceans are changing slowly over time. (On average, the ocean floor has been gradually sinking since the last Ice Age peak, 20,000 years ago.)",width/20,height/5*2.5,width/4);
 textStyle(BOLD); 
 text("Description:",width/20,height/5*2.4,width/4);
 textSize(26);

 text("Mapping Global Average Absolute Sea Level Change, 1993-2014",width/20,height/5,width/4);
 textSize(12);
 text("Data Interaction:",width/20,height/5*1.8,width/4);
 textStyle(NORMAL); 
 text("This diagram is interactive! Hover over any points on the circular graph to see the sea level change per year, with water particles to scale.",width/20,height/5*1.9,width/4);

 textStyle(BOLD); 
 textSize(12);
 text("Findings:",width/20*15,height/5,width/4);
 textStyle(NORMAL); 
 text("- from satellite altimeter data,coastal + island sea-level measurements, and after correcting for glacial isostatic adjustment: \n\n The Global average sea level rise is estimated to be:\n\n3.2 ± 0.4 mm/year \n\nWith a Total Rise of:\n\n210mm (1880-2009)\n\n",width/20*15,height/5*1.2,width/4);
 
 textStyle(BOLD); 
 text("Data:",width/20*15,height/2,width/4);
 textStyle(NORMAL); 
 text("Name: CSIRO (Commonwealth Scientific and Industrial Research Organization) \n\nWeb: http://www.cmar.csiro.au/sealevel/GMSL_SG_2011_up.html",width/20*15,height/2*1.05,width/4);

}

//GRAPH SHIIIIIi - just finding the highest and lowest value in dataset n saving it
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
    console.log(dataMin+","+dataMax)
}

//BALLS BALLS BALLS Here is where the ball magic (physics) happens:
class Circle{
  constructor(p,v,a){
    this.p=p; //Point Ball Position on screen (X , Y)
    this.v=v; //Velocity Left/Right Movement Speed (effects current point^)
    this.a=a; //Acceration Left/Right Acceration Rate (effects current velocity^)   yeah we got physics here mate
  }

  show(){ //Da Function for showing the ball
    stroke(0,0,255,12)
    point(this.p.x,this.p.y);
  }

  move(){ //Da Function for updating balls position based on movement
    this.v.add(this.a);
    this.p.add(this.v);
  }

  wall(){ //Da Function for making sure dem balls dont go off the screen >:-)
    if (this.p.y>=height-Ballsize/2 || this.p.y<0-Ballsize/2){ //top/bottom wall
      this.p.y = constrain(this.p.y,0+Ballsize/2,height+Ballsize/2);
      this.v.y = this.v.y*-1;
    }
  
    if (this.p.x>=width-Ballsize/2 || this.p.x<=0-Ballsize/2){ //left/right wall
      this.p.x = constrain(this.p.x,0+Ballsize/2,width+Ballsize/2);
      this.v.x = this.v.x*-1;
    }
  }

  gravity(){ //Da Function for always having a downwards force
    if (this.p.y < height/2+200) {
    this.v.y = this.v.y +1
    }
  }

  friction(){ // //Da Function fo Constant friction slowing down the balls X n Y Velocity (simulating air resistance)
    this.v.y = this.v.y * yFriction;
    this.v.x = this.v.x * xFriction;
  }

  collide(){ //Da Function for what da Balls do when they hit into oneanother (calculates the trajectory it bounes off in)
    let dir
    let dist
    let v1
    let v2
    for(let i = 0; i<circles.length; i++){ // 
      dir = p5.Vector.sub(circles[i].p,this.p);
      dist = dir.mag();
      if (dist <= Ballsize){  // IF one ball is touching another ball 👀
        dir.normalize();
        let correction = size - dist;
        this.p.sub(p5.Vector.mult(dir, correction/2));
        circles[i].p.add(p5.Vector.mult(dir, correction/2));
        v1 = p5.Vector.dot(dir, this.v);
        v2 = p5.Vector.dot(dir, circles[i].v);
        dir.mult(v1 - v2);
        this.v.sub(dir);
        circles[i].v.add(dir);
        noStroke();
        //text(i, 600, this.p.y-50);
      }
    }
  }
}