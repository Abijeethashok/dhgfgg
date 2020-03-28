const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
function preload(){

}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(200,350,50,300);
    box2 = new Box(251,350,50,200);
    box3 = new Box(149,350,50,200);
    box4 = new Box(89,350,70,300);
    box5 = new Box(311,350,70,300);
    box6 = new Box(200,25,40,10);
    box7 = new Box(200,15,30,10);
    box8 = new Box(200,5,20,10);
    box9 = new Box(250,85,40,10);
    box10 = new Box(250,75,30,10);
    box11 = new Box(252,65,20,10);
    box12 = new Box(150,85,40,10);
    box13 = new Box(150,75,30,10);
    box14 = new Box(152,65,20,10);
}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
}