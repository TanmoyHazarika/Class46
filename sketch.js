const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World  = Matter.World;


var bodyguard,bodyguardImage;
var backgroundImage;
var world;
var engine;
var ground;
var box1,box2,box3;
var boxGroup;

function preload(){
  bodyguardImage = loadAnimation("Animation/Man1.png","Animation/Man2.png","Animation/Man3.png","Animation/Man4.png","Animation/Man5.png","Animation/Man6.png")
  backgroundImage = loadImage("Animation/Background.png")
  box1 = loadImage("Animation/box1.png")
  box2 = loadImage("Animation/box2.png")
  //box3 = loadImage("Animation/box3.png")

}
function setup() {

  engine = Engine.create();
  world = engine.world;
  createCanvas(1500,700);
  ground = createSprite(150,600,1500,10)
  background = createSprite(400,240,1500,700)
  background.addImage(backgroundImage)
  background.x = 400;
 bodyguard =  createSprite(150, 590, 40, 40);
 bodyguard.addAnimation("Image",bodyguardImage)

 boxGroup = new Group(  )

 
}

function draw() {
  //background(backgroundImage); 
  
  background.velocityX = -3;

  if (background.x < 0){
   background.x =  background.width/2;
  }
  if(keyDown("space")&& bodyguard.y >= 479 ) {
    bodyguard.velocityY = -12;
  }
  bodyguard.collide(ground);
  bodyguard.velocityY = bodyguard.velocityY +0.5
console.log(bodyguard.y)
  
 // if(frameCount % 80 === 0){
    //box1 = createSprite(0,565,20,10)


  // }
if(bodyguard.isTounching(boxGroup)){
    
}
    


  createBox()
 

  drawSprites();
}


function createBox(){
  if(frameCount % 120 === 0){

    box = createSprite(1500,600,30,10)
    box.velocityX = -3
    
   // box.y = Math.round(random(600,500))
    box.scale = 0.2

  var rand = Math.round(random(1,3))
    switch(rand){
      case 1 : box.addImage(box1);
      break;
      case 2 : box.addImage(box2);
      break;
     
      default:break
    }
 
  }
  box.depth = bodyguard.depth
  bodyguard.depth = bodyguard.depth +1
   boxGroup.add(box)

  }


