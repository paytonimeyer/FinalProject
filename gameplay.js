//...GAMEPLAY...// 

//Gameplay variables 
var JUMP = -7;
var score = 0;
var bjorkSugarBool = false;
var scoreSugar;

//Initialize bjork sprite animations in setup
function bjorkSetup(){

	var bjork = createSprite(width/2, 200, 248, 339);
	bjork.setCollider("rectangle", 0, 0, 100, 348);
	bjorks.add(bjork);
	bjork.addAnimation("walking", walking);
	bjork.addAnimation("jumpup", jumpup);
}

//Initialize volume and sugar sprites in setup
function volSugarSetup(){
	scoreSugar = createSprite(width - 175, 70, 70, 70);
	scoreSugar.addImage(bigsugarcubeIMG);

	vol = createSprite(75, 70, 70, 70);
	var volOn = vol.addAnimation("on", "assets/vol-on.png");
	var volOff = vol.addAnimation("off", "assets/vol-off.png");
}

//GAMEPLAY
function gamePlay() {

	//If user is in gameplay mode, run the following 
	if (gamePlayBool) {

		//by default, Bjork should be walking
		for (var i = 0; i < bjorks.length; i++) {
			bjorks[i].changeAnimation("walking");
		}
    	
    	//when mouse is pressed, display rocket boost
    	if(mouseIsPressed) {
	    	for (var i = 0; i < bjorks.length; i++) {
				bjorks[i].changeAnimation("jumpup");
			}
		}

		//Display Big Red Planet BG Element
		bigRedPlanetBG();
		drawSprite(bigRedPlanet);

		//removeFirstPlank();
		moveFirstPlank();

		//Planks
		makePlanks();

		//Gravity for Bjork
	    for (var i = 0; i < bjorks.length; i++) {
			bjorks[i].addSpeed(0.25, 90);
		}

		//Collision functions
		ships.collide(firstplankBottoms);
		bjorks.collide(firstplankBottoms);
		bjorks.collide(plankBottoms);
		bjorks.collide(nukes);
		bjorks.collide(kimJongUns);
		//Bjork Eats Sugar Function
		bjorks.overlap(sugarcubes, getSugar);
		//Bjork Falls
		bjorkFalls();

  		drawSprites();
  		//Display Score
  		scoreBoard();
		drawSprites(bjorks);

		//User Messages
		clickToJump();
		avoidUnsNukes();
		killingIt();
		youreDoingGreat();
		unbelievable();
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
	//Sugar Cube Sprite
	drawSprite(scoreSugar);
	//Actual score 
	fill(255);
  	noStroke();
  	textFont(brandon);
	textSize(72);
	textAlign(CENTER, CENTER);
	text(score, width - 75, 55);	  
}

//......Messages to be displayed to user during gameplay......//
function clickToJump(){

	if (score < 3){
		fill(255);
	  	noStroke();
	  	textFont(brandonBold);
		textSize(22);
		textAlign(CENTER, CENTER);
		text("CLICK THE MOUSE TO JUMP UP!", width/2, 65);	
	}
}

function avoidUnsNukes(){

	if (score > 10 && score < 13){
		fill(255);
	  	noStroke();
	  	textFont(brandonBold);
		textSize(22);
		textAlign(CENTER, CENTER);
		text("AVOID KIM JONG UN AND HIS NUKES!", width/2, 65);	
	}
}

function youreDoingGreat(){

	if (score > 25 && score < 28){
		fill(255);
	  	noStroke();
	  	textFont(brandonBold);
		textSize(22);
		textAlign(CENTER, CENTER);
		text("YOU'RE DOING GREAT!", width/2, 65);	
	}
}

function killingIt(){

	if (score > 50 && score < 53){
		fill(255);
	  	noStroke();
	  	textFont(brandonBold);
		textSize(22);
		textAlign(CENTER, CENTER);
		text("KILLING IT!", width/2, 65);	
	}
}

function unbelievable(){

	if (score > 75 && score < 78){
		fill(255);
	  	noStroke();
	  	textFont(brandonBold);
		textSize(22);
		textAlign(CENTER, CENTER);
		text("UNBELIEVABLE! KEEP IT UP!", width/2, 65);	
	}
}

//Score
function highScore(){
	drawSprite(scoreSugar);

	fill(255);
  	noStroke();
  	textFont(brandon);
	textSize(72);
	textAlign(CENTER, CENTER);
	text(score, width - 75, 55);	  

}


//Game ends when Bjork gets pushed off screen.... Kill everything in gameplay mode/set to gameover mode
function bjorkFalls() {
	for (var i = 0; i < bjorks.length; i++) {

	 	if(bjorks[i].position.y > 1100 || bjorks[i].position.x < -100){
			bjorks[i].remove();
	 		gamePlayBool = false;
		    gameOverBool = true;
		    
		    //remove all objects from canvas
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


