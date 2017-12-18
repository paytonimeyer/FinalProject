//...STAR BACKGROUND LAYER...// 

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

/*Star Class was originally built to make the stars shine and twinkle
but it slowed the program down too much so this element was killed*/
//Simplified Star Class
function Star(tempX, tempY, tempW) {
  //x and y positions 
  this.xPos = tempX;
  this.yPos = tempY;
  this.ellW = tempW;


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
  pushShootingStarsClass();
  pop();

  volumeSwitch();
}

