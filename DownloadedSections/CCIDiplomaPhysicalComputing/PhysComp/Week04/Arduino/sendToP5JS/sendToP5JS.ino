void setup()
{
  // Connect to serial
  Serial.begin(9600);

 
}

void loop() {
 

  int valx = analogRead(A0);
  int valy = analogRead(A1);
  Serial.print(valx);
  Serial.print(",");
  Serial.println(valy);
  // 10 readings per second
  delay(100);
}
