//namespacing for referencing, also called renaming
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, object;

function setup() {
  createCanvas(400,400);

  //Engine means Matter.Engine
  engine= Engine.create();

  //within my own physics engine, I am creating my world
  world= engine.world;

  //passing options to create a static rectangle
  var options= {
    isStatic: true
  }

//matter.js has a pre-defined function called rectangle to create a rectangular shape
  //including the variable options in our object creation
  object= Bodies.rectangle(200,100,50,50, options);

  //all bodies are added to the world after creation
  World.add(world, object);

  console.log(object);

  //printing the object type on the console
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);
  
}

function draw() {
  background(255,255,255); 
  //regularly updating the physics engine
  Engine.update(engine);

  rectMode(CENTER);
  //rect(200,200,50,50); 

  //instead of drawing the rectangle at any position, let's draw it at the position of the object
  rect(object.position.x,object.position.y,50,50)
  drawSprites();
}