var JUMP = -7;
var score = 0;

var bjork;

var scoreSugar;
//var bjorks;


function bjorkSetup(){

	bjork = createSprite(width/2, height/2, 248, 339);
	bjork.setCollider("rectangle", 0, 0, 100, 348);
	var bjorkWalk = bjork.addAnimation("walking", "assets/bjork-walk/bjork-walk-20.png", "assets/bjork-walk/bjork-walk-01.png");
	var bjorkJump = bjork.addAnimation("jumpup", "assets/bjork-jump/bjork-jump-01.png", "assets/bjork-jump/bjork-jump-05.png");
	//circle.looping = false;


	scoreSugar = createSprite(width - 175, 70, 70, 70);
	scoreSugar.addImage(bigsugarcubeIMG);


	vol = createSprite(75, 70, 70, 70);
	var volOn = vol.addAnimation("on", "assets/vol-on.png");
	var volOff = vol.addAnimation("off", "assets/vol-off.png");
	//bjork.setCollider("rectangle", 0, 0, 100, 348);
	//var bjorkWalk = bjork.addAnimation("walking", "assets/bjork-walk/bjork-walk-20.png", "assets/bjork-walk/bjork-walk-01.png");
	//var bjorkJump = bjork.addAnimation("jumpup", "assets/bjork-jump/bjork-jump-01.png", "assets/bjork-jump/bjork-jump-05.png");
	//circle.looping = false;
}


function gamePlay() {
	if (gamePlayBool) {
		//musicMain.setVolume(.5);

    	bjork.changeAnimation("walking");
    	
    	if(mouseIsPressed) {
    		bjork.changeAnimation("jumpup");

		}

		//Big Red Planet
		bigRedPlanetBG();
		drawSprite(bigRedPlanet);

		//Move Initial Plank
  		firstplankBottom.position.x -= 3;
    	firstplankTop.position.x -= 3;
    	ship.position.x -= 3;
		removeFirstPlank();

		//Planks
		makePlanks();


		//Gravity for Bjork
		bjork.addSpeed(0.25, 90);
		//bjork.collide(ground);
		ship.collide(firstplankBottom);
		bjork.collide(firstplankBottom);
		bjork.collide(plankBottoms);
		//Bjork Eats Sugar
		bjork.overlap(sugarcubes, getSugar);
		//Bjork Falls
		bjorkFalls();


  		drawSprites();
  		scoreBoard();
		drawSprite(bjork);


	}
}

//Remove sugar when Bjork collides/Increase score by 1
function getSugar(bjork, sugar) {
	//if (bjork.overlap(sugarcubes)) {
    	sugar.remove();
  		score += 1;
  	//}
}

//Display Scoreboard
function scoreBoard(){

	//scoreSugar = createSprite(width - 175, 75, 70, 70);
	//scoreSugar.addImage(bigsugarcubeIMG);

	drawSprite(scoreSugar);

	fill(255);
  	noStroke();
  	textFont(brandon);
	textSize(72);
	textAlign(CENTER, CENTER);
	  
	if (score < 100) {
		text(score, width - 75, 55);
	}

	else {
		text("you win!", width/2, height/2);
	}
}

function bjorkFalls() {
 	if(bjork.position.y > 1100 || bjork.position.x < -100){
		gamePlayBool = false;
	    gameOverBool = true;
 		bjork.position.y = 200;
 		bjork.position.x = width/2;
 	}
}