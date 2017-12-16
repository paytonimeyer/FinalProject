var sugarcubes;
var plankBottoms;
var plankTops;
var cloudX;

var plankYPos = [];

var firstplankBottom;
var firstplankTop;
var ship;


//First Plank that appears during gameplay
function firstPlankSetup(){

    var firstplankX = width/2+300;
    var firstplankY = height/2+200;

	//First Plank Bottom
	firstplankBottom = createSprite(firstplankX - 250, firstplankY, 1000, 150);
	firstplankBottom.setCollider("rectangle", 0, 0, 1000, 150);
	firstplankBottom.addImage(plankLongBottomIMG);

	//First Plank Top
	firstplankTop = createSprite(firstplankX - 250, firstplankY - 89, 1000, 30);
	firstplankTop.setCollider("rectangle", 0, 0, 1000, 30);
	firstplankTop.addImage(plankLongTopIMG);

    //First Plank Top
	ship = createSprite(firstplankX - 500, firstplankY - 89, 1000, 30);
	//firstplankTop.setCollider("rectangle", 0, 0, 1000, 30);
	ship.addImage(shipIMG);


}


//First Plank removal
function removeFirstPlank(){

	if (firstplankBottom.position.x < -500) {
			//Remove Plank Bottoms when the exit the canvas
			firstplankBottom.remove();
		  	//print(plankBottoms[i].position.x);
	}

	if (firstplankTop.position.x < -500) {
			//Remove Plank Bottoms when the exit the canvas
			firstplankTop.remove();
		  	//print(plankBottoms[i].position.x);
	}

	if (ship.position.x < -500) {
			//Remove Plank Bottoms when the exit the canvas
			ship.remove();
		  	//print(plankBottoms[i].position.x);
	}
}


//Spawning Plank Groups Setup
function plankSetup(){

	plankBottoms = new Group();
	plankTops = new Group();
	sugarcubes = new Group();
}

//Spawn/Kill Planks
function makePlanks(){

    //spawn planks
    if(frameCount%200 == 0) {
    	var plankX = width+200;
    	var plankY = random(550, 1000);

		//Plank Bottoms
		var plankBottom = createSprite(plankX, plankY, 300, 150);
		plankBottom.setCollider("rectangle", 0, 0, 300, 150);
	    plankBottoms.add(plankBottom);
		plankBottom.addImage(plankBottomIMG);


		//Plank Tops
		var plankTop = createSprite(plankX, plankY - 89, 300, 30);
	    plankTops.add(plankTop);
		plankTop.addImage(plankTopIMG);

		//Sugar Cubes
		for (var i = 0; i < 300; i+= 100) {
			var sugar = createSprite((plankX+i-100), plankY - 174, 25, 25);
			sugar.setCollider("rectangle", 25, 25, 20, 20);
	    	sugarcubes.add(sugar);
			sugar.addImage(sugarcubeIMG);

		}
		plankX -= 3;
    }

    //Remove Planks
    for (var i = 0; i < plankBottoms.length; i++) {
		plankBottoms[i].position.x -= 3;
		
		if (plankBottoms[i].position.x < -500) {

			//Remove Plank Bottoms when the exit the canvas
			plankBottoms[i].remove();
		  	//print(plankBottoms[i].position.x);
		}
	}

	for (var i = 0; i < plankTops.length; i++) {
		plankTops[i].position.x -= 3;
		
		//Remove Plank Tops when the exit the canvas
		if (plankTops[i].position.x < -500) {
			plankTops[i].remove();
		}
	}
	
	for (var i = 0; i < sugarcubes.length; i++) {
		sugarcubes[i].position.x -= 3;

		//Remove Sugar Cubes when the exit the canvas
		if (sugarcubes[i].position.x < -500) {
			sugarcubes[i].remove();
		}
	}

}


//......FISRT APPROACH WHICH WAS PROBLEMATI... SO I DUMPED IT.......//

/*//Move all the planks across the canvas
function movePlanks(){

	for (var i = 0; i < plankBottoms.length; i++) {
		plankBottoms[i].position.x -= 3;
		
		if (plankBottoms[i].position.x < -500) {

			//Remove Plank Bottoms when the exit the canvas
			plankBottoms[i].remove();
		  	//print(plankBottoms[i].position.x);
		}
	}

	for (var i = 0; i < plankTops.length; i++) {
		plankTops[i].position.x -= 3;
		
		//Remove Plank Tops when the exit the canvas
		if (plankTops[i].position.x < -500) {
			plankTops[i].remove();
		}
	}
	
	for (var i = 0; i < sugarcubes.length; i++) {
		sugarcubes[i].position.x -= 3;

		//Remove Sugar Cubes when the exit the canvas
		if (sugarcubes[i].position.x < -500) {
			sugarcubes[i].remove();
		}
	}
}

//This will go in setup
/*function makePlanks(){

// 	for (var k = 0; k < 100; k++) {
// //250
// //950
// 	plankYPos[k] = Math.random() * 700 + 250;

// 	console.log(plankYPos[k]);

	// }
	var minY = 250;
	var maxY = 950;

	var plank1Y = random(150, height);
	var plank1X = random(150, height);


	plankBottoms = new Group();
	plankTops = new Group();
	sugarcubes = new Group();

	var indexK = 0;
	for (var j = 0; j < 10000; j+= 750) {
		//var y = plankYPos[newK];
		//newK += 1;

	var tmpY = Math.random() * (maxY - minY) + minY;

	//Plank Bottoms
	var plankBottom = createSprite(plank1X+j, tmpY, 300, 150);
    plankBottom.shapeColor = color(random(200, 255));
    plankBottoms.add(plankBottom);
	plankBottom.addImage(plankBottomIMG);

	//Plank Tops
	var plankTop = createSprite(plank1X+j, tmpY - 90, 300, 30);
	plankTop.shapeColor = color(255,0,0);
    plankTops.add(plankTop);
	plankTop.addImage(plankTopIMG);

		//Sugar Cubes
		for (var i = 0; i < 300; i+= 100) {
			var sugar = createSprite((plank1X+i-100)+j, tmpY - 175, 25, 25);
	 		sugar.shapeColor = color(215);
	    	sugarcubes.add(sugar);

		}
	}
}*/
