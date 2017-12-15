
//Game State Booleans
var state1 = true;
var gamePlayBool = false;
var gameOverBool = false;



//Preload Assets
function preload(){

  //Sound FX
  music = loadSound("assets/sound/bgMusic.mp3");

  //Title Screen/Game Over Elements
  cover = loadImage("assets/bjork-cover.jpg");
  greenPlanet = loadImage("assets/green-planet.png");
  saturnPlanet = loadImage("assets/saturn-planet.png");
  purplePlanet = loadImage("assets/purple-planet.png");
  redPlanet = loadImage("assets/red-planet.png");
  bluePlanet = loadImage("assets/blue-planet.png");
  bigbluePlanet = loadImage("assets/bigblue-planet.png");
  blueRing = loadImage("assets/blue-ring.png");
  drkblueRing = loadImage("assets/drkblue-ring.png");
  bigRing = loadImage("assets/big-ring.png");
  gameTitle = loadImage("assets/game-title.png");
  gameOverTitle = loadImage("assets/gameover.png");

  //BG Elements
  bigRedPlanetImg = loadImage("assets/big-red-planet.png");
  satelliteIMG = loadImage("assets/satellite.png");
  bigRedPlanetImg = loadImage("assets/big-red-planet.png");

  //Interactive Game elements
  play = loadImage("assets/play.png");
  plankTopIMG = loadImage("assets/plank-top.png");
  plankBottomIMG = loadImage("assets/plank-bottom.png");
  sugarcubeIMG = loadImage("assets/sugarcube.png");

}


function setup() {
	music.play();

	createCanvas(1500,1000);
	gridOfStars();

  firstPlankSetup();
	plankSetup();
	bjorkSetup();
}

function draw() {
	//Background 
  starRotationBG();
    //garbageMan(); 

	//Game States
	playButton();
	gamePlay();
	gameOver();


}

//User Interactions
function mousePressed(){
	
 	 //hit start button to play game 
 	 if(mouseX < width/2+60 && mouseX > width/2-60 && mouseY < height/2+115 && mouseY > height/2+75 && state1 === true){
	    state1 = !state1;
	    gamePlayBool = !gamePlayBool;

 	 }

 	 //hit restart button to restart game
 	 if(mouseX < width/2+60 && mouseX > width/2-60 && mouseY < height/2+115 && mouseY > height/2+75 && gameOverBool === true){

	    gamePlayBool = !gamePlayBool;
	    gameOverBool = !gameOverBool;
  		gamePlay();
	    
	    score = 0;
 	 }

  	//Make Bjork jump during gameplay
    bjork.velocity.y = JUMP;
}




