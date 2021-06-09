var hasDocked=false;

function preload(){
  issImg=loadImage("iss.png");
  sci=loadImage("spacecraft1.png");
  scd=loadImage("spacecraft2.png");
  scr=loadImage("spacecraft3.png");
  scl=loadImage("spacecraft4.png");
  bg=loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(800,500);
  iss=createSprite(400, 150, 50, 50);
  iss.addImage("station",issImg);
  iss.scale=0.75
  spacecraft=createSprite(400,400,50,50);
  spacecraft.addImage("still",sci);
  spacecraft.addImage("d",scd);
  spacecraft.addImage("r",scr);
  spacecraft.addImage("l",scl);
  spacecraft.scale=0.2;
  dock=createSprite(355, 165, 25, 25);
  dock.visible=false;
  
}

  

function draw() {
  background(bg);  
  
  spacecraft.setCollider("rectangle",0,30,100,500);
  spacecraft.debug=true;

  if(!hasDocked){
    spacecraft.x=random(spacecraft.x-1,spacecraft.x+1);
    if(keyDown("up")){
      spacecraft.y-=5;
      spacecraft.changeImage("still",sci);
    }
    else if(keyDown("down")){
      spacecraft.changeImage("d",scd);
    }
    else if(keyDown("right")){
      spacecraft.x+=5;
      spacecraft.changeImage("r",scr);
    }
    else if(keyDown("left")){
      spacecraft.x-=5;
      spacecraft.changeImage("l",scl);
    }
    else{
      spacecraft.changeImage("still",sci);
    }

    if(spacecraft.isTouching(dock)){
      hasDocked=true;
    }
}

if(hasDocked){
  textAlign(CENTER);
  textSize(20);
  fill("white");
  text("Docking successful!",400,300)
  text("Space to replay.",400,350)
  if(keyDown("space")){
    replay();
  }
}


  /*if(keyDown("up")){
    dock.y+=5;
  }
  else if(keyDown("down")){
   dock.y-=5;
  }
  else if(keyDown("right")){
   dock.x+=5;
  }
  else if(keyDown("left")){
    dock.x-=5;
  }
  else{
   console.log("x: " + dock.x+" y: " + dock.y);
  }*/
  
  drawSprites();

  
}

function replay() {
  hasDocked=false;
  spacecraft.x=400;
  spacecraft.y=400;
}