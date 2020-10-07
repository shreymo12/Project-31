class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          friction: 0,
          isStatic:true
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
      translate(pos.x, pos,y);
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0, 0, 10, 10);
      pop (); 
    }
  };
