function setup() {
  // put setup code here
createCanvas(800,500);
}

function draw() {
  // put drawing code here  
  background(90, 82, 94);

  noStroke(10)
  textSize(12);
  fill (78,89,100);
  rect(50,50,400,400)

  fill (195,196,202);
  ellipse(50, 260, 70);
  fill (0,0,0);
  text('KR', 50, 260);


  
  fill(50,30,50);

  push()
  translate(100,100)
    drawTriangle()
  pop()
  
  fill(70,30,40);

  push()
  translate(200,100)
  blendMode(DIFFERENCE)
    drawTriangle()
  pop()
}

function drawTriangle() {
  triangle(
    20,100,
    140,20,
    170,170);

}