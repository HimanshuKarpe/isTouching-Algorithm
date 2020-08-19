var movingRect, rectangle1;

function setup() {
  createCanvas(800,800);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor="blue";
  movingRect.debug=true;
  rectangle1 = createSprite(200,300,40,50);
  rectangle1.shapeColor="blue";
  rectangle1.debug=true;
}

function draw() {
  background(255,255,255);
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-rectangle1.x < movingRect.width/2 + rectangle1.width/2 &&
     rectangle1.x-movingRect.x < movingRect.width/2 + rectangle1.width/2 &&
     movingRect.y-rectangle1.y < movingRect.height/2 + rectangle1.height/2 &&
     rectangle1.y-movingRect.y < movingRect.height/2 + rectangle1.height/2){
       movingRect.shapeColor="red";
       rectangle1.shapeColor="red";
     }
     else{
       movingRect.shapeColor="blue";
       rectangle1.shapeColor="blue";
     }

  drawSprites();
}