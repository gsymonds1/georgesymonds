let r, g, b, x, y;

function setup() {
  createCanvas(400, 300);
  r = 200;
  g = 200; 
  b = 200; 


  createCanvas(400, 400);
  r = 200;
  g = 200;
  b = 200;
	myButton = createButton('Hello');     // Create a button
	myButton.position(300, 300);          // set its position
	myButton.mousePressed(myButtonClick); // On a MouseClick call myButtonClick();
  myButton.style('background', 'rgb(100,200,50)'); // HTML elements use CSS

}

function draw() {
  background(r, g, b);
//shape change on click
  push();
  fill(255);
  if (mouseIsPressed === true) {
	  ellipse(50, 50, 50, 50); 
  } else {
    rect(25, 25, 50, 50);    
  }
  pop();

  //text change on key
  push();
  if (keyIsPressed === true && keyCode===82) { // if key is "r"
    fill(200,0,0);
  } else {
    fill(255);
  }
  textSize(18);
  text("key: "+keyCode, 100, 100); // Display the current key reference
  rect(100, 25, 50, 50); 
  pop();

}

function myButtonClick() {
	r = random(50, 255);
  g = random(50, 255);
  b = random(50, 255);
}