var bigRedPlanet;
var bigRedPlanetImg;




//Big Red Planet Background Image
function bigRedPlanetBG(){

	//Big Red Planet Background Image
	push();
	translate(width/2, height*2);
	rotate(radians(r7));
	imageMode(CENTER);
	image(bigRedPlanetImg, 0, 0);
	r7 -=.05;

		//Satellite
		push();
		translate(0, 0);
		rotate(radians(r7));
		imageMode(CENTER);
		image(satelliteIMG, 0, -1550);
		//r7 -=.05;
		pop();

	pop();

}