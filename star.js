var stargrid = [];
var index = 0;

var r15 = 0;


function gridOfStars() {
  //For loop to turn my rect object into a grid
  for (var i = 0; i < 5; i = i + 1) {
    for (var j = 0; j < 5; j = j + 1){

      var starX = random(width*-1/2, width/2);
      var starY = random(height*-1/2, height/2);
      var starW = random(0, 5);

      stargrid[index++] = new Star(starX+i, starY+j, starW);
    }
  }
}

//Moving rect grid background - this is actually a class for just one rectangle with methods.
//I will create the grid with a for loop by passing its location variables into it's constructor. 
function Star(tempX, tempY, tempW) {
  //x and y positions 
  this.xPos = tempX;
  this.yPos = tempY;
  this.ellW = tempW;

  //opactiy
  //this.o = tempO;

  //time for variance in noise
  this.time = 0.0;  
    
  //incrementor 
  this.increment = .01;
    
  //initally each rect will start with a random corner radius
  //this.cornerVariance = random(5,50);

  //the speed in which each corner will soften
  //this.speedCorner = .5;  

  this.show = function() {  


    noStroke();
    fill(255,255,255,127);
    ellipse(this.xPos, this.yPos, this.ellW)

  }
}

function moveStarClass() {
  for (var i = stargrid.length-1; i >= 0; i--) {
    stargrid[i].show();
  }
} 

function starBG(){
  background(30,30,59);  
  moveStarClass(); 
}

function starRotationBG(){

  push();
  translate(width/2, height/2);
  rotate(radians(r15));
  starBG();
  r15 -=.015;
  pop();

  push();
  translate(width/2, height/2);
  rotate(radians(r15));
  pushPaintClass();
  pop();

  volumeSwitch();
 //garbageMan();
}

