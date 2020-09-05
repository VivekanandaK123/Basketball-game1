class Basket{
    constructor(x,y,width,height){
     var options = {
         isStatic:true
     }
  
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     //Matter.Body.setAngle(this.body,angle);
     //this.image = loadImage("Sprites/dustbingreen.png");
     World.add(world,this.body);
  
    }
  
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    fill("white")
    push();
    rectMode(CENTER);
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
   // rect(this.image,0,0,100,100);
    rect(0,0,this.width, this.height);
    pop();
    }
  
    leftDisplay(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,this.width, this.height);
        pop();
        }
    
    rightDisplay(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,this.width, this.height);
        pop();
        } 
            
     bottomDisplay(){
         var pos = this.body.position;
         var angle = this.body.angle;
        fill("white");
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,this.width, this.height);
        pop();
         } 
       
  }

