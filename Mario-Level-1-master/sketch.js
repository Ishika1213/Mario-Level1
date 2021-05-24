var mario, mariorunning, bg, bgimg, ground;

function preload(){
mariorunning= loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png");
bgimg= loadImage("images/bgnew.jpg");
}

function setup() {
createCanvas(1000, 600);
bg= createSprite(580,300);
bg.addImage(bgimg);
bg.scale= 0.5;
mario= createSprite(200,525,20,50);
mario.addAnimation("running",mariorunning);
mario.scale= 0.3;
//platform
ground= createSprite(200,585,400,10);
ground.visible= false;
}

function draw() {
    //gravityForMario
    mario.velocityY=mario.velocityY+ 0.5
    if(keyDown("space")){
        mario.velocityY=-16;
    }
    if (mario.y<=50){
        mario.y=75;
    }
    mario.debug= true;
    //platformCollide
    mario.collide(ground);
drawSprites();
}
