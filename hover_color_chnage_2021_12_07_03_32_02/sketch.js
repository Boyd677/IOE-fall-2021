//William Boyd
// Sketch idea https://editor.p5js.org/sjnha/sketches/SJZtDjfS-
// colour theory and opacity  https://p5js.org/learn/color.html
// input photo https://p5js.org/reference/#/p5/image
var x = 300;
var y = 500;
var r = 210;
let img;

function preload(){
  // My own photo in my own office
  img = loadImage('img/office.jpg');
  
}

function setup() { 
  createCanvas(600, 800);
  image(img,0,0);
  
} 

function draw() { 
  // background(220);
  
  // https://p5js.org/reference/#/p5/image

  //turn on lights when mouse over to simulate a person entering the room
  if (dist (x,y,mouseX,mouseY) < r)
  {fill(200,150,240,5);
  // Create strings of lights
  noStroke();
  ellipse(145,100,15,15);
  ellipse(155,135,15,15);
  ellipse(145,170,15,15);
  ellipse(155,205,15,15);
  ellipse(145,240,15,15);
  ellipse(155,275,15,15);

  ellipse(445,20,15,15);
  ellipse(455,60,15,15);
  ellipse(445,100,15,15);
  ellipse(455,140,15,15);
  ellipse(445,180,15,15);
  ellipse(455,220,15,15);
  ellipse(445,260,15,15);
  ellipse(455,300,15,15);

  fill(200,75,240,1);
  rect(0, 0, 600,300);}
  else {image(img,0,0);
   }
  
}