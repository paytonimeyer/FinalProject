var sugarcubes;
var plankBottoms;
var plankTops;
var cloudX;

var plankXPos = [];



function movePlanks(){

	for (var i = 0; i < plankBottoms.length; i++) {
		plankBottoms[i].position.x -= 3;
		
		if (plankBottoms[i].position.x < -500) {
			plankBottoms[i].remove();
		  	//print(plankBottoms[i].position.x);
	
		}
	}

	for (var i = 0; i < plankTops.length; i++) {
		plankTops[i].position.x -= 3;
		
		if (plankTops[i].position.x < -500) {
			plankTops[i].remove();
		}
	}
	
	for (var i = 0; i < sugarcubes.length; i++) {
		sugarcubes[i].position.x -= 3;
		
		if (sugarcubes[i].position.x < -500) {
			sugarcubes[i].remove();
		}
	}
}

function makePlanks(){

	for (var k = 0; k < 100; k++) {


	plankXPos[k+random(0, height)];
	print(k);
	}

	var plank1Y = random(150, height);
	var plank1X = random(150, height);



	plankBottoms = new Group();
	plankTops = new Group();
	sugarcubes = new Group();

	for (var j = 0; j < 10000; j+= 750) {
	var plankBottom = createSprite(plank1X+j, plank1Y, 300, 150);
    plankBottom.shapeColor = color(random(200, 255));
    plankBottoms.add(plankBottom);
	plankBottom.addImage(plankBottomIMG);

	var plankTop = createSprite(plank1X+j, plank1Y - 90, 300, 30);
	plankTop.shapeColor = color(255,0,0);
    plankTops.add(plankTop);
	plankTop.addImage(plankTopIMG);

	for (var i = 0; i < 300; i+= 100) {
		var sugar = createSprite((plank1X+i-100)+j, plank1Y-175, 25, 25);
 		sugar.shapeColor = color(215);
    	sugarcubes.add(sugar);

	}
	}
}