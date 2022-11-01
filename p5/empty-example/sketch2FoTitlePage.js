function setup() {
    background("white");
    colorMode(HSB);
    let daHeight = screen.height;
    let cnv = createCanvas(windowWidth, daHeight);
    // positions canvas 50px to the right and 100px
    // below upper left corner of the window
    cnv.position(500,0);


  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    //Line from prev pt to current pt
    //of mouse position
    if (mouseIsPressed === true){
      line(mouseX, mouseY, pmouseX, pmouseY);
    } 
  }
  
  //listen when we click the mouse
  function mouseClicked() {
    //weights 0 to 1
    stroke("slateBlue");
    strokeWeight(random());
  
    //what if want weights 0 to .4?
    //strokeWeight( random(.4) );
  }
  
  //listen when we release *any* key
  function keyReleased() {
    //color hue values between 20 and 145
    //saturation 0 to 100
    //brightness 80 to 100
    stroke(random(20, 145), random(100), random(80, 100));
  }
  
  //listen for only character keys
  function keyTyped() {
    //weights 0 to 5
    stroke("turquoise");
    strokeWeight(random(5));
  }