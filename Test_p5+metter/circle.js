// function Circle(x, y, r) {
//   this.body = Bodies.circle(x, y, r);
//   // this.body.friction = 0; //con questa opzione scivolano di + i rettangoli
//   this.body.restitution = 0.6; // elasticity
//   this.r = r;
//   Composite.add(composite, this.body);

//   this.show = function () {
//     const pos = this.body.position;
//     //   const angle = this.body.angle;
//     push();
//     translate(pos.x, pos.y);
//     //   rotate(angle);
//     // rectMode(CENTER);
//     strokeWeight(1);
//     stroke(255);
//     fill(255);
//     circle(0, 0, this.r);
//     pop();
//   };
// }

class Circle {
  constructor(x, y, r) {
    // x,y coordinates, r radius
    this.body = Matter.Bodies.circle(x, y, r);
    this.body.restitution = 0.6; // elasticity
    this.r = r;
    Composite.add(composite, this.body);
  }

  show() {
    const pos = this.body.position;
    // const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    //   rotate(angle);
    // rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(255);
    circle(0, 0, this.r);
    pop();
  }
}
