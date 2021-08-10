// module aliases
let Engine = Matter.Engine,
  // Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;
let engine;
let composite;
// let box1; moved to box.js
let boxes = [];

let ground;

function setup() {
  createCanvas(700, 400);
  engine = Engine.create();
  composite = engine.world;
  // box1 = Bodies.rectangle(200, 100, 80, 80); moved to box.js
  Matter.Runner.run(engine);
  // box1 = new Box(100, 100, 50, 50);modified in boxes
  // Composite.add(composite, box1); moved to box.js
  let options = {
    isStatic: true,
  };
  // ground = Bodies.rectangle(200, height - 50, width * 2, 30, options);
  // ground = Bodies.rectangle(width / 2, height - 10, width, 20, options);
  // ground = new Ground(width / 2, height - 10, width, 20);
  ground = boxes.push(new Ground(width / 2, height - 10, width, 20));
  

  Composite.add(composite, ground);
}

//for every mouse clicke
// function mousePressed() {
//   boxes.push(new Box(mouseX, mouseY, 20, 20)); // create squares
//   boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40))); // create rectangles of random size
//   boxes.push(new Circle(mouseX, mouseY, 16, 16));
// }

//if we click and drag the mouse
function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40))); // create rectangles of random size
  boxes.push(new Circle(mouseX, mouseY, 16, 16));
}

function draw() {
  background(51);
  // console.log(box1.position.x);
  // rect(box1.position.x, box1.position.y, 80, 80); moved to box.js
  // box1.show();modified in boxes
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

  // stroke(170);s
  // // options moved to box.js
  // fill(254);
    // strokeWeight(4);
  // line(200, height, width, 10, { isStatic: true }); //create a line
  //   // reactMode(CENTER);
    // rect(200, height, width, 10);
}
