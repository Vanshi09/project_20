class bullet{
  constructor(weight,speed) {
      this.x = 50;
      this.y = 200;
      this.sprite=createSprite(this.x,this.y,50,10);
      this.weight = 41;
      this.speed = 223;
      this.sprite.velocityX = this.speed;
      this.sprite.shapeColour = "white";
  }  
}