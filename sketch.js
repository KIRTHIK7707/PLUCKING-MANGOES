
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint;

var Chain;
var boy;
var stonme;
var tree;
var ground,g;
var back;
var Mango,Mango2,Mango3,Mango4,Mango5,Mango6,Mango7,Mango8,Mango9;

function preload()
{
	back=loadImage("village back.jpg");
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    boy= new Boy(100,260,150,300);

	ground = new Ground(175,600,1500,20);

	tree = new Tree(300,190,400,500);

	stone = new Stone(100,500,20);

    Mango  = new Mango(275,110,40);
	Mango2 = new Mango(250,160,40);
	Mango3 = new Mango(300,150,40);
	Mango4 = new Mango(350,150,40);
	Mango5 = new Mango(325,100,40);
	Mango6 = new Mango(300,125,40);
	Mango7 = new Mango(380,170,40);
	Mango8 = new Mango(275,170,40);
	Mango9 = new Mango(350,120,40);
	
	Chain = new Chain(s.body,{x:150,y:450});

	Engine.run(engine);
  
}


function draw() {
  
    background(black)
	textSize(25);
	fill("green")
	text("Press Space to get a second Chance to Play!!",50 ,50);

	Boy.display();

	stone.display();
	
	Ground.display();

	Tree.display();

	Mango.display();
	Mango2.display();
	Mango3.display();
	Mango4.display();
	Mango5.display();
	Mango6.display();
	Mango7.display();
	Mango8.display();
	Mango9.display();

	Chain.display();

	detectCollision(s,Mango);
	detectCollision(s,Mango2);
	detectCollision(s,Mango3);
	detectCollision(s,Mango4);
	detectCollision(s,Mango5);
	detectCollision(s,Mango6);
	detectCollision(s,Mango7);
	detectCollision(s,Mango8);
	detectCollision(s,Mango9); 

	tree.depth = stone.depth;
	stone.depth = stone.depth+1;

  drawSprites();

}
function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  Chain.Released();
 //Matter.Body.applyForce(stone.body,stone.body.position,{x:50,y:-200});
}
function keyPressed()
{
	if(keyCode == 32)
	{
			Matter.Body.setPosition(stone.body,{x:100,y:400});
			Chain.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	MangoBodyPosition=lMango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmango.body,false);
	  }
   }



