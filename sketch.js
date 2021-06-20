var ground;
var wall1,wall2,wall3;
var player,playerImage, wallImage;
var background,backgroundImage;
var score;
var time;
var powerUps=7;
var gameState="play";

function preload() {
 backgroundImage=loadImage("background.jpg");
 wallImage=loadImage("Wall1.jpg");
 playerImage=loadImage("player1.png")
 powerUpsImage=loadImage("powerup.png");
 destinationImage=loadImage("destination.png")
}

function setup(){
    
    var canvas = createCanvas(1300,600);
    score=0;
    time=0;
   
    bg=createSprite(650,280)
    bg.addImage("bg",backgroundImage)
    bg.scale=1.4;

    destination=createSprite(1000,60);
    destination.addImage(destinationImage);
    destination.scale=0.3;

    player=createSprite(100,100,100,100);
    player.addImage(playerImage);
    ground=createSprite(800,580,1600,20);
    
    power1=createSprite(140,420,150,20);
    power2=createSprite(840,420,80,20);
    power3=createSprite(300,320,150,20);
    power4=createSprite(800,260,150,20);
    power5=createSprite(100,260,150,20);
    power6=createSprite(500,500,170,100);
    power7=createSprite(630,370,100,20);
    power8=createSprite(340,180,150,20);

   


        powerUpsGroup=new Group();


        powerUpsGroup.add(power1)
        powerUpsGroup.add(power2)
        powerUpsGroup.add(power3)
        powerUpsGroup.add(power4)
        powerUpsGroup.add(power5)
        powerUpsGroup.add(power6)
        powerUpsGroup.add(power7)
        powerUpsGroup.add(power8)

        power1.addImage(powerUpsImage)
        power2.addImage(powerUpsImage)
        power3.addImage(powerUpsImage)
        power4.addImage(powerUpsImage)
        power5.addImage(powerUpsImage)
        power6.addImage(powerUpsImage)
        power7.addImage(powerUpsImage)
        power8.addImage(powerUpsImage)

    wall1=createSprite(140,450,150,20);
    wall2=createSprite(840,450,80,20);
    wall3=createSprite(300,340,150,20);
    wall4=createSprite(800,280,150,20);
    wall5=createSprite(100,280,150,20);
    wall6=createSprite(500,520,170,100);
    wall7=createSprite(630,390,100,20);
    wall8=createSprite(340,200,150,20);
    
    wall1.addImage(wallImage);
    wall2.addImage(wallImage);
    wall3.addImage(wallImage);
    wall4.addImage(wallImage);
    wall5.addImage(wallImage);
    wall6.addImage(wallImage);
    wall7.addImage(wallImage);
    wall8.addImage(wallImage);

    wall1.scale=0.3;
    wall2.scale=0.3;
    wall3.scale=0.4;
    wall4.scale=0.5;
    wall5.scale=0.3;
    wall6.scale=0.4;
    wall7.scale=0.4;
    wall8.scale=0.3;

    power1.scale=0.3;
    power2.scale=0.3;
    power3.scale=0.4;
    power4.scale=0.5;
    power5.scale=0.3;
    power6.scale=0.4;
    power7.scale=0.4;
    power8.scale=0.3;

    /*
    wall1.debug=true;
    wall2.debug=true;
    wall3.debug=true;
    wall4.debug=true;
    wall5.debug=true;
    wall6.debug=true;
    wall7.debug=true;
    wall8.debug=true;

    player.debug=true;
    */
  
    player.scale=0.3
player.addImage(playerImage)
 
}

function draw(){
   
    background(200);

    if(gameState==="play")
    time=Math.round(frameCount/30);
    
    textSize(20)
    fill("white")
    text("Score: "+score,20,20)
    text("Time: "+time,20,50)

    if(player.isTouching(power1)){
        power1.destroy();
        score=score+1
    }
    if(player.isTouching(power2)){
        power2.destroy();
        score=score+1
    }
    if(player.isTouching(power3)){
        power3.destroy();
        score=score+1
    }
    if(player.isTouching(power4)){
        power4.destroy();
        score=score+1
    }
    if(player.isTouching(power5)){
        power5.destroy();
        score=score+1
    }
    if(player.isTouching(power6)){
        power6.destroy();
        score=score+1
    }
    if(player.isTouching(power7)){
        power7.destroy();
        score=score+1
    }
    if(player.isTouching(power8)){
        power8.destroy();
        score=score+1
    }

    


   if(keyDown(UP_ARROW)){
    player.velocityY=-7;
   }

   if(keyDown(RIGHT_ARROW)){ 
    player.x+=5;
   }

   if(keyDown(LEFT_ARROW)){
    player.x-=5;
   }

    player.velocityY=player.velocityY+0.5
    player.collide(ground)
    player.collide(wall1)
    player.collide(wall2)
    player.collide(wall3)
    player.collide(wall4)
    player.collide(wall5)
    player.collide(wall6)
    player.collide(wall7)
    player.collide(wall8);

   

    if(powerUps===0){
        textSize(40)
        text("YOU WIN",650,300)
    }
drawSprites();


textAlign(CENTER    );
fill("white")
text("DESTINATION",1000,100);


text("Collect all the powerups to get to the next level",500,100)
if(gameState==="end"){

    textSize(40);
    textAlign(CENTER);
    text("You Win!",650,300)
    player.x=1000;
    player.y=90;
    player.velocityY=0;
  
    text("You took " + time + " seconds",650,350)
}

if(player.isTouching(destination) ){

    if(score===8){
        gameState="end"
    }
    

    if(score<8){
       alert("You did not collect all the powerups, try again")
       player.x=100;
        player.y=50;


    }
    
}


}




