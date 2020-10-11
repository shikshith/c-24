class Bird {
    constructor(x, y ) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
        //get the bird position and make it move with the mouse
      var pos =this.body.position;
      pos.x=mouseX
      pos.y=mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //gives the thickness of the boundary
      strokeWeight(4);
      //dicides the boundary colour
      stroke("blue");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };