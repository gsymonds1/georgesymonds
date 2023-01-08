// N.B. Will not run in Processing IDE with Safari - Requires p5.js web editor and Chrome browser
// Loads deviceList array into pullDown list
// Drop Down List parts => a.)display field, b.)arrow, c.)listItems
// Syntax: List(x, y, w, h, itemH, txtSize)

let list;
let selectedItem = -1;
let drop = false;
let itemY = [];
var deviceList = [];

function preload() {
  navigator.mediaDevices.enumerateDevices().then(getDevices);
}

class List {

  constructor(x, y, w, h, itemH, txtSize) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.itemH = itemH;
    this.txtSize = txtSize;
    this.arrwX = this.x + this.w;
    this.arrwY = this.y;
    this.arrwH = this.h;
  }

  openVideoInput (videoSelected) {
    var constraints = {
    video: {
    deviceId: {
      exact: deviceList[videoSelected].id
      },
    }
  };
  createCapture(constraints);
}

press(mx, my) {
  // arrow touches
  if ((mx >= this.arrwX) && (mx <= this.arrwX+this.arrwH) && (my >= this.arrwY) && (my <= this.arrwY+this.arrwH)) {
    if (drop == true) {
      drop = false;
    } else {
      drop = true;
    }
  } // list touches
  if (drop) {
    if (deviceList.length > 0) {
      for (let j = 0; j < deviceList.length; j++) {
        if ((mx >= this.x) && (mx <= this.x + this.w) && (my >= itemY[j] ) && (my <= itemY[j] + this.itemH)) {
          selectedItem = j;
          console.log("selectedItem :", selectedItem);
          list.openVideoInput(selectedItem);
          drop = false;
        }
      }
    }
  }
}

displayFieldString(title) {
  fill(255); // background color
  rect(this.x, this.y, this.w, this.h);
  fill(0); // text color
  textSize(this.txtSize);
  text(title, this.x + 10, this.y + this.txtSize);
}

display() {
  if (selectedItem == -1) {
    this.displayFieldString("Select video input:");
  } else {
    this.displayFieldString(deviceList[selectedItem].label);
  }
  // arrow
  fill(255); // arrow background color
  rect(this.arrwX, this.arrwY, this.arrwH, this.arrwH);
  fill(0, 255, 0); // arrow color
  triangle(this.arrwX+5, this.arrwY+5, this.arrwX+this.arrwH-5, this.arrwY+5, this.arrwX+this.arrwH/2, this.arrwY+this.arrwH-5);
  // listItems
  if ((deviceList.length > 0) && (drop)) {
    for (let j = 0; j < deviceList.length; j++) {
      itemY[j] = (this.y + this.h) + j*this.itemH;
      fill(255);
      rect(this.x, itemY[j], this.w, this.itemH);
      fill(0);
      textSize(this.txtSize);
      text(deviceList[j].label, this.x + 10, itemY[j] + this.txtSize);
    }
  }
  if (!drop) {
    rect(this.x, this.y + this.h, this.w, 0);
  }
}
}

function setup() {
  createCanvas(400, 200);
  list = new List(30, 30, 320, 24, 24, 16);
}

function draw() {
  background(220);
  list.display();
}

function getDevices(devices) {

  for (let i = 0; i < devices.length; ++i) {
    let deviceInfo = devices[i];
    //Only get videodevices and push them into deviceList
    if (deviceInfo.kind == 'videoinput') {
      deviceList.push( {
      label:deviceInfo.label,
        id:deviceInfo.deviceId
      }
      );
    }
  }
}

function mousePressed() {
  list.press(mouseX, mouseY);
}