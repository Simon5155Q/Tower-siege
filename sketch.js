const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground, platform, box;

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 800, 1300, 20);
    platform = new Platform(200, 200, 10, 60);
    box = new Box(300, 300, 30, 30);
}

function draw(){
    background("black");
    Engine.update(engine);

    ground.display();
    platform.display();
    box.display();
}
