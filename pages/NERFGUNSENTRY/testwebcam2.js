let video1;
let video2;
let constraints1;
let constraints2;

//call the list of cameras 
function gotDevices(deviceInfos) {
    for (let i = 0; i !== deviceInfos.length; ++i) {
        const deviceInfo = deviceInfos[i];
        if (deviceInfo.kind == "videoinput") {
            console.log(deviceInfo);
        }
    }
}

//function streamCameras() {
//    for (var i = 0; i < 2; i++) {
  //      console.log(videolist[i]);
   // }
//}

//navigator.mediaDevices.enumerateDevices().then(gotDevices);

function setup() {
    createCanvas(innerWidth, innerHeight);
    //copy the device info from console to create constraints for the webcams
    constraints1 = {
        video: {
            deviceId: "601312c7d0817bb8b099cc6d0b2be50ad89f244b10e37dee2652c6766c142df5",
            groupId: "6a366abf2947ab649e19760f291e5a4760eebf5a1b2a8d9b242c1391b4a54caf",
            kind: "videoinput",
            label: "FaceTime HD Camera"

        }
    }
    constraints2 = {
        video: {
            deviceId: "532c4c19fd96c288b62437723ba73ed96c3d3acb7885c844f6a33e6107c9380e",
            groupId: "bcedf30d2b8d6e961a20f6bcb9857db610a80ac0a0eef881d9f4fabac9fe21f0",
            kind: "videoinput",
            label: "C270 HD WEBCAM (046d:0825)"
        }
    }
    
    video1 = createCapture(constraints1);
    video2 = createCapture(constraints2);
    // video1.size(320,280);
}

function draw() {
    background(255);
    image(video1, 0, 0);
    image(video2, video1.width, 0);
}