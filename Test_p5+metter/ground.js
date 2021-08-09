// class Ground extends Box {
//     constructor(x, y, w, h) {
//       super(x, y, w, h);
//       this.body.isStatic = true;
//     }
  
  
//   }
  
  class Ground {
    constructor(x, y, w, h) {
      // x,y coordinates, w width, h height
      this.body = Matter.Bodies.rectangle(x, y, w, h); 
      this.body.isStatic = true;  
      this.w = w;
      this.h = h;
      Composite.add(composite, this.body);
    }
  
    show() {
      const pos = this.body.position;
      // const angle = this.body.angle;
     
      push();
      strokeWeight(115);
      stroke(215);
      fill("green");
      
      // rotate(angle);
      
      
    
      pop();
    }
  }