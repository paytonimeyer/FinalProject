var stargrid = [];
var index = 0;

var r15 = 0;


function gridOfStars() {
  //For loop to turn my rect object into a grid
  for (var i = 0; i < 20; i = i + 1) {
    for (var j = 0; j < 20; j = j + 1){

      var starX = random(width*-1, width);
      var starY = random(height*-1, height);
      var starW = random(0, 5);
      //var opacityVariance = 2;
      //var opacityVarianceInverse = 0;

      //gridVariance = dist(xMov,yMov, k, l);
      //opacityVariance = dist(0,0, k*.6, l*.6);

      //constrain(opacityVariance, 0, 255);

      //Remapping the spotlight so its light in the middle and dark outside(this took forever to figure out lol)
      //var m = map(opacityVariance, 0, 255, 255, 0);

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
  this.speedCorner = .5;  

  this.show = function() {  

    this.n = noise(this.time)*width/10;
    this.time = this.time + this.increment;

    noStroke();
    fill(255,255,255,27);
    ellipse(this.xPos, this.yPos, this.ellW+this.n/20)

    this.cornerVariance = this.cornerVariance + this.speedCorner;

    if ((this.cornerVariance > 50 || this.cornerVariance < 1 )) {
      this.speedCorner = this.speedCorner * -1;
    }
  }
}

function moveStarClass() {
  for (var i = stargrid.length-1; i >= 0; i--) {
    stargrid[i].show();
  }
} 

function starRotationBG(){

  push();
  translate(width/2, height/2);
  rotate(radians(r15));
  starBG();
  r15 +=.015;
  pop();

}