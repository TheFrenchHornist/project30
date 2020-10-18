const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 800, 500, 20);

  for (var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var b = 40; b <=width; b = b + 50){

    plinkos.push(new Plinko (b, 75, 10));
  }

  for (var c = 15; c <=width; c = c + 50){

    plinkos.push(new Plinko (c, 175, 10));
  }

  for (var d = 40; d <=width; d = d + 50){

    plinkos.push(new Plinko (d, 275, 10));
  }
 
  for (var e = 15; e <=width; e = e + 50){

    plinkos.push(new Plinko (e, 375, 10));
  }
  
}

function draw() {
  background("blue");  
  Engine.update(engine);

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));

  }
  
  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }

  for (var f = 0; f < plinkos.length; f++) {

    plinkos[f].display();
  }

  ground.display();
}
