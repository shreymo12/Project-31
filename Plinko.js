class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.width = width;
      this.height = height;
      this.radius = 10; 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y, 10, 10);
      pop (); 
    }
  };
