var gameOver, gameOverImg ;
var bg,bgImg1,bgImg2,bgImg3,bgImg4,end,music;
var car,zombie,human,zombie2,zombie2Img,zombie2Img2;
var carImg,zombieImg1,zombieImg2,zombieImg3,zombieImg4,zombieImg5,zombieImg6,zombieImg7,zombieImg8,humanImg1,humanImg2,humanImg3,humanImg4;
var i,zombieGroup,zombieGroup2,humanGroup;
var score = 0,life1,lifeImg,life2,life3
function preload() {
  bgImg1= loadImage("building.png");
  bgImg2= loadImage("building2.png");
  bgImg3= loadImage("1.jpg");
  bgImg4= loadImage("rbg.jpg")
  zombieImg1 = loadImage("zombie-1.png");
  zombieImg2 = loadImage("zombie-1a.png");
  zombieImg3 = loadImage("zombie-2.png");
  zombieImg4 = loadImage("zombie-2a.png");
  zombieImg5 = loadImage("zombie-3.png");
  zombieImg6 = loadImage("zombie-3a.png");
  zombieImg7 = loadImage("zombie-4.png");
  zombieImg8 = loadImage("zombie-4a.png");
  zombie2Img = loadImage("zombie-2.png");
  zombie2Img2 = loadImage("zombie-4.png");
  lifeImg = loadImage("life.png");
  carImg = loadImage("car.png");
  humanImg1 = loadImage("h1.png");
  humanImg2 = loadImage("h2.png");
  humanImg3 = loadImage("h3.png");
  humanImg4 = loadImage("h4.png");
  end = loadImage("end.png");
  music = loadSound("game.mp3");
  gameOverImg = loadImage("end.png");
}

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  zombieGroup = new Group();
  zombieGroup2 = new Group();
  humanGroup = new Group();
  createCar()
  life1 = createSprite(100,600);
  life1.addImage(lifeImg)
  life1.scale = 0.7;
  life2 = createSprite(170,600);
  life2.addImage(lifeImg)
  life2.scale = 0.7;
  life3 = createSprite(240,600);
  life3.addImage(lifeImg)
  life3.scale = 0.7;
  gameOver = createSprite(width/2,height/2- 50);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 1.2;
  gameOver.visible = false;
  music.play()
}

function draw() {
  background(bgImg4);
  if(keyDown('left')){
    car.x = car.x - 5;
  }
  if(keyDown('right')){
    car.x = car.x + 5;
  }
  if(keyDown('up')){
    car.y = car.y - 5;
  }
  if(keyDown('down')){
    car.y = car.y + 5;
  }
  if(humanGroup.isTouching(car)){
    score = score - 1;
    humanGroup.destroyEach()
    lifeDes()
  }
  if(zombieGroup.isTouching(car)){
    score = score + 1;
    zombieGroup.destroyEach();
  }
  if(zombieGroup2.isTouching(car)){
    score = score + 1;
    zombieGroup2.destroyEach();
  }
  spawnhuman()
  spawnZombie()
  drawSprites()
  fill("white")
  textSize(22)
  text("SCORE: "+score,100,100)
}
function spawnZombie(){
  if(frameCount % 140 === 0){
    zombie = createSprite(random(width/4,width/2),height/4.7);
    var randomNumber = Math.round(random(1,8));
    zombie.scale=0.1
    zombie.velocityY = 5
      if (randomNumber == 1) {
        zombie.addImage(zombieImg1);
      } else if (randomNumber == 2) {
        zombie.addImage(zombieImg2);
      } else if (randomNumber == 3) {
        zombie.addImage(zombieImg3);
      } else if (randomNumber == 4) {
        zombie.addImage(zombieImg4);
      } else if (randomNumber == 5) {
        zombie.addImage(zombieImg5);
      } else if (randomNumber == 6) {
        zombie.addImage(zombieImg6);
      } else if (randomNumber == 7) {
        zombie.addImage(zombieImg7);
      } else  {
        zombie.addImage(zombieImg8);
      }
    zombieGroup.add(zombie);
    
    zombie2 = createSprite(0,random(height/4,height/2));
    var randomNumber3 = Math.round(random(1,2));
    if (randomNumber3 == 1) {
      zombie2.addImage(zombie2Img);
    } else {
      zombie2.addImage(zombie2Img2);
    }
    zombie2.velocityX = 5;
    zombie2.scale = 0.2;
    zombieGroup2.add(zombie2);
  }
  for (var i = 0; i < zombieGroup.length; i++) { 
    zombieGroup.get(i).scale=zombieGroup.get(i).y/1600; 
  }
}

function createCar(){
  car = createSprite(width/2,height/1.5);
  car.addImage(carImg);
  car.scale = 0.4;
  car.setCollider("rectangle",0,0,460,360)
}

function spawnhuman(){
  if(frameCount % 120 === 0){
    human = createSprite(0,random(height/4,height/2));
    var randomNumber2 = Math.round(random(1,4));
    
      if (randomNumber2 == 1) {
        human.addImage(humanImg1);
      } else if (randomNumber2 == 2) {
        human.addImage(humanImg2);
      } else if (randomNumber2 == 3) {
        human.addImage(humanImg3);
      } else {
        human.addImage(humanImg4);
      }
      human.scale = 0.2;
    human.velocityX = 5;
    humanGroup.add(human);
    
  }
  
}

function lifeDes(){
  if(life1.visible === true){
    life1.visible = false;
  }else if(life1.visible === false){
    if(life2.visible === true){
      life2.visible = false;
    } else if(life2.visible === false){
      life3.visible = false
      gameOver.visible = true;
      gameOver.depth = 10
    }
  }
}
