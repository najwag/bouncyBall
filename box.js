//to create a class --> class ClassName
class Box{

    constructor(x,y,width,height){          //properties
    
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world,this.body)
    }
    
    boxDisplay(){
    var pos = this.body.position;

    push();
    rectMode(CENTER);
    fill("blue")
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    rect(0,0,this.width,this.height) 
    pop();
    }


   
    
    }