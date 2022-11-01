
//declare variables before setup function
let counter = 0;
let step = 40;
let x = step/2;
let y = step/2;


function setup() {
  // put setup code here
createCanvas(windowWidth,500);
background(0, 0, 0);
}

function draw() {
  // put drawing code here  
//noStroke();

  while (counter <= (width/step) * (height/step)) {

    //if (counter%2 ===0){
    //  fill (random(0,255),0,0);
    //} else {
    //  fill (0,0,random(0,255));
   // }
    


    line(x,y,step,step);
  
    x += step;
    if (x >= width) {
      y += step;
      x = step/2;
    }

    counter++;
  }

counter = 0;

}
