void setup()
{
  pinMode(2, INPUT_PULLUP); //CHANGE THE PINMODE TO BE INPUT_PULLUP
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  if (digitalRead(2) == HIGH) { //WHAT MIGHT YOU NEED TO CHANGE IN THE LOGIC CONDITION ?
    digitalWrite(LED_BUILTIN, HIGH);
  }
  delay(10); 
}
