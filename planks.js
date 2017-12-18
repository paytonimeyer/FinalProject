var sugarcubes;
var plankBottoms;
var plankTops;
var cloudX;
var nukes;

var plankYPos = [];

//var firstplankBottom;
//var firstplankTop;
var ship;

var a = 1;
var inc = 1;

//First Plank that appears during gameplay
function firstPlankSetup(){

    var firstplankX = width/2+300;
    var firstplankY = height/2+200;

	//First Plank Bottom
	var firstplankBottom = createSprite(firstplankX - 250, firstplankY, 1000, 150);
	firstplankBottom.setCollider("rectangle", 0, 0, 1000, 150);
	firstplankBottoms.add(firstplankBottom);
	firstplankBottom.addImage(plankLongBottomIMG);

	//First Plank Top
	var firstplankTop = createSprite(firstplankX - 250, firstplankY - 89, 1000, 30);
	firstplankTop.setCollider("rectangle", 0, 0, 1000, 30);
	firstplankTops.add(firstplankTop);
	firstplankTop.addImage(plankLongTopIMG);

	//Ship
	var ship = createSprite(firstplankX - 500, firstplankY - 89, 273, 483);
	ship.setCollider("rectangle", 0, 0, 273, 483);
	ships.add(ship);
	ship.addImage(shipIMG);


	//Move/Remove First Plank Bottom
	for (var i = 0; i < firstplankBottoms.length; i++) {
		firstplankBottoms[i].position.x -= 3;
		//Remove Sugar Cubes when the exit the canvas
		if (firstplankBottoms[i].position.x < -500) {
			firstplankBottoms[i].remove();
		}
	}


	//Move/Remove First Plank Top
	for (var i = 0; i < firstplankTops.length; i++) {
		firstplankTops[i].position.x -= 3;
		//Remove Sugar Cubes when the exit the canvas
		if (firstplankTops[i].position.x < -500) {
			firstplankTops[i].remove();
		}
	}


	//Move/Remove Ship
	for (var i = 0; i < ships.length; i++) {
		ships[i].position.x -= 3;
		//Remove Sugar Cubes when the exit the canvas
		if (ships[i].position.x < -500) {
			ships[i].remove();
		}
	}

}

function moveFirstPlank(){
	//Move/Remove First Plank Bottom
	for (var i = 0; i < firstplankBottoms.length; i++) {
		firstplankBottoms[i].position.x -= 3;
		//Remove Sugar Cubes when the exit the canvas
		if (firstplankBottoms[i].position.x < -500) {
			firstplankBottoms[i].remove();
		}
	}


	//Move/Remove First Plank Top
	for (var i = 0; i < firstplankTops.length; i++) {
		firstplankTops[i].position.x -= 3;
		//Remove Sugar Cubes when the exit the canvas
		if (firstplankTops[i].position.x < -500) {
			firstplankTops[i].remove();
		}
	}


	//Move/Remove Ship
	for (var i = 0; i < ships.length; i++) {
		ships[i].position.x -= 3;
		//Remove Sugar Cubes when the exit the canvas
		if (ships[i].position.x < -500) {
			ships[i].remove();
		}
	}
}


/*//First Plank removal
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
}*/


//Spawning Plank Groups Setup
function plankSetup(){

	bjorks = new Group();

	ships = new Group();
	firstplankBottoms = new Group();
	firstplankTops = new Group();


	plankBottoms = new Group();
	plankTops = new Group();
	sugarcubes = new Group();
	nukes = new Group();
	kimJongUns = new Group();
}

//Spawn/Kill Planks
function makePlanks(){

    //Spawn Planks and Sugar
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
		//plankX -= 3;
    }

    //Spawn Easy Nukes
    if(score > 10 && score < 30 && frameCount%300 == 0) {
    	var nukeX = width+200;
    	var nukeY = random(300, 850);

		//Plank Bottoms
		var nuke = createSprite(nukeX, nukeY, 137, 78);
		nuke.addAnimation("nukespin", nukespin);
		nuke.setCollider("rectangle", 0, 0, 137, 78);
	    nukes.add(nuke);
	}

    //Spawn Medium Nukes
    if(score > 31 && score < 50 && frameCount%200 == 0) {
    	var nukeX = width+200;
    	var nukeY = random(300, 850);

		//Plank Bottoms
		var nuke = createSprite(nukeX, nukeY, 137, 78);
		nuke.addAnimation("nukespin", nukespin);
		nuke.setCollider("rectangle", 0, 0, 137, 78);
	    nukes.add(nuke);
	}

    //Spawn Hard Nukes
    if(score > 51 && score < 70 && frameCount%100 == 0) {
    	var nukeX = width+200;
    	var nukeY = random(300, 850);

		//Plank Bottoms
		var nuke = createSprite(nukeX, nukeY, 137, 78);
		nuke.addAnimation("nukespin", nukespin);
		nuke.setCollider("rectangle", 0, 0, 137, 78);
	    nukes.add(nuke);
	}

    //Spawn XTRA Hard Nukes
    if(score > 71 && score < 100 && frameCount%50 == 0) {
    	var nukeX = width+200;
    	var nukeY = random(300, 850);

		//Plank Bottoms
		var nuke = createSprite(nukeX, nukeY, 137, 78);
		nuke.addAnimation("nukespin", nukespin);
		nuke.setCollider("rectangle", 0, 0, 137, 78);
	    nukes.add(nuke);
	}

	//Spawn easy Kim Jong Un 
    if(score > 20 && score < 40 && frameCount%500 == 0) {
    	var nukeX = width+200;
    	var nukeY = random(300, 850);

		//Plank Bottoms
		var kimJongUn = createSprite(nukeX, nukeY, 137, 78);
		kimJongUn.addAnimation("unheadspin", unheadspin);
		kimJongUn.setCollider("rectangle", 0, 0, 137, 78);
	    kimJongUns.add(kimJongUn);
	}

	//Spawn medium Kim Jong Un 
    if(score > 41 && score < 60 && frameCount%400 == 0) {
    	var nukeX = width+200;
    	var nukeY = random(300, 850);

		//Plank Bottoms
		var kimJongUn = createSprite(nukeX, nukeY, 137, 78);
		kimJongUn.addAnimation("unheadspin", unheadspin);
		kimJongUn.setCollider("rectangle", 0, 0, 137, 78);
	    kimJongUns.add(kimJongUn);
	}

	//Spawn hard Kim Jong Un 
    if(score > 61 && score < 80 && frameCount%300 == 0) {
    	var nukeX = width+200;
    	var nukeY = random(300, 850);

		//Plank Bottoms
		var kimJongUn = createSprite(nukeX, nukeY, 137, 78);
		kimJongUn.addAnimation("unheadspin", unheadspin);
		kimJongUn.setCollider("rectangle", 0, 0, 137, 78);
	    kimJongUns.add(kimJongUn);
	}
    //......REMOVE ITEMS AFTER EXITING CANVAS.......
    for (var i = 0; i < plankBottoms.length; i++) {
		plankBottoms[i].position.x -= 3;
		
		if (plankBottoms[i].position.x < -500) {

			//Remove Plank Bottoms when the exit the canvas
			plankBottoms[i].remove();
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


	for (var i = 0; i < nukes.length; i++) {
		nukes[i].position.x -= 5;
		drawSprite(nukes[i]);
		drawSprite(nuke);
		if (nukes[i].position.x < -500) {

			//Remove Plank Bottoms when the exit the canvas
			nukes[i].remove();
		}
	}

	for (var i = 0; i < kimJongUns.length; i++) {
		kimJongUns[i].position.x -= 5;
		kimJongUns[i].position.y += sin(radians(a*1.97));
		a -= 1;

		drawSprite(kimJongUns[i]);
		drawSprite(nuke);
		if (kimJongUns[i].position.x < -500) {

			//Remove Plank Bottoms when the exit the canvas
			kimJongUns[i].remove();
		}
	}
}

function removeObstacles(){
    for (var i = 0; i < plankBottoms.length; i++) {

			plankBottoms[i].remove();
		}
	

	for (var i = 0; i < plankTops.length; i++) {

			plankTops[i].remove();
		}
	
	
	for (var i = 0; i < sugarcubes.length; i++) {

			sugarcubes[i].remove();
		}
	


	for (var i = 0; i < nukes.length; i++) {

			nukes[i].remove();
		}
	

	for (var i = 0; i < kimJongUns.length; i++) {

			kimJongUns[i].remove();
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
