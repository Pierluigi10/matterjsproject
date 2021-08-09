// function Box(x, y, w, h) {
//   this.body = Bodies.rectangle(x, y, w, h);
//   // this.body.friction = 0; //con questa opzione scivolano di + i rettangoli
//   this.body.restitution = 0.6; // elasticity
//   this.w = w;
//   this.h = h;
//   Composite.add(composite, this.body);

//   this.show = function () {
//     const pos = this.body.position;
//     // const angle = this.body.angle;

//     // 16;43 https://youtu.be/urR596FsU68?t=1003

//     push();
//     translate(pos.x, pos.y);
//     // rotate(angle);
//     // rectMode(center);
//     strokeWeight(1);
//     stroke(255);
//     fill(127);
//     rect(0, 0, this.w, this.h);
//     pop();
//   };
// }

class Box {
  constructor(x, y, w, h) {
    // x,y coordinates, w width, h height
    this.body = Matter.Bodies.rectangle(x, y, w, h);
    
    this.w = w;
    this.h = h;
    Composite.add(composite, this.body);
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(127);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}