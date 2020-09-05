var engine,world;
const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint;

var gameState = "onSling";

var score = 0;

var backgroundImg;

var potted = 0;

var pot = false;

var ballCount = 10;

function preload(){
  backgroundImg = loadImage("images/bg.jpg");
  coolSound = loadSound("sounds/Cool.mpeg");
  //gameoverSound = loadSound("sounds/gameover.mpeg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(windowWidth/2,windowHeight/1.05,windowWidth,20);
  ground1 = new Ground(-7,windowHeight-1000,windowWidth/100,windowHeight*3);
  ground2 = new Ground(windowWidth+10,windowHeight-1000,windowWidth/100,windowHeight*3);

  ball = new Ball(windowWidth/2,windowHeight/2.45);
 
  basket1 = new Basket(windowWidth/18,windowHeight/4.05,windowWidth/185,windowHeight/6);
  basket2 = new Basket(windowWidth/9.19,windowHeight/2.47,windowWidth/260,windowHeight/10);
  basket3 = new Basket(windowWidth/5.7,windowHeight/2.47,windowWidth/260,windowHeight/10);

  

  slingshot = new Slingshot(ball.body,{x:windowWidth/2,y:windowHeight/2.45});


  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg); 

  console.log(windowWidth);
  console.log(windowHeight);
  
 ball.display();
  //ground.display();
  ground1.display();
  basket1.display();
  basket2.display();
  basket3.display();
  ground2.display();

  if(gameState === "onSling"){
    textSize(20);
    fill(0,250,255);
    textFont("Algerian");
    text("Drag to take the shot!!",windowWidth/2.4,windowHeight/27);
    
  }
  
  if(ball.body.position.x>windowWidth/9.19 &&ball.body.position.x<windowWidth/5.7 &&ball.body.position.y>windowHeight/2.3 &&ball.body.position.y<windowHeight/2.64){
    textSize(30)
    fill("250,130,96");
    textFont("Algerian");
    text("Shot Cleared!!!",windowWidth/2.35,windowHeight/2.05);
    score = score + 5;
    coolSound.play();
    pot = true;
    
  }

  if(pot === true){
    potted = potted + 1;
    pot = false;
  }


  textSize(25);
  fill("yellow");
  textFont("Algerian");
  text("Score : "+ score,windowWidth/2.13,windowHeight/2.85);
  text("Balls Remaining : "+ ballCount,windowWidth/38.9,windowHeight/12.43);

  textSize(25);
  fill("purple");
  textFont("Algerian");
  text("Shoot the left basket!",windowWidth/2.5,windowHeight/1.05);

  if(ballCount === 0){
    gameState="end";
    //gameoverSound.play();
    textSize(30);
    fill("red");
    text("Game Over!!",windowWidth/2.2,windowHeight/2);
    //text("Balls Potted : "+potted+ " Balls Missed : "+(10-potted),displayWidth/2.5,displayHeight/2.5);
  }

  
 //drawSprites();
}

function touchMoved(){
  if(gameState!=="released"){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
  }
}

function touchEnded(){
  slingshot.fly();
  gameState = "released";
  ballCount = ballCount - 1;

}

function touchStarted(){
  if(touches.length>0 &&ball.body.speed<1){
    gameState = "onSling";
    textSize(20);
    fill(0,250,255);
    textFont("Britannic Bold");
    text("Drag to take the shot!!",windowWidth/2.4,windowHeight/27);
    Matter.Body.setPosition(ball.body,{x:windowWidth/2,y:windowHeight/2.45});
    slingshot.attach(ball.body);
    touches = [];
  }
}