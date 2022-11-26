let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv";
let table;


function setup() {
    createCanvas(500, 450);
    rectMode(CENTER);
    noStroke();
    table = loadTable(url, 'csv', 'header');
  }
  
  function draw() {
    background(220);
    if(table.getRowCount()==0) return;

    let rows = table.getRowCount();
    let x = 70; 
    let y = 50;
    
    for (let row=0; row<rows; row++){
        let name = table.getString(row, 'place');
        let magnitude = table.getString(row,'mag');
        //ellipse(x, y, magnitude*12, magnitude*12);


        //const myArray = name.split(" of ");
        drawVolcano(x,y,magnitude);
        fill(255);
        text(name + '\n' + magnitude, x-50, y+65);    

        //calcualte x n y of next volcano
        x += width/3; 
        if (x > width-70){
            y += 150;
            x = 70;
        }
    }
  }


  function drawVolcano(x, y, size) {
    //sky drawin
    fill(135,206,235) ;
    rect(x+15, y+15, width/3, 150);
    
    //grass drawin
    fill(0,150,0) ;
    rect(x+15, y+72, width/3, 35);
    
    //volcano drawin
    
    for (let i = 0; i <4; i++){
      fill(130,60,20);
      if (i===0){
        fill(200,30,10);
      }
    ellipse (x+10,  30 + y + (i*10),  20 +(i*10)  , 5 +(i*10));
    }
    
    //cloud drawin
    for (let i = 0; i<5; i++) {
      smokeColour = color(255,255,255);
      smokeColour.setAlpha(random(100,200));
      fill(smokeColour)
    
    
      xpos = x + (i*10);
    
      ellipse(map(noise(xpos),0,1,x-25,x+25), 30 + y - (i*10), (i*10) * size/2, (i*10) * size/2);
    }
    }