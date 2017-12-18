//...GAME BACKGROUND...// 

//Image Variables
var bigRedPlanet;
var bigRedPlanetImg;

//radian variables
var r20 = 0;
var r21 = 0;
var r22 = 0;

//Big Red Planet Background Image and orbiting elements
function bigRedPlanetBG(){

	//Big Red Planet Background Image
	push();
	translate(width/2, height*2);
	rotate(radians(r7));
	imageMode(CENTER);
	image(bigRedPlanetImg, 0, 0);
	r7 -=.05;

		//Satellite
		push();
		translate(0, 0);
		rotate(radians(r7));
		imageMode(CENTER);
		animation(satellitespin, 0, -1550,);
		pop();
 
	pop();

  //tiny blue planet
  push();
  translate(width/2, height*2);
  rotate(radians(r20));
  imageMode(CENTER);
  image(littlebluePlanetImg, 1750, 0,);
  r20 -=.03;

    //rotate moon around tiny blue planet
    push();
    translate(1750, 0,)
    rotate(radians(r21));
    fill(255);
    noStroke();
    ellipse(13,13,5,5);
    r21 +=.01;
    pop();

  pop();


  //little purple planet
  push();
  translate(width/2, height*2);
  rotate(radians(r22));
  imageMode(CENTER);
  image(littlepurplePlanetImg, 0, 1800);
  r22 -=.04;

    //rotate moon around tiny purple planet
    push();
    translate(0, 1800)
    rotate(radians(r21));
    fill(255);
    noStroke();
    ellipse(10,10,2,2);
    r21 +=.01;
    pop();

  pop();
}