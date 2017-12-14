var clouds;

function movePlanks(){

	for (var i = 0; i < clouds.length; i++) {
		clouds[i].position.x -= 3;
		if (clouds[i].position.x > width) {
			clouds[i].position.x = width;
		  	print(clouds[i].position.x);
		}
	}
  drawSprites();
}

function makePlanks(){

	  clouds = new Group();

  for (var i = 0; i < 10; i++) {
    var c = createSprite(
      random(width), random(height),
      random(25, 100), random(25, 100));
    c.shapeColor = color(random(200, 255));
    clouds.add(c);
  }

}