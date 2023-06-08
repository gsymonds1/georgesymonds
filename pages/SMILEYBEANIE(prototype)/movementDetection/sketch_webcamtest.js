var capture;



function setup() {
  createCanvas(640, 480);
  
  constraints2 = {
    video: {
            deviceId: "532c4c19fd96c288b62437723ba73ed96c3d3acb7885c844f6a33e6107c9380e",
            groupId: "bcedf30d2b8d6e961a20f6bcb9857db610a80ac0a0eef881d9f4fabac9fe21f0",
            kind: "videoinput",
            label: "C270 HD WEBCAM (046d:0825)"
       
}}
  
  capture = createCapture(constraints2);
  capture.size(640, 480);
  //capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, width, height);
}