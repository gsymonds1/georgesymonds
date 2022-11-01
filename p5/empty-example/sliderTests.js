let slider1;
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight)
  slider1 = createSlider (0, 255, 100);
  slider1.position(100, 100);
  slider1.style('width', '80px');
  

  
}

function draw() {
  // put drawing code here  THESE THE CICRLCES
  let sliderValue = slider1.value();
  background(sliderValue);
  Text()
  
}