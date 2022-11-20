void setup() {
  Serial.begin(9600);
}

void loop() {
  // if there's any serial available, read it:
  while (Serial.available() > 0) {

    // look for the next valid integer in the incoming serial stream:
    int val1 = Serial.parseInt();
    // do it again:
    int val2 = Serial.parseInt();


    // look for the newline. That's the end of your sentence:
    if (Serial.read() == '\n') {

      // fade the LED:
      analogWrite(9, val1);
      analogWrite(10, val2);
  

    }
  }
}


