
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var db1,db2,db3, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	
	groundObject = new Ground(width/2,670,width,30); 
	db1=new Dustbin(1100,640,20,100);
	db2=new Dustbin(1350,640,100,20); 
	db3=new Dustbin(1225,700,20,100); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  db1.display();
  db2.display();
  db3.display();
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  	}
}