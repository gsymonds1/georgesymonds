let port;
let connectBtn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  port = createSerial();



  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(20, 20);
  connectBtn.mousePressed(connectBtnClick);


}

function draw() {
  background(220);

  // reads in complete lines and prints them at the
  // bottom of the canvas
  let val = port.readUntil("\n");
  //val will equal = (valx,valy)

  let splitval = split(val, ',');

  if (val.length > 0) {
    //display the incoming data
    fill(0);
    text(splitval[0], 10, height-20);
    text(splitval[1], 10, height-30);
    
    //do something with the data!
    noStroke();
    fill(255,200,0);
    ellipse(splitval[0],splitval[1],100,100);
    
  }

  // changes button label based on connection status
  if (!port.opened()) {
    connectBtn.html('Connect to Arduino');
  } else {
    connectBtn.html('Disconnect');
  }
}

function connectBtnClick() {
  if (!port.opened()) {
    port.open('Arduino', 9600);
  } else {
    port.close();
  }
}

