function setup() {
  createCanvas(500, 450);
  rectMode(CENTER);
  noStroke();
}
  
function draw() {
  background(220);

  drawVolcano(200,200,1);

}
    
function drawVolcano(x, y, size) {
//sky drawin
fill(135,206,235) ;
rect(x+15, y+15, width/3, 150);

//grass drawin
fill(0,150,0) ;
rect(x+15, y+72, width/3, 35);

//volcano drawin

for (let i = 0; i <4; i++){
  fill(130,60,20);
  if (i===0){
    fill(200,30,10);
  }
ellipse (x+10,  30 + y + (i*10),  20 +(i*10)  , 5 +(i*10));
}

//cloud drawin
for (let i = 0; i<6; i++) {
  smokeColour = color(255,255,255);
  smokeColour.setAlpha(random(100,200));
  fill(smokeColour)


  xpos = x + (i*10);

	ellipse(map(noise(xpos),0,1,x-25,x+25), 30 + y - (i*10), (i*10) * size/2, (i*10) * size/2);
}
}

