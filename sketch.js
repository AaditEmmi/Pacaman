var Pacman,  Ghost1, Ghost2, Ghost3;
var PacmanImage, FootballImage, Ghost1Image, Ghost2Image , Ghost3Image ;
var GameState;
var PlayState = 1;
var ENDState = 0;
GameState = PlayState;


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
   Ghost1 = createSprite(125,135,60,80);
   Ghost1.addImage(Ghost1Image);
   Ghost2 = createSprite(155,165,70,80);
   Ghost2.addImage(Ghost2Image);
   Ghost3 = createSprite(135,120,50,40);
   Ghost3.addImage(Ghost3Image);
 
}

function draw() {
  background(255,255,255);  

  Ghost1.velocityX = Math.round(random(-3,3));
  Ghost2.velocityX = Math.round(random(-3.3));
  Ghost3.velocityX = Math.round(random(-3,3));

  if ( GhostsGroup. isTouching (Pacman)){
       GameState = END;
  }
    
  drawSprites();

}

function spawnFootballs(){
  if (frameCount % 60 === 0){
   var Football1 = createSprite(400,100,60,50);
    Football1.addImage(FootballImage);
    Football1.velocityX = -3; 
    
    var Football2 = createSprite(450,200,60,50);
    Football2.addImage(FootballImage);
    Football2.velocityX = -3;

    var Football3 = createSprite(500,300,60,50);
    Football2.addImage(FootballImage);
    Football3.velocityX = -3;

  }
}


