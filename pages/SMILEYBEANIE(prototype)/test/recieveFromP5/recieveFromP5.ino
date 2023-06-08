
void setup() {
  Serial.begin(115200);
  pinMode(9, OUTPUT);
}

void loop() {
  // Read serial input:
  if (Serial.available() > 0) { //if serial is available
      // this would be the place to use the incoming value to drive an output
      int val = Serial.parseInt(); //convert the String to an int
      analogWrite(9, val);
      delay(15);
    
  }
}
