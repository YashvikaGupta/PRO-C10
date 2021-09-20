var ship;
var shipImage1;
var seaImage;
var sea;

function preload(){
  shipImage1 = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(800,400);
 
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip", shipImage1);
  //edges = createEdgeSprites();
  ship.scale=0.25;  

  sea=createSprite(400,200);
  sea.addImage("sea",seaImage);
  sea.scale=0.3;
  //sea.x=sea.width/2; 
}


function draw(){
 
  background("white");

  sea.velocityX=-3;

  //if(keyDown("space"))
 //{
//    ship.velocityY=-10;
// } 
  //ship.velocityY+=0.5;

  //ship.collide(edges[3]);

  if(sea.x<0){
    sea.x=sea.width/8;
  }
  
  //ship.velocityY+=0.5;
  
  //ship.collide(sea);
  drawSprites();
}