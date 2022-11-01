// the transistor which controls the motor will be attached to digital pin 3
int motorControl = 3;

void setup() {
  // make the transistor's pin an output:
  pinMode(motorControl, OUTPUT);  
}

// the loop routine runs over and over again forever:
void loop() {

    // ramp up the motor speed
    for(int i = 0; i <= 150; i++){
      analogWrite(motorControl, i);
      delay(50);
    }

    // ramp down the motor speed
    for(int i = 150; i >= 0; i--){
      analogWrite(motorControl, x);
      delay(50);
    }    
  delay(1);        // delay in between reads for stability
}
