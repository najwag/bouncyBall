const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var groundObject, box1, box2, box3 ;

/*TO CREATE AN OBJECT FROM THE CLASS
1) create varibles for the object
2) mention that the object belongs to the class
3) display the object

*/

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //objectName = new CLassName()
    groundObject = new Ground()

    box1 = new Box(200,300,50,50)
    box2 = new Box(240,100,50,100)
    

    

    
}

function draw(){
    background(0);
    Engine.update(engine);

    //objectName.functionName();
    groundObject.groundDisplay()

    box1.boxDisplay()
    box2.boxDisplay()
    

    
}