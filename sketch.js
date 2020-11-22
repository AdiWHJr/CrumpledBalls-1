
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1250,500);
	engine = Engine.create();
	world = engine.world;
  left = new Dustbin(990,410,20,130)
  right = new Dustbin(1190,400,20,130)
  bottom = new Dustbin(1100,450,200,20)
  ground = new Ground(width/2,470,width,20)
  paper = new Paper(100,250,40)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  bottom.display()
  left.display()
  right.display()
  ground.display()
  paper.display()
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }

}


