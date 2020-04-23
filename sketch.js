var bullet;
var wall;

function setup() {

  createCanvas(1600,400);
}

function draw() {

  background(0,0,0); 

hasCollided();

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.sprite.x + lbullet.sprite.width;
  wallLeftEdge=lwall.sprite.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
return true
  }
  return false;
}