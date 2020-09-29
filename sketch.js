
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground; 
var particle = [];
	var plinkos = []; 
	var divisions = []; 
	var divisionHeight = 300; 



function preload()
{
	
}

function setup() {
	createCanvas(480, 800);

	

	engine = Engine.create();
	world = engine.world;
	 ground = new Ground (240,790,485,20);

	 for (var k = 0; k<=width; k=k+80){
		divisions.push(new Division(k, height- divisionHeight/2, 10, divisionHeight) );
	}
	
	for(var j = 75; j <=width; j=j+50){
		plinkos.push(new Plinko(j,75));
	}
	for (var i = 50; i <=width-10; i=i+50){
		plinkos.push(new Plinko(i,175));
	}
	for (var j = 20; j <=width; j=j+50){
		plinkos.push(new Plinko  (j,275));
	}
	for (var j = 0; j <=width-10; j=j+50){
		plinkos.push(new Plinko(j,375));
	}
	particle = new Particle(random(0,480), 800); 


	//Create the Bodies Here.


	Engine.run(engine);
  
}





function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();

  for (var l = 0; l<particle.length; l++){
	  particle[l].display();
  }
  for (var k = 0; k<divisions.length; k++){
	  divisions[k].display();
  }
  for (var p = 0; p<divisions.length; p++){
	  plinkos[p].display();
  }
  
  drawSprites();
 
}



