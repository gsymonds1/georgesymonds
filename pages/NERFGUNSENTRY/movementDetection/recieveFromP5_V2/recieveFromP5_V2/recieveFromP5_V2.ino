#include <Servo.h>

Servo servo;

void setup() {
  Serial.begin(115200);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);

  servo.write(5);
}

void loop() {
  // Read serial input:
  if (Serial.available() > 0) { //if serial is available
      // this would be the place to use the incoming value to drive an output
      int serialRead = Serial.parseInt(); //convert the String to an int


      //LED ON/OFF STATES
      if (serialRead == 255) {
        analogWrite(11, 255);  //10 written with 255
        analogWrite(10, 0);

        servo.write(180);
        delay(550);
        servo.write(5); 
        delay(550);

        
      } else {
        analogWrite(10, 255); //11 written with 255
        analogWrite(11, 0);
      }

      

      delay(15);
    
  }
}

void triggerShoot(){

  
  
}
