//to create a class --> class ClassName
class Ground{

constructor(){          //properties

    var groundOptions = {
            isStatic: true
    }
this.body = Bodies.rectangle(200,380,400,20,groundOptions);
this.width = 400;
this.height = 20;
World.add(world,this.body)
}

groundDisplay(){
rectMode(CENTER);
fill("brown")
rect(this.body.position.x,this.body.position.y,this.width,this.height)
}
}

//sprite --> ground.x
//physics engine --> ground.position.x