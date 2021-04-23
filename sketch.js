
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime;

function preload(){
  
  
  monkey_running =                loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}



function setup() {
  createCanvas(680,400);
  score=0;
  survivalTime=0;
  ground=createSprite(0,400,1500,10);
  monkey=createSprite(90,370,10,10);
  monkey.addAnimation("run",monkey_running);
  monkey.scale=0.1;

  
}


function draw() {
  background("green");
  
  drawSprites();
  
if(keyDown("space")&&monkey.y>=364.3){
  monkey.velocityY=-10;
 }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground);
  
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  if(World.frameCount%80===0){
  fruits();
} 
  
  if(World.frameCount%300===0){
 rocks();
  }
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+1;
  }
  
  stroke("black");
  textSize(20);
  fill("white");
  var survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time="+survivalTime,100,50);
                    
  stroke("white");
  textSize(20);
  fill("black");
  text("score="+score,500,50);
  
}

function fruits(){
  banana=createSprite(680,Math.round(random(170,230)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
  FoodGroup.add(banana);
}

function rocks(){
  var obstacles=createSprite(680,380,10,10);
  obstacles.addImage(obstaceImage);
  obstacles.velocityX=-3;
  obstacles.scale=0.2;
  obstacleGroup.add(obstacles); 
  obstacles.lifetime=190;
}


