var JUMP = -7;
var score = 0;

var bjork;
//var bjorks;


function bjorkSetup(){

	bjork = createSprite(width/2, 0, 248, 348);
	var bjorkWalk = bjork.addAnimation("walking", "assets/bjork-walk/bjork-walk-20.png", "assets/bjork-walk/bjork-walk-01.png");
	bjork.shapeColor = color(128);

}


function gamePlay() {
	if (gamePlayBool) {

		//Big Red Planet
		bigRedPlanetBG();
		drawSprite(bigRedPlanet);

		//Move Initial Plank
  		firstplankBottom.position.x -= 3;
    	firstplankTop.position.x -= 3;
		removeFirstPlank();

		//Planks
		makePlanks();


		//Gravity for Bjork
		bjork.addSpeed(0.25, 90);
		//bjork.collide(ground);
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

function bjorkFalls() {
 	if(bjork.position.y > 1100){
		gamePlayBool = !gamePlayBool;
	    gameOverBool = !gameOverBool;
 		bjork.position.y = 500;
 	}
}