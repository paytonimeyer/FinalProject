//...SHOOTING STARS...// 

//Paint tree array position 
var xMov = 500;
var yMov = 500;
var starW = 0;

//Paint array
var shootingStar = [];

//Shooting Stars
function ShootingStar(tempX, tempY) {
  //location
  this.x = tempX;
  this.y = tempY;

  //variance
  this.time = 0.0;  
  this.decrement = .5;
  this.increment = .01;
  this.o = 50;
  this.w = 1;

  //Show, grow and color fade functionality
  this.show = function() {  

    //this.n = noise(this.time)*width/15;
    noStroke();
    fill(255, this.o);
    ellipse(this.x, this.y, this.w, this.w);

    this.w += .5;
    this.o -= 1;
    //this.y = this.y - 5;
    //this.x = this.x + .5;

  }
}

function pushShootingStarsClass() {
  //second intervals will determine when the shooting stars appear
  var s = second();

  //shooting star intervals 
  if(s>5 && s<10 || s>20 && s<25 || s>35 && s<40){
    shootingStar.push(new ShootingStar(xMov, yMov, 127));
  }
  //starW +=1;

  yMov -= 5;
  xMov -= 1;

  //Restart the Shooting star if the have exited the rotating canvas
  if (xMov > 750 || xMov < -750){
    xMov = random(-750,750);
    yMov = random(-600,600);
  }

  if (yMov > 600 || yMov < -600){
    xMov = random(-750,750);
    yMov = random(-600,600);
  }

  for (var i = shootingStar.length-1; i >= 0; i--) {
    shootingStar[i].show();
  }

  //Constrain lines to 15 at a time
  if (shootingStar.length > 50){
    shootingStar.splice(0,1); 
  }

//print(s);
}

