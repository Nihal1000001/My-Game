var gameState;
var Castle,Finn_Dead,Finn_Jumping,Finn_Running,Finn_Sitting,Finn_Sliding,Finn_Sneaking,Finn_Walking,Finn_Img;
var titleImg,Title;
var box;
function preLoad(){
  Castle=loadImage("Castle.jpg");
  Finn_Dead=loadImage("Finn_Dead.png");
  Finn_Jumping=loadImage("Finn_Jumping.png");
  Finn_Running=loadImage("Finn_Running.png");
  Finn_Sitting=loadImage("Finn_Sitting.png");
  Finn_Sliding=loadImage("Finn_Sliding.png");
  Finn_Sneaking=loadImage("Finn_Sneaking.png");
  Finn_Walking=loadImage("Finn_Walking.png");
  Finn_Img=loadImage("Finn.png");
  titleImg=loadImage("title.jpg");
}

function setup(){
createCanvas(1200,500);
gameState = "Start";
Title=createSprite(600,50,10,10);
Title.addImage(titleImg);
Title.visible=false;
Finn=createSprite(50,400,50,50);
Finn.addImage(Finn_Img);
Finn.visible=false;
}

function draw(){
  background("black");
  if(gameState==="Start"){
   Title.visible=true;
  Finn.visible=true;
  }
  drawSprites();
}