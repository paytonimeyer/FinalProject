
var state1 = true;
var gamePlayBool = false;
var gameOver = false;


var ground;
var groundImg;
var bjork;

var bigRedPlanet;
var bigRedPlanetImg;

//var platform;

var JUMP = -7;

var score = 0;


function preload(){
  
}

function setup() {
	//createCanvas(640,360); 
	createCanvas(windowWidth,1000);
	gridOfStars();

	makePlanks();

	bjork = createSprite(width/2, 0, 248, 348);
	var bjorkWalk = bjork.addAnimation("walking", "assets/bjork-walk/bjork-walk-20.png", "assets/bjork-walk/bjork-walk-01.png");

	bjork.shapeColor = color(128);


	bigRedPlanetImg = loadImage("assets/big-red-planet.png");

}


function draw() {
  starRotationBG();

  playButton();
  gamePlay();

}



function playButton() {
	if (state1) {
  		startScreen();
  	}
}


function gamePlay() {
	if (gamePlayBool) {

  //drkblue Ring
  push();
  translate(width/2, height*2);
  rotate(radians(r7));
  imageMode(CENTER);
  image(bigRedPlanetImg, 0, 0);
  r7 -=.05;
  pop();

		drawSprite(bigRedPlanet);

		//Gravity for Bjork
		bjork.addSpeed(0.25, 90);
		//bjork.collide(ground);
		bjork.collide(plankBottoms);

		//move ground to the left
		//ground.position.x -=  3;
	  

		/*if(ground.position.x<0){
			ground.position.x =   width;
		}*/


		bjork.overlap(sugarcubes, getSugar);


		//drawSprite(ground);
		drawSprite(bjork);
		//drawSprite(sugarcubes);

		scoreBoard();
		movePlanks();
  		
  		drawSprites();

	}
}


function mousePressed(){
 	 //hit start button to play game 
 	 if(mouseX < width/2+60 && mouseX > width/2-60 && mouseY < height/2+115 && mouseY > height/2+75 && state1 === true){
	    state1 = !state1;
	    gamePlayBool = !gamePlayBool;
 	 }

  	//Make Bjork jump during gameplay
    bjork.velocity.y = JUMP;
}


function getSugar(bjork, sugar) {
	//if (bjork.overlap(sugarcubes)) {
    	sugar.remove();
  		score += 1;
  	//}
}


function scoreBoard(){
	fill(255);
  	noStroke();
	textSize(72);
	textAlign(CENTER, CENTER);
	  
	if (score < 100) {
		text(score, width - 75, 75);
	}

	else {
		text("you win!", width/2, height/2);
	}
}


