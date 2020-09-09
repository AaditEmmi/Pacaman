var Pacman, Football, Ghost1, Ghost2, Ghost3;
var PacmanImage, FootballImage, Ghost1Image, Ghost2Image , Ghost3Image ;

function preload(){
PacmanImage = loadImage("images/Pacman(2).jpg");
Footballimage = loadImage("images/Football.png");
Ghost1Image = loadImage("images/Ghost_1.png");
Ghost2Image = loadImage("images/Ghost_2.png");
Ghost3Image = loadImage("images/Ghost_3.png");

}

function setup() {
   createCanvas(800,400);
   Pacman = createSprite(125,140,80,90);
   Pacman.addImage(PacmanImage);
   Football = createSprite(135,145,60,50);
   Football.addImage(FootballImage);
   Ghost1 = createSprite(125,135,60,80);
   Ghost1.addImage(Ghost1Image);
   Ghost2 = createSprite(155,165,70,80);
   Ghost2.addImage(Ghost2Image);
   Ghost3 = createSprite(135,120,50,40);
   Ghost3.addImage(Ghost3Image);
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function spawndots(){
  
}
