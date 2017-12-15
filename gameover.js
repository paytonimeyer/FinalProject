



function gameOver() {
	if (gameOverBool) {

	  //drkblue Ring
		push();
		translate(width/2, height/2);
		rotate(radians(r7));
		imageMode(CENTER);
		image(drkblueRing, 0, 0);
		r7 -=.05;
		pop();

		//big Ring
		push();
		translate(width/2, height/2);
		rotate(radians(r11));
		imageMode(CENTER);
		image(bigRing, 0, 0);
		r11 -=.01;
		pop();

		//blue Ring
		push();
		translate(width/2, height/2);
		rotate(radians(r6));
		imageMode(CENTER);
		image(blueRing, 0, 0);
		r6 -=.15;
		pop();

		//red Planet
		push();
		translate(width/2, height/2);
		imageMode(CENTER);
		image(redPlanet, 0, 0);
		pop();

		//rotate green plant
		push();
		translate(width/2, height/2);
		rotate(radians(r));
		fill(255);
		imageMode(CENTER);
		image(greenPlanet, 240, 240);
		r +=.5;

	    //rotate moon around green planet
	    push();
	    translate(240, 240)
	    rotate(radians(r9));
	    fill(255);
	    noStroke();
	    ellipse(50,50,15,15);
	    r9 +=2;
	    pop();

	  pop();

	  //rotate Saturn
	  push();
	  translate(width/2, height/2);
	  rotate(radians(r2));
	  imageMode(CENTER);
	  image(saturnPlanet, -170, 170);
	  r2 +=.5;
	  pop();

	  //rotate Purple
	  push();
	  translate(width/2, height/2);
	  rotate(radians(r2));
	  imageMode(CENTER);
	  image(purplePlanet, 180, -180);
	  r3 +=.75;

	    //moon
	    push();
	    translate(180, -180)
	    rotate(radians(r4));
	    fill(255);
	    noStroke();
	    ellipse(30,30,5,5);
	    r4 +=1;
	    pop();

	  pop();

	  //rotate Blue Planet
	  push();
	  translate(width/2, height/2);
	  rotate(radians(r10));
	  imageMode(CENTER);
	  image(bluePlanet, -300, -300);
	  r10 +=.15;
	  pop();

	  //rotate Big Blue Planet
	  push();
	  translate(width/2, height/2);
	  rotate(radians(r12));
	  imageMode(CENTER);
	  image(bigbluePlanet, 550, -550);
	  r12 +=.05;
	    
	    //moon
	    push();
	    translate(550, -550)
	    rotate(radians(r12));
	    fill(255);
	    noStroke();
	    ellipse(130,130,5,5);
	    r12 +=.05;
	    pop();

	  pop();

	  //game Title
	  push();
	  translate(width/2, height/2);
	  imageMode(CENTER);
	  image(gameOverTitle,0,0);
	  pop();

	  restartButton();

	}
}

function restartButton(){
  fill(189,193,104);
  noStroke();
  rectMode(CENTER);
  rect(width/2, height/2+100, 115, 40, 50);

  fill(229,234,137);
  noStroke();
  rectMode(CENTER);
  rect(width/2, height/2+95, 115, 40, 50);

  translate(width/2, height/2);
  imageMode(CENTER);
  image(play, 0, 95);

}