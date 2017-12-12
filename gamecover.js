
var cover;
var greenPlanet;

var r = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;
var r5 = 0;
var r6 = 0;
var r7 = 0;

function preload(){
cover = loadImage("assets/bjork-cover.jpg");
greenPlanet = loadImage("assets/green-planet.png");
saturnPlanet = loadImage("assets/saturn-planet.png");
purplePlanet = loadImage("assets/purple-planet.png");
redPlanet = loadImage("assets/red-planet.png");
bluePlanet = loadImage("assets/blue-planet.png");
blueRing = loadImage("assets/blue-ring.png");
drkblueRing = loadImage("assets/drkblue-ring.png");
gameTitle= loadImage("assets/game-title.png");

}

function gameCover(){

  //image(cover, 0, 0);

  //drkblue Ring
  push();
  translate(width/2, height/2);
  rotate(radians(r7));
  imageMode(CENTER);
  image(drkblueRing, 0, 0);
  r7 -=.05;
  pop();

  //blue Ring
  push();
  translate(width/2, height/2);
  rotate(radians(r6));
  imageMode(CENTER);
  image(blueRing, 0, 0);
  r6 -=.15;
  pop();

  //red Planet
  push();
  translate(width/2, height/2);
  imageMode(CENTER);
  image(redPlanet, 0, 0);
  pop();


  //rotate green plant
  push();
  translate(width/2, height/2);
  rotate(radians(r));
  fill(255);
  imageMode(CENTER);
  image(greenPlanet, 180, 180);
  r +=.5;

    //rotate moon around green planet
    push();
    translate(180, 180)
    rotate(radians(r4));
    fill(255);
    ellipse(50,50,10,10);
    r4 +=5;
    pop();

  pop();

  //rotate Saturn
  push();
  translate(width/2, height/2);
  rotate(radians(r2));
  imageMode(CENTER);
  image(saturnPlanet, -200, 100);
  r2 +=.5;
  pop();

  //rotate Purple
  push();
  translate(width/2, height/2);
  rotate(radians(r2));
  imageMode(CENTER);
  image(purplePlanet, 200, -100);
  r3 +=.75;
  pop();

  //rotate Blue Planet
  push();
  translate(width/2, height/2);
  rotate(radians(r2));
  imageMode(CENTER);
  image(bluePlanet, -250, -250);
  r5 +=.75;
  pop();

  //game Title
  push();
  translate(width/2, height/2);
  imageMode(CENTER);
  image(gameTitle,0,0);
  pop();




}