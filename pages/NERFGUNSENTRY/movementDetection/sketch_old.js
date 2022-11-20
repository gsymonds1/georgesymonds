// Feature Extractor Regression
// Adapted from The Coding Train by Daniel Shiffman https://thecodingtrain.com/learning/ml5/3.2-feature-extractor-regression.html
// (This sketch is not working in safari)

//variables for video
let mobilenet;
let predictor;
let video;
let value = 0;
let slider;
let addButton;
let trainButton;

//variables for rotation correction+on target
let varx = 0;
let midpoint = 0;
let rotationCorrection = 0;
let videoWidth = 0;
let videoHeight = 0;

//variables for linking to arudino
let port;
let connectBtn;
let brightness =0;


function modelReady() {
  console.log('Model is ready!!!');
}

function videoReady() {
  console.log('Video is ready!!!');
}

function whileTraining(loss) {
  if (loss == null) {
    console.log('Training Complete');
    predictor.predict(gotResults);
  } else {
    console.log(loss);
  }
}

function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    // updated to work with newer version of ml5
    // value = result;
    value = result.value;
    predictor.predict(gotResults);
  }
}

function setup() {
  createCanvas(320, 370);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  predictor = mobilenet.regression(video, videoReady);

  slider = createSlider(0, 1, 0.5, 0.01);

  addButton = createButton('add example image');
  addButton.mousePressed(function() {
    predictor.addImage(slider.value());
  });

  trainButton = createButton('train');
  trainButton.mousePressed(function() {
    predictor.train(whileTraining);
  });

  trainButton = createButton('save');
  trainButton.mousePressed(function() {
    predictor.save();
  });

  trainButton = createButton('load model');
  trainButton.mousePressed(function() {
    predictor.load('./model.json', customModelReady);
  });

  
}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  videoWidth = 320;
  videoHeight = 240;

  rectMode(CENTER);

  varx = value * width;

  //calculating rotation degrees neccesary
  midpoint = 150;
  rotationCorrection = varx - midpoint;

  if (rotationCorrection)




  //ontarget detection
  fill(0, 255, 0);
  if (varx > 120 && varx <180 ) {
    //SHOOT
    fill(255, 0, 0);

    //output to arduino here
  }

  
  
  line(varx, videoHeight/2, videoWidth/2, videoHeight/2);

  rect(varx, videoHeight / 2, 10, 10,25);
  
  

  fill(255);
  textSize(16);
 
  //target pos on screen
  text("varX: "+varx, 10, height - 50);
  text("rotationCorrection: "+rotationCorrection, 10, height - 30);
  text("val: "+value, 10, height - 10);
  line(width/2, 0, width/2, height);
}
