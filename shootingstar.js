//Paint tree array position 
var xMov = 500;
var yMov = 500;
var starW = 0;

//Paint array
var paint = [];

//Paint Class
function Paint(tempX, tempY) {
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

function pushPaintClass() {
  var s = second();


  if(s>5 && s<10 || s>20 && s<25 || s>35 && s<40){
    paint.push(new Paint(xMov, yMov, 127));
  }
  //starW +=1;

  yMov -= 5;
  xMov -= 1;
  //Constrain 
  //xMov = constrain(xMov,-1000,1000);
  //yMov = constrain(yMov,-1000,1000);

  if (xMov > 750 || xMov < -750){
    xMov = random(-750,750);
    yMov = random(-600,600);
  }

  if (yMov > 600 || yMov < -600){
    xMov = random(-750,750);
    yMov = random(-600,600);
  }

  for (var i = paint.length-1; i >= 0; i--) {
    paint[i].show();
  }

  //Constrain lines to 15 at a time
  if (paint.length > 50){
    paint.splice(0,1); 
  }

print(s);
}

