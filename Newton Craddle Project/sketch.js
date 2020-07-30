
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	bobDiameter =  40;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350,100,500,20);
	bob1 = new Bob(350,500,30,30);
	bob2 = new Bob(410,500,30,30);
	bob3= new Bob(290,500,30,30);
	bob4 = new Bob(470,500,30,30);
	bob5 = new Bob(230,500,30,30);
	rope1 = new Rope(bob1.body,roof.body,0,0);
	rope2 = new Rope(bob2.body,roof.body,50,0);
	rope3 = new Rope(bob3.body,roof.body,-50,0);
	rope4 = new Rope(bob4.body,roof.body,120,0);
	rope5 = new Rope(bob5.body,roof.body,-120,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() 
{ if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-70,y:-65}); } }



