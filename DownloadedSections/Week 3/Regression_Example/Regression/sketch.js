// Feature Extractor Regression
// Adapted from The Coding Train by Daniel Shiffman https://thecodingtrain.com/learning/ml5/3.2-feature-extractor-regression.html
// (This sketch is not working in safari)

let mobilenet;
let predictor;
let video;
let value = 0;
let slider;
let addButton;
let trainButton;

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
  createCanvas(320, 270);
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
  rectMode(CENTER);
  fill(0, 0, 255);
  rect(value * width, value *height / 2, 50, 50,25);

  fill(255);
  textSize(16);
  text(value, 10, height - 10);
}
