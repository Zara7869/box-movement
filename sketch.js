var box
function setup() {
  createCanvas(600,500);
 box=createSprite(200,200,50,50)
}

function draw() 
{
//r(0-255),g,b
  background(70,150,200);
  if(keyIsDown(RIGHT_ARROW)) {
  box.position.x+=5
  }
  if(keyIsDown(LEFT_ARROW)) {
    box.position.x-=5
  }
  drawSprites()
}




