class Particle {
    constructor(x,y) {
      var options = {
          isStatic: false, 
          
      }
      this.body = Bodies.circle(x,y,10,options);
      this.color = color(random(0,255), random(0,255), random(0,255));
      this.width = width;
      this.height = height;
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push (); 
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(0, 0, 10,10);
      pop () ; 
    }
  };
