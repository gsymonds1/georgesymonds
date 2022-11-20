let faceapi;
let video;
let detections;
let camWidth;
let camHeight;
let xvar = 0;



// by default all options are set to true
const detection_options = {
    withLandmarks: true,
    withDescriptors: false,
}


function setup() {
    createCanvas(350, 370);
    background(10);

    camWidth = 350;
    camHeight = 270;
    

    // load up your video
    video = createCapture(VIDEO);
    video.size(width, 270); //dimension of cathing spots
    // video.hide(); // Hide the video element, and just show the canvas
    faceapi = ml5.faceApi(video, detection_options, modelReady)
    textAlign(LEFT);
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
    // console.log(result)
    detections = result;

    // background(220);
    
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
        const x = alignedRect._box._x
        const y = alignedRect._box._y
        const boxWidth = alignedRect._box._width
        const boxHeight  = alignedRect._box._height
        
        noFill();
        stroke(161, 95, 251);
        strokeWeight(2);
        
        stroke(255,0,0);
        rect(x, y, boxWidth, boxHeight); //damainrect

        xvar = x+(boxWidth/2) //saves the last x value of target to xvar
    }

    
}

function setupguideslines(){
    
    

    stroke(255,255,0);
    //175
    if (xvar > 170 && xvar < 180){
        stroke(255,0,0);
        //SHOOT HERE -> send to p5
    }
    rect((xvar)-7,(camHeight/2)-7,14,14);//target point

    push();
    stroke (0)
    
    line(camWidth/2,0,camWidth/2,camHeight); //x-y!,x-y! midpoint

    line(xvar,camHeight/2,camWidth/2,camHeight/2);//coreection line

    pop();


    //OUTPUT TEXT  (175 is midpoint)
    push();
    stroke (100);
    fill(255);
    text ("xVar = "+ xvar,10,camHeight + 20);
    text ("x(r).Correction = "+ (175 - xvar),10,camHeight + 40);
    pop();
    
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


/*
function draw(){
    
    console.log("draw");

}
*/