var bg,bgImage1,bgImage2;
var car,zombie,tree;
var carImg,zombieImg1,zombieImg2,zombieImg3,zombieImg4,zombieImg5,zombieImg6,zombieImg7,zombieImg8,treeImg1,treeImg2,treeImg3,treeImg4;
var i,zombieGroup,treeGroup;
var score,life1,lifeImg,life2,life3
function preload() {
  bgImage1= loadImage("building.png");
  bgImage2= loadImage("building2.png");
  zombieImg1 = loadImage("zombie-1.png");
  zombieImg2 = loadImage("zombie-1a.png");
  zombieImg3 = loadImage("zombie-2.png");
  zombieImg4 = loadImage("zombie-2a.png");
  zombieImg5 = loadImage("zombie-3.png");
  zombieImg6 = loadImage("zombie-3a.png");
  zombieImg7 = loadImage("zombie-4.png");
  zombieImg8 = loadImage("zombie-4a.png");
  lifeImg = loadImage("life.png");
  carImg = loadImage("car.png");
  treeImg1 = loadImage("tree-1.png");
  treeImg2 = loadImage("tree-2.png");
  treeImg3 = loadImage("tree-3.png");
  treeImg4 = loadImage("tree-4.png");
  //music = loadSound("music.mp3");
}

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  zombieGroup = new Group();
  treeGroup = new Group();
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
}

function draw() {
  background(220);
  if(keyDown('left')){
    car.x = car.x - 5;
  }
  if(keyDown('right')){
    car.x = car.x + 5;
  }
  if(treeGroup.isTouching(car)){
    treeGroup.destroyEach()
    
  }
  if(treeGroup.isTouching(car)){
    treeGroup.destroyEach()
    lifeDes()
  }
  if(zombieGroup.isTouching(car)){
    score = score+0.1;
  }
  //spawnTree()
  spawnZombie()
  drawSprites()
  car.debug = true;
}
function spawnZombie(){
  if(frameCount % 160 === 0){
    zombie = createSprite(random(300,900),0);
    var randomNumber = Math.round(random(1,8));
    if (World.frameCount % 80 == 0) {
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
    }
    zombie.scale = i;
    zombie.velocityY = 5;
    zombieGroup.add(zombie);
  }
  for (var i = 0; i < zombieGroup.length; i++) { 
    zombieGroup.get(i).scale=zombieGroup.get(i).y/1500; 
  }
}

function createCar(){
  car = createSprite(width/2,height/1.3);
  car.addImage(carImg);
  car.scale = 0.5;
  car.setCollider("rectangle",0,0,460,360)
}

function spawnTree(){
  if(frameCount % 160 === 0){
    tree = createSprite(random(300,900),0);
    var randomNumber2 = Math.round(random(1,8));
    if (World.frameCount % 80 == 0) {
      if (randomNumber2 == 1) {
        tree.addImage(treeImg1);
      } else if (randomNumber2 == 2) {
        tree.addImage(treeImg2);
      } else if (randomNumber2 == 3) {
        tree.addImage(treeImg3);
      } else {
        tree.addImage(treeImg4);
      }
    tree.scale = i;
    tree.velocityY = 5;
    treeGroup.add(tree);
    }
  }
  for (var i = 0; i < treeGroup.length; i++) { 
    treeGroup.get(i).scale=treeGroup.get(i).y/1500; 
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
    }
  }
}