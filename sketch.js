var trackImg, track;
var car, carImg;
var ground;
var gameState = "play";
var obstacleCarImg, obstacleCar, obstacleCarGroup

function preload(){
  trackImg = loadImage("track.png");
  carImg = loadImage("car1.png");
  obstacleCarImg = loadImage("car 2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  track = createSprite(width/2, height/2,width,height);
  track.addImage("track",trackImg);
  track.scale = 0.5;
  track.velocityY = 1;

  car = createSprite(width/2,height/2,10,10)
  car.addImage(carImg)
  car.scale = 0.7;

  ground = createSprite(width/2,height,windowWidth,10)

  obstacleCarGroup = new Group()
  
}

function draw() {
  background(0);

  if(gameState === "play" ){

    if(track.y > 400){
        track.y = 300
      }

      if(keyDown("up")){
        car.velocityY = -3;
      }

      if(keyDown("left")){
        car.x-=25
      }

      if(keyDown("right")){
        car.x+=25
      }

    car.velocityY = car.velocityY + 0.3;

if(ground.isTouching(car)){
     gameState = "end"
   }

  if(obstacleCarGroup.isTouching(car)){
    ghost.velocityY = 0;
  }
    
    

    drawSprites();
  }

  if(gameState === "end"){
    fill("White")
    textSize(50)
    text("You Lost The Race",width/2-200,height/2)

  }
}

function spawnCars(){
  if(frameCount % 250 == 0){
    var obstacleCar = createSprite(Math.round(random(120,width-100)),10)
    obstacleCar.addImage(obstacleCarImg)
    obstacleCar.velocityY = 1;
    obstacleCar.lifetime = height/1;
    obstacleCarGroup.add(obstacleCar)
  }
}


