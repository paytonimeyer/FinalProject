// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var person;

function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed(){
if (key == ' '){
	var jump = createVector(0,-5);
	person.applyForce(jump);
}

}

function draw() {
  background(51);

  var gravity = createVector(0,0.1);
  person.applyForce(gravity);


  person.update();
  person.edges();
  person.display();

}

