let faceapi;
let video;
let detections;
let camWidth;
let camHeight;
let xvar = 0;

//for connecting to arduino
let port;
let connectBtn;
let triggerPulse =0; //if on shoot


// by default all options are set to true
const detection_options = {
    withLandmarks: true,
    withDescriptors: false,
}

//detecting largest face
detectedfaceXwidth = [];
detectedfaceXpos = [];

//webcam selection
let list;
let selectedItem = -1;
let drop = false;
let itemY = [];
var deviceList = [];


function setup() {
    createCanvas(350, 370);
    background(10);

    camWidth = 350;
    camHeight = 270;
    
    // load up your video
    video = createCapture(VIDEO);
    video.size(width, 270); //dimension of cathing spots
    // video.hide(); // Hide the video element, and just show the canvas
    console.log("setupcomplete")
    faceapi = ml5.faceApi(video, detection_options, modelReady)
    textAlign(LEFT);

    //connecting to arduino
    port = createSerial();
    // any other ports can be opened via a dialog after
    // user interaction (see connectBtnClick below)
    connectBtn = createButton('Connect to Arduino');
    connectBtn.position(10, 450);
    connectBtn.mousePressed(connectBtnClick);

}


function modelReady() {
    console.log('ready!')
    console.log(faceapi)
    faceapi.detect(gotResults)
    

}

function gotResults(err, result) {
    if (err) {
        console.log(err)
        return
    }

     console.log(result)
    detections = result;

    // background(220);
    background(10);
    image(video, 0,0, 350, 270) //dimension of second traced video
    if (detections) {
        if (detections.length > 0) {
            // console.log(detections)
            drawBox(detections)
            drawLandmarks(detections)
        }

    }
    setupguideslines();
}


function drawBox(detections){
    for(let i = 0; i < detections.length; i++){
        const alignedRect = detections[i].alignedRect;
        console.log(detections[i]);
        const x = alignedRect._box._x
        const y = alignedRect._box._y
        const boxWidth = alignedRect._box._width
        const boxHeight  = alignedRect._box._height
        
        noFill();
        stroke(161, 95, 251);
        strokeWeight(2);
        
        stroke(255,0,0);
        rect(x, y, boxWidth, boxHeight); //da rectsangles on faces
        push();
            fill (10);
            text(alignedRect._box._width,x,y); //print head width
        pop();



        //xvar = x+(boxWidth/2) //saves the last x value of target to xvar
        
        xvar = alignedRect._box._x+(boxWidth/2) //
        
        if (detections.length >1){
            console.log("MULTIPLE TARGETS DECTECTED");

            for (t = 0; t < detections.length; t++){  //get size of all faces save 2 array
                detectedfaceXwidth[t] = detections[t].alignedRect._box._width
                detectedfaceXpos[t] = detections[t].alignedRect._box._x
            }

            //get largest array
            var max = Math.max(...detectedfaceXwidth);

            const bigHeadIndex = detectedfaceXwidth.indexOf(max);
            console.log("biggest head: "+bigHeadIndex+ ": " + detectedfaceXwidth[bigHeadIndex]); // 👉️ 3
            xvar = detections[bigHeadIndex].alignedRect._box._x+(boxWidth/2)

        } 
    }
}

function setupguideslines(){
    
    stroke(255,255,0);
    
    triggerPulse = 0;
    if (xvar > 160 && xvar < 190){
        stroke(255,0,0);
        //SHOOT HERE -> send to p5

        triggerPulse = 1;
    }

    rect((xvar)-7,(camHeight/2)-7,14,14);//target point  (modify this to tagret largest sqaure)  - link to largest square

    push();
    stroke (0)
    
    line(camWidth/2,0,camWidth/2,camHeight); //x-y!,x-y! midpoint

    line(xvar,camHeight/2,camWidth/2,camHeight/2);//correction line

    pop();


    //OUTPUT TEXT  (175 is midpoint)
    push();
    stroke (100);
    fill(255);
    text ("xVar = "+ xvar,10,camHeight + 20);

    let rCorrection = parseInt(175 - xvar);

    text ("x(r).Correction = "+ rCorrection,10,camHeight + 40);
    pop();
    

    if(frameCount%10==0){ //writing output to arduino
        port.write(triggerPulse+","+rCorrection+'\n'); //finish with a newline character for Arduino recieving
       console.log("Serial Print: "+triggerPulse+","+rCorrection);
    }

    // changes button label based on connection status
    if (!port.opened()) {
        connectBtn.html('Connect to Arduino');
      } else {
        connectBtn.html('Disconnect');
    }


    faceapi.detect(gotResults);
}


function drawLandmarks(detections){
    /*
    noFill();
    stroke(161, 95, 251)
    strokeWeight(2)

    for(let i = 0; i < detections.length; i++){
        const mouth = detections[i].parts.mouth; 
        const nose = detections[i].parts.nose;
        const leftEye = detections[i].parts.leftEye;
        const rightEye = detections[i].parts.rightEye;
        const rightEyeBrow = detections[i].parts.rightEyeBrow;
        const leftEyeBrow = detections[i].parts.leftEyeBrow;

        drawPart(mouth, true);
        drawPart(nose, false);
        drawPart(leftEye, true);
        drawPart(leftEyeBrow, false);
        drawPart(rightEye, true);
        drawPart(rightEyeBrow, false);

    }
    */
}

function drawPart(feature, closed){
    /*
    beginShape();
    for(let i = 0; i < feature.length; i++){
        const x = feature[i]._x
        const y = feature[i]._y
        vertex(x, y)
    }
    
    if(closed === true){
        endShape(CLOSE);
    } else {
        endShape();
    }
    */
}


function connectBtnClick() {
    if (!port.opened()) {
      port.open('Arduino', 57600);
    } else {
      port.close();
    }
}