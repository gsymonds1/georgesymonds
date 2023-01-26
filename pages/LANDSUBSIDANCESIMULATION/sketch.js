var circles = [];
var number = 40;
var size = 20;
var bsize = 20;
var box = Array(600/bsize)

yFriction = 0.999;
xFriction = 0.999;

function setup() {
    createCanvas(600, 600);

    for(let i=0; i<number; i++){
      // pos, velocity, accerleration
      circles[i] = new Circle(createVector(random(100,500),300),createVector(random(-1,1),0),createVector(0,0.1));
    }
}


function draw(){
  background(205,5);
  strokeWeight(20);

  for(ball of circles){
    ball.show();
    ball.move();
    ball.wall();
    ball.gravity();
    ball.friction();
    ball.collide();
  }


  //yVel = yVel * yFriction;

}

class Circle{
  constructor(p,v,a){
    this.p=p;
    this.v=v;
    this.a=a;
  }

  show(){
    point(this.p.x,this.p.y);
  }

  move(){
    this.v.add(this.a);
    this.p.add(this.v);
    
  }

  wall(){
    if (this.p.y>600-size/2 || this.p.y<0-size/2){
      this.v.y = this.v.y*-1;
      this.p.y = constrain(this.p.y,0+size/2,600+size/2);
    }

    if (this.p.x>600-size/2 || this.p.x<0-size/2){
      this.v.x = this.v.x*-1;
      this.p.x = constrain(this.p.x,0+size/2,600+size/2);
    }
  }

  gravity(){
    this.v.y = this.v.y +0.5
  }

  friction(){
    //vari assignment
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
        circles[i].v.add(dir)
      }
    }
  }
}