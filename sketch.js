var PLAY = 1;
var END = 0;
var gameState = PLAY;
var tower,towerImage;
var ghost,ghostImage;
var door,doorGroup,doorImage;
var climber,climberGroup,climberImage;
function preload (){
  towerImage = loadImage("tower.png");
  ghostImage = loadImage("ghost-standing.png");
  doorImage = loadImage("door.png");
  climberImage = loadImage("climber.png");
}
function setup (){
  createCanvas (600,600);
   tower = createSprite(300,300,10,50);
   tower.addImage(towerImage);
   tower.scale = 1;
   tower.velocityY = 2 ;
   ghost = createSprite(500,300,10,20);
   ghost.addImage(ghostImage);
   ghost.scale = 0.3 ;
  doorGroup = new Group () ;
  climberGroup = new Group ();
  ghost.setCollider("rectangle",0,0,250,250);
  ghost.debug = false ;
  
}
function  draw (){
  background ("yellow");
  
  if (gameState === PLAY){
  if (keyDown("space")){
    
   ghost.velocityY = -4 ; 
  }
  if (keyDown(LEFT_ARROW)){
ghost.x =ghost.x-2;
}
if (keyDown(RIGHT_ARROW)){
  ghost.x =ghost.x+2;
}
     ghost.velocityY = ghost.velocityY + 1 ;
     spawnDoor();
     if (tower.y > 600 ){
    
    tower.y = 30 ;
  }
    if (ghost.isTouching(doorGroup)|| ghost.y > 600){
      ghost.destroy();
      gameState = END ;
      
    }
  }
  
 
  
 
  
  drawSprites ();
  if (gameState === END){
    background("black");
    textSize(30);
    fill("red");
    text("GAMEOVER",300,300);
     }
}
function spawnDoor(){
   if (frameCount % 200 === 0) {
     door = createSprite(300,100,40,10);
    door.x = Math.round(random(100,400));
    door.addImage(doorImage);
    climber = createSprite(300,150);
    climber.addImage(climberImage);
    climber.x = door.x ;
    climber.velocityY = 2 ;
    door.velocityY = 2 ;
    door.lifetime = 550;
    doorGroup.add(door);
    climberGroup.add(climber);
   }
  
  
  
}