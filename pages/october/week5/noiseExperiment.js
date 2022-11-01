  let xpos = 5;
  let xstep = 5;
  let g = 0.5;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)

}

function draw() {
  background(0, 10);
  
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
  
}