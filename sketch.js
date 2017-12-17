
//Game State Booleans
var state1 = true;
var gamePlayBool = false;
var gameOverBool = false;
var volOnBool = true;

var un;
//var nukespin;
 //var unSpin;

//Preload Assets
function preload(){

  //Fonts
  brandon = loadFont('assets/fonts/BrandonGrotesqueRegular.otf');

  //Sound FX
  musicMain = loadSound("assets/sound/bgMusic.mp3");
  flame = loadSound("assets/sound/flame.mp3");
  ding = loadSound("assets/sound/ding.mp3");

  //Title Screen/Game Over Elements
  cover = loadImage("assets/bjork-cover.jpg");
  greenPlanet = loadImage("assets/green-planet.png");
  coverbjorkIMG = loadImage("assets/coverbjork.png");
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


  //Animated Sprites 
  un = loadAnimation("assets/un-spin/un-spin-01.png", "assets/un-spin/un-spin-36.png");
  unheadspin = loadAnimation("assets/un-head-spin/un-headspin-01.png", "assets/un-head-spin/un-headspin-36.png");
  walking = loadAnimation("assets/bjork-walk/bjork-walk-20.png", "assets/bjork-walk/bjork-walk-01.png");
  jumpup = loadAnimation("assets/bjork-jump/bjork-jump-01.png", "assets/bjork-jump/bjork-jump-05.png");
  nukespin = loadAnimation("assets/nuke-spin/nuke-spin-1.png", "assets/nuke-spin/nuke-spin-7.png");

  //var bjorkWalk = bjork.addAnimation("walking", "assets/bjork-walk/bjork-walk-20.png", "assets/bjork-walk/bjork-walk-01.png");

  //BG Elements
  bigRedPlanetImg = loadImage("assets/big-red-planet.png");
  satelliteIMG = loadImage("assets/satellite.png");
  bigRedPlanetImg = loadImage("assets/big-red-planet.png");

  //Interactive Game elements
  play = loadImage("assets/play.png");
  plankLongTopIMG = loadImage("assets/plank-long-top.png");
  plankLongBottomIMG = loadImage("assets/plank-long-bottom.png");
  plankTopIMG = loadImage("assets/plank-top.png");
  plankBottomIMG = loadImage("assets/plank-bottom.png");
  sugarcubeIMG = loadImage("assets/sugarcube.png");
  bigsugarcubeIMG = loadImage("assets/bigsugarcube.png");
  shipIMG = loadImage("assets/ship.png");
  nukeIMG = loadImage("assets/nuke.png");

  //GUI
  volOnIMG = loadImage("assets/vol-on.png");
  volOffIMG = loadImage("assets/vol-off.png");
}


function setup() {
	musicMain.loop(0, 1, 0.1,);

	createCanvas(1500,1000);
	gridOfStars();

  firstPlankSetup();
	plankSetup();
	bjorkSetup();
  //unSetup();
}

function draw() {
	//Background 
  starRotationBG();

	//Game States
	playButton();
	gamePlay();
	gameOver();
}

//User Interactions
function mousePressed(){
   //Volume Control
   if(mouseX < 100 && mouseX > 0 && mouseY < 100 && mouseY > 0){
      volOnBool = !volOnBool;
   }


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
    if(gamePlayBool) {
      bjork.velocity.y = JUMP;
    }
    
    //Play flame sound effect if Volume is on
    if(gamePlayBool && volOnBool) {

        flame.loop();
        flame.setVolume(1);
    }
}


function mouseReleased() {
  if(gamePlay && volOnBool) {
    flame.stop();
  }
}


//User Interactions
function volumeSwitch(){

  if (volOnBool) {
    musicMain.setVolume(0.1);
    ding.setVolume(0.5);
    vol.changeAnimation("on");
  } 

  if (!volOnBool){
    musicMain.setVolume(0.0);
    flame.setVolume(0.0);
    ding.setVolume(0.0);
    vol.changeAnimation("off");
  }

  drawSprite(vol);
}




