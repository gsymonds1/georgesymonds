let angle = 0; // variable to store the angle of the sun/moon

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noStroke();


  //button fo daytime
  dayButton = createButton ("Day");
  dayButton.position(300,300);
  //attaching mousePressed event to the Day Button that'll trigger "theDay" Function
  dayButton.mousePressed(theDay);

   //button fo nighttime
   nightButton = createButton ("Night");
   nightButton.position(100,300);
   //attaching mousePressed event to the Day Button that'll trigger "theDay" Function
   nightButton.mousePressed(theNight);

   //(sliderrangemin,sliderrangemax,value,step)
   slider = createSlider(180,360,180);
   slider.position(100,250);
   slider.style("width", "250px");


   //speedSlider = createSlider(0,50,0);
   //speedSlider.position(100,150);
   //slider.style("width", "250px");
}

function draw() {
  push()
  //console.log(speedSlider.value());
  pop()

  let backColour = map(slider.value(), 180, 360, 0, 255);
  console.log (backColour);

  background (153, backColour ,153);
  fill (0, 102, 102);

  push();
    translate (width/2, height/2);
    rotate(angle)
    fill(255);
    //sun (x,y; y determines height above middle point)
    ellipse(0,-100,50,50)

    fill(100);
    ellipse(0,40,50, 50);
  pop();
  rect(0, 200, 400, 250);
  angle = slider.value();


}

function theDay() {
angle = 360;
slider.value(360);

}

function theNight() {
  angle = 180;
  slider.value(180);
  
  }