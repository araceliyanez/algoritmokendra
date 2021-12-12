var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(200, 200, 50, 50);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

function draw() {
  background(0);  

  movingRect.y = mouseY;
  movingRect.x = mouseX;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
    
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  } else {
    
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }

  drawSprites();
}