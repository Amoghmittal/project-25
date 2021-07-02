
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper
var dustbin1,dustbim2,dustbin3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,650,800,20)
paper=new Paper(150,600,70)
dustbin1=new Dustbin(400,600,10,100)
dustbin2=new  Dustbin(500,630,200,10)
dustbin3=new Dustbin (600,600,10,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display()
  paper.display()
 // dustbin1.display()
  dustbin2.display()
 // dustbin3.display()
  drawSprites();

}


function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})	
	}
	
}
