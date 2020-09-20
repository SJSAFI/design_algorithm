function setup() {
  createCanvas(800,400);
  rect1 = createSprite(100, 200, 150, 50);
  rect2 = createSprite(400, 200, 50, 50);
  rect3 = createSprite(100, 400, 150, 150);
  //rect1.velocityY =  2;
  //rect2.velocityX = -5;
 // rect3.velocityY = -2;
  rect1.shapeColor = "red";
  rect2.shapeColor = "red";
}

function draw() {
  background(255,255,255); 
  rect1.x = mouseX;
  rect1.y = mouseY;

  
   //bounceObj(rect1,rect3);
   if(isTouchingobj(rect1,rect2)){
    rect1.shapeColor = "blue";
    rect2.shapeColor = "blue";
   }
   else{
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
   }
  

  drawSprites();
}

