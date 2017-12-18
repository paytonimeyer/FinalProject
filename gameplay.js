var JUMP = -7;
var score = 0;
var bjorkSugarBool = false;
//var bjork;

var scoreSugar;
//var bjorks;


function bjorkSetup(){

	var bjork = createSprite(width/2, 200, 248, 339);
	bjork.setCollider("rectangle", 0, 0, 100, 348);
	bjorks.add(bjork);
	bjork.addAnimation("walking", walking);
	bjork.addAnimation("jumpup", jumpup);

}

function volSugarSetup(){
	scoreSugar = createSprite(width - 175, 70, 70, 70);
	scoreSugar.addImage(bigsugarcubeIMG);


	vol = createSprite(75, 70, 70, 70);
	var volOn = vol.addAnimation("on", "assets/vol-on.png");
	var volOff = vol.addAnimation("off", "assets/vol-off.png");
}

function gamePlay() {

	if (gamePlayBool) {

		for (var i = 0; i < bjorks.length; i++) {
			bjorks[i].changeAnimation("walking");
		}
    	
    	if(mouseIsPressed) {
	    	for (var i = 0; i < bjorks.length; i++) {
				bjorks[i].changeAnimation("jumpup");
			}
		}



		//Big Red Planet
		bigRedPlanetBG();
		drawSprite(bigRedPlanet);

		//Move Initial Plank
  		//firstplankBottoms.position.x -= 3;
    	//firstplankTops.position.x -= 3;
    	//ships.position.x -= 3;
		//removeFirstPlank();
		moveFirstPlank();

		//Planks
		makePlanks();

		//Gravity for Bjork
	    	for (var i = 0; i < bjorks.length; i++) {
				bjorks[i].addSpeed(0.25, 90);
			}

		//bjork.collide(ground);
		ships.collide(firstplankBottoms);
		bjorks.collide(firstplankBottoms);
		bjorks.collide(plankBottoms);
		bjorks.collide(nukes);
		bjorks.collide(kimJongUns);
		//Bjork Eats Sugar
		bjorks.overlap(sugarcubes, getSugar);
		//Bjork Falls
		bjorkFalls();

  		drawSprites();
  		scoreBoard();
		drawSprites(bjorks);

	}
}

//Remove sugar when Bjork collides/Increase score by 1
function getSugar(bjork, sugar) {
    	sugar.remove();
  		score += 1;
  		ding.play();
}

//Display Scoreboard
function scoreBoard(){
	drawSprite(scoreSugar);

	fill(255);
  	noStroke();
  	textFont(brandon);
	textSize(72);
	textAlign(CENTER, CENTER);

	text(score, width - 75, 55);	  
	/*if (score < 100) {
		text(score, width - 75, 55);
	}

	else {
		text("you win!", width/2, height/2);
	}*/
}

function highScore(){
	drawSprite(scoreSugar);

	fill(255);
  	noStroke();
  	textFont(brandon);
	textSize(72);
	textAlign(CENTER, CENTER);
	text(score, width - 75, 55);	  
	/*if (score < 100) {
		text(score, width - 75, 55);
	}

	else {
		text("you win!", width/2, height/2);
	}*/
}

function bjorkFalls() {
	for (var i = 0; i < bjorks.length; i++) {

	 	if(bjorks[i].position.y > 1100 || bjorks[i].position.x < -100){
			bjorks[i].remove();
	 		gamePlayBool = false;
		    gameOverBool = true;
		    //removeObstacles();

		    for (var i = plankBottoms.length - 1; i >=0; i--) {
				plankBottoms[i].remove();
			}
	
			for (var i = plankTops.length -1; i >=0; i--) {
				plankTops[i].remove();
			}
		
			for (var i = sugarcubes.length - 1; i >=0; i--) {
				sugarcubes[i].remove();
			}
	
			for (var i = nukes.length - 1; i >=0; i--) {
				nukes[i].remove();
			}
	
			for (var i = kimJongUns.length - 1; i >=0; i--) {
				kimJongUns[i].remove();
			}
			
			for (var i = firstplankBottoms.length - 1; i >=0; i--) {
				firstplankBottoms[i].remove();
			}
	
			for (var i = firstplankTops.length-1; i >=0; i--) {
				firstplankTops[i].remove();
			}
	
			for (var i = ships.length- 1; i >=0;  i--) {
				ships[i].remove();
			}

 		} 
	}
}


