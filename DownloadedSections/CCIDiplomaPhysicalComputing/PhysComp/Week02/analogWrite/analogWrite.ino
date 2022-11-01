void setup()
{
  pinMode(11, OUTPUT);
}

void loop()
{
  analogWrite(11, 10);
  delay(?); // Delay a little bit to improve simulation performance
  analogWrite(11, 50);
  delay(?); // Delay a little bit to improve simulation performance
  analogWrite(11, 150);
  delay(?); // Delay a little bit to improve simulation performance
}
