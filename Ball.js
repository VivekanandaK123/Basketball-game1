class Ball {
    constructor(x, y){
  
    var options = {
     isStatic:false,
     restitution:0.6,
     density:1.5,
     friction:7
    }
    this.radius = 35;
    this.body = Bodies.circle(x, y, 35, options);
    this.image = loadImage("images/basketball.png");
    
    World.add(world, this.body);
  
    }
  
    display(){
  
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("black");
      fill("orange");
      //ellipseMode(RADIUS);
      //ellipse(0,0,this.radius);
      imageMode(CENTER);
      image(this.image,0,0,windowWidth/20,windowHeight/11.5);
      pop();
    }
  
  
  }