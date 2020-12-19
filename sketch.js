var movingRect, fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;


function setup() {
  createCanvas(1200,1200);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor ="green";
 // movingRect.debug = true;
  fixedRect=createSprite(200,200,80,30);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;

  gameObject1 =createSprite(100,400,50,50);
  gameObject1.shapeColor ="green";
  gameObject2 =createSprite(200,400,50,50);
  gameObject2.shapeColor ="green";
  gameObject3 =createSprite(300,400,50,50);
  gameObject3.shapeColor ="green";
  gameObject4 =createSprite(400,400,50,50);
  gameObject4.shapeColor ="green";

 // movingRect.velocityY = -5;
  //fixedRect.velocityY= 5;
}

function draw() {
  background(255,255,255);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  console.log(movingRect.x-fixedRect.x);

isTouching(movingRect,gameObject1);

//bounceOff(movingRect,fixedRect);

  drawSprites();
}

