#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;  // variable to store the servo position
int servoPin = 9;
int buttonPin = 2;
int buttonState = 0;        //current state of button
int lastButtonState = 0;    //last state of button press
int buttonPushCounter = 0;  // counter for the number of button presses

void setup() {
  myservo.attach(servoPin);  // attaches the servo on pin 9 to the servo object
  // initialize the button pin as a input:
  pinMode(buttonPin, INPUT);
  // initialize serial communication:
  Serial.begin(9600);
}


void loop() {

buttonControl();//execute the function

switch (buttonPushCounter) {
  case 1:
    //do something when buttonPushCounter equals 1
myservo.write(10);
    break;
  case 2:
    //do something when buttonPushCounter equals 2
myservo.write(45);
    break;
	case 3:
myservo.write(90);
		break;
	case 4:
myservo.write(180);
		break;
  default:
myservo.write(0);
    // if nothing else matches, do the default
    // default is optional
    break;
}
}

void buttonControl(){
  buttonState = digitalRead(buttonPin);
// compare the buttonState to its previous state
  if (buttonState != lastButtonState) {
    // if the state has changed, increment the counter
    if (buttonState == HIGH) {
      // if the current state is HIGH then the button went from off to on:
      buttonPushCounter++;
      Serial.println("on");
      Serial.print("number of button pushes: ");
      Serial.println(buttonPushCounter);
    } else {
      // if the current state is LOW then the button went from on to off:
      Serial.println("off");
    }
    // Delay a little bit to avoid bouncing
    delay(50);
  }
  // save the current state as the last state, for next time through the loop
  lastButtonState = buttonState;
}
