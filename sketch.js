
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,695);
  paper1 = new Paper(810,260,300,PI/2);

  dustbin1 = new Dustbin(700,240,70,70);
  dustbin2 = new Dustbin(920,240,70,70);
  dustbin3 = new Dustbin(810,220);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(paperObject.body,paperObject.body.postion,{x:85,y:-85});
    }
}

