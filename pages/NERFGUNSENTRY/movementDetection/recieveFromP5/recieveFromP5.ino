#include <Servo.h>


Servo servo;


  int armedLED = 10;
  int triggerLED = 11;


void setup() {
  Serial.begin(115200);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);



}


void loop() {
  
  // Read serial input: if triggered should be 255
  if (Serial.available() > 0) { //if serial is available
      // this would be the place to use the incoming value to drive an output
      int val = Serial.parseInt(); //convert the String to an int (0 or 1)

      if (val = 1){
        digitalWrite(armedLED, LOW);
        digitalWrite(triggerLED, HIGH);
      } else if (val = 0){
        digitalWrite(triggerLED, LOW);
        digitalWrite(armedLED, HIGH);
      }
  
      analogWrite(9, val); //output light on at ~9

    /*if (val == 255){//if on target
      //shoot
      Serial.println("say hello to my little friend");

      while (val == 255) {
          servo.write(180);
          delay(550);
          servo.write(5); 
          delay(550);
          //need to get new serial reading here
      }
      */
  }



  delay(15);
}



