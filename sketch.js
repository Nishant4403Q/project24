
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,500)

	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	box1=new Box(400,620,200,20);
   box2=new Box(500,600,20,100);
   box3=new Box(300,600,20,100);

}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

