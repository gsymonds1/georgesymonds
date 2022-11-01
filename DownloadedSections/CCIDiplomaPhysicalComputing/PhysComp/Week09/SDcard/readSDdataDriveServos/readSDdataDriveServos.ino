// parse integers out of an SD card file and control servo
// 4 august 2019

/*
  BASED ON SD card file dump

  This example shows how to read a file from the SD card using the
  SD library and send it over the serial port.

  The circuit:
   SD card attached to SPI bus as follows:
 ** MOSI - pin 11
 ** MISO - pin 12
 ** CLK - pin 13
 ** CS - pin 4 (for MKRZero SD: SDCARD_SS_PIN)

  created  22 December 2010
  by Limor Fried
  modified 9 Apr 2012
  by Tom Igoe

  This example code is in the public domain.

*/

#include <SPI.h>
#include <SD.h>
#include <Servo.h>
Servo servo1;
Servo servo2;
const int chipSelect = 4;

int servo1Pos;
int servo2Pos;

void setup()
{
  servo1.attach(9);
  servo2.attach(6); //make sure you don't use a pin the SD card breakout uses!
  Serial.begin(9600);

  Serial.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    Serial.println("Card failed, or not present");
    // don't do anything more:
    return;
  }
  Serial.println("card initialized.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  File dataFile = SD.open("data.txt");

  // if the file is available, read from it:
  if (dataFile) {
    while (dataFile.available())
    {
      //parse the next 2 values out of the file:
      servo1Pos = dataFile.parseInt();
      servo2Pos = dataFile.parseInt();
      //print them to the monitor:
      Serial.print("Servo 1: ");
      Serial.print(servo1Pos);
      Serial.print(", Servo 2: ");
      Serial.println(servo2Pos);
      //and write to the servos:
      servo1.write(servo1Pos);
      servo2.write(servo2Pos);
      //let the servos run at that speed a while
      delay(1000);
      //go back to the top for the next line of data...
      //or ....
    }
    Serial.println(".... no more data");
    dataFile.close();
  }
  // if the file isn't open, pop up an error:
  else {
    Serial.println("error opening the data file");
  }
}

void loop()
{
}