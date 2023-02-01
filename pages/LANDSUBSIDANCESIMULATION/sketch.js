let circles = [];
let number = 100;
let size = 10;

let chosenOne = 0


let slider;
let val = 20;


let drawLoopNo = 0;


yFriction = 0.99;
xFriction = 0.99;



function setup() {
    createCanvas(1300, 1000);
   
    //background(0,0,255);
    slider = createSlider(0, 555, 20);
    slider.position(10, 1500);
    slider.style('width', '250px');
    
    

  setCircles();
}



function setCircles() {
  let val = slider.value();
  
  for(let i=0; i<val; i++){
    // pos, velocity, accerleration
    circles[i] = new Circle(createVector(random(0,600),random(0,600)),createVector(random(0,0),0),createVector(0,0.1));
  }

}




/* function spawnCircles(){} */



function draw(){
  //setCircles();
  background(230,20);
  let sliderVal = slider.value();


  text(sliderVal,100,100) //display ball count
  strokeWeight(size);
  
  //check to see if theres more circles in circles[] array than in sliderValie, IF there is remove them (so val = circles)
  if (circles.length > sliderVal) {
    circles.splice(0, 1);
  }

  for(let i = 0; i < circles.length; i++) {
    
    circles[i].show();
    circles[i].move();
    circles[i].wall();
    circles[i].gravity();
    circles[i].friction();
    circles[i].collide();
  }
  
  
  //rerunning the creation of balls (as found it setup() if slider gets editting)
  slider.input(setCircles);

  drawLoopNo = drawLoopNo + 1;
  //setCircles();
}

class Circle{
  constructor(p,v,a){
    this.p=p;
    this.v=v;
    this.a=a;
  }

  show(){
    
    stroke(0,0,255)

    //text(chosenOne,100,100)
   // if (chosenOne > 10) {
   //   stroke(0,0,200);
   // }

    point(this.p.x,this.p.y);
   // chosenOne = chosenOne+1
    
  }

  move(){
    this.v.add(this.a);
    this.p.add(this.v);
    
  }

  wall(){
    if (this.p.y>=600-size/2 || this.p.y<0-size/2){
      this.p.y = constrain(this.p.y,0+size/2,600+size/2);
      this.v.y = this.v.y*-1;
    }
  
    if (this.p.x>=600-size/2 || this.p.x<=0-size/2){
      this.p.x = constrain(this.p.x,0+size/2,600+size/2);
      this.v.x = this.v.x*-1;
    }
  }

  gravity(){
    if (this.p.y <500) {
    this.v.y = this.v.y +0.8
    }
  }

  friction(){ // Constant friction slowing down the balls X n Y Velocity (simulating air resistance)
   //yVel = yVel * yFriction;
    this.v.y = this.v.y * yFriction;
    this.v.x = this.v.x * xFriction;
  }

  collide(){
    let dir
    let dist
    let v1
    let v2
    for(let i = 0; i<circles.length; i++){
      dir = p5.Vector.sub(circles[i].p,this.p);
      dist = dir.mag();
      if (dist <= size){ 
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
        text(i, 600, this.p.y-50);
      }
    }
  }
}

