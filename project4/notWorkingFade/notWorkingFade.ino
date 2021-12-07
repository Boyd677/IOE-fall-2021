int led = 13;
int led1 = 12;
int led2 = 11;
int led3 = 10;
int sensor = 2;
int state = LOW;
int val = 0;

// the setup function runs once when you press reset or power the board
void setup() {
 
  pinMode(led, OUTPUT);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(sensor, INPUT);
  Serial.begin(9600);

}
// the loop function runs over and over again forever
void loop() {
  val = digitalRead(sensor);
  if (val == HIGH){
    digitalWrite(led, HIGH);
    delay(1000);
    digitalWrite(led,LOW);
    delay(0);

    digitalWrite(led1, HIGH);
    delay(1000);
    digitalWrite(led1,LOW);
    delay(0);

    digitalWrite(led2, HIGH);
    delay(1000);
    digitalWrite(led2,LOW);
    delay(0);

    digitalWrite(led3, HIGH);
    delay(1000);
    digitalWrite(led3,LOW);
    delay(0);
    
    if (state == LOW) {
      Serial.println("Motion detected!"); 
      state = HIGH; 

      
    }
  }
else {
      if (state == LOW){
      digitalWrite(led, LOW);
      delay(10);

  if (state == HIGH) {
    Serial.println("Motion Stopped!");
    state = LOW;
  }
}
}
}
