const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var Hercule, Hercule_IMG;

var poacher1, poacher1_IMG, poacher2, poacher2_IMG, poacher3, poacher3_IMG, poacher4, poacher4_IMG;

var seed1,seed2,seed3;
var seed_IMG;

var bullet, bullet_IMG;

var law, law_IMG;

var left_LINE, right_LINE, up_LINE, down_LINE;

var separation_line_1, separation_line_2, separation_line_3;

var rect1, rect2, rect3, rect4, rect5, rect6, rect7;

var rect1_version2, rect2_version2, rect3_version2, rect4_version2, rect5_version2, rect6_version2, rect7_version2;
var rect3_version2_fake,rect6_version2_fake;

var rect1_version3, rect2_version3, rect3_version3, rect4_version3, rect5_version3, rect6_version3, rect7_version3;
var rect2_version3_fake, rect7_version3_fake;

var invisible_line_1, invisible_line_2;

function preload()
{  
   Hercule_IMG = loadImage("images/EGG_IMG.png");
   poacher1_IMG = loadImage("images/Poacher_1.png");
   poacher2_IMG = loadImage("images/Poacher_2.png");
   poacher3_IMG = loadImage("images/Poacher_3.png");
   poacher4_IMG = loadImage("images/Poacher_4.png");
   law_IMG = loadImage("images/LAW_IMG.png");
   seed_IMG = loadImage("images/SEED_IMG.png");
   bullet_IMG = loadImage("images/bullet_img.png");

}

function setup()
{
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  camera.on();
  //camera.zoom = 0.80;

  seed1 = createSprite(400,400,20,20);
  seed1.addImage("seed1 image", seed_IMG);
  seed1.scale = 0.25;
  seed1.debug = true;
  seed1.setCollider("rectangle", 0, -10, 70, 80)
  
  seed2 = createSprite(400,400,20,20);
  seed2.addImage("seed2 image", seed_IMG);
  seed2.scale = 0.25;
  seed2.debug = true;
  seed2.setCollider("rectangle", 0, -10, 70, 80);

  seed3 = createSprite(400,400,20,20);
  seed3.addImage("seed3 image", seed_IMG);
  seed3.scale = 0.25;
  seed3.debug = true;
  seed3.setCollider("rectangle", 0, -10, 70, 80);

  poacher1 = createSprite(400,10,20,20);
  poacher1.addImage("first poacher", poacher1_IMG);
  poacher1.scale = 0.20;
  poacher1.debug = true;
  poacher1.setVelocity(random(-5,5), random(0,0));

  poacher2 = createSprite(300,187,20,20);
  poacher2.addImage("second poacher", poacher2_IMG);
  poacher2.scale = 0.20;
  poacher2.debug = true;
  poacher2.setVelocity(random(-8,8), random(-5,5));

  poacher3 = createSprite(300,-95,20,20);
  poacher3.addImage("third poacher",poacher3_IMG);
  poacher3.scale = 0.375;
  poacher3.debug = true;
  poacher3.setVelocity(random(-20,20), random(0,0));

  bullet = createSprite(400, -50, 20,10);
  bullet.addImage("bullet from poacher3", bullet_IMG);
  bullet.scale = 0.10; 
  bullet.setVelocity(0,0);

  //add poacher4
  
  Hercule = createSprite(280,400,20,20);
  Hercule.addImage("eggimage", Hercule_IMG);
  Hercule.scale = 0.125;
  Hercule.debug = true;
  Hercule.setCollider("rectangle", 0, 0, 255, 390)  

  law = createSprite(1000000000,100000000, 10, 10);
  law.addImage("law", law_IMG);
  law.setCollider("rectangle", -5, -5, 0, 0);
 // law.scale = 0.05;
  law.debug = true;
  law.visible = true;

  left_LINE = createSprite(0,0,0.5,1200);
  left_LINE.visible = false;
  right_LINE = createSprite(600,0,1,1200);
  right_LINE.visible = false;
  up_LINE = createSprite(0,0,1200,1);
  up_LINE.visible = false;  
  down_LINE = createSprite(0,600,1200,1);
  down_LINE.visible = false;

  separation_line_1 = createSprite(300,120,600,5);
  separation_line_1.visible = false;

  separation_line_2 = createSprite(300,245,600,5);
  separation_line_2.visible = false;
  separation_line_2.setCollider("rectangle", 0,0,600,0.5);

  separation_line_3 = createSprite(300,-25,600,5);
  separation_line_3.debug = false;
  separation_line_3.visible = false;


  rect1 = createSprite(35,245,70,10)
  rect1.shapeColor = "green";
  rect2 = createSprite(105,245,70,10);
  rect2.shapeColor = "blue";
  rect3 = createSprite(175, 245, 70,10);
  rect3.shapeColor = "red";
  rect4 = createSprite(310,245,200,10);
  rect4.shapeColor = "pink";
  rect5 = createSprite(445,245,70,10);
  rect5.shapeColor = "red";
  rect6 = createSprite(515,245,70,10);
  rect6.shapeColor = "blue";
  rect7 = createSprite(585,245,70,10);
  rect7.shapeColor = "green"; 

  rect1_fake = createSprite(35,245,70,8);
  rect1_fake.shapeColor = "green";
  rect5_fake = createSprite(445,245,70,10);
  rect5_fake.shapeColor = "red";

  rect1_version2 = createSprite(35,120,70,10);
  rect1_version2.shapeColor = "green";
  rect2_version2 = createSprite(105,120,70,10);
  rect2_version2.shapeColor = "blue";
  rect3_version2 = createSprite(175,120,70,10);
  rect3_version2.shapeColor = "red";
  rect4_version2 = createSprite(310,120,200,10);
  rect4_version2.shapeColor = "pink";
  rect5_version2 = createSprite(445,120,70,10);
  rect5_version2.shapeColor = "red";
  rect6_version2 = createSprite(515,120,70,10);
  rect6_version2.shapeColor = "blue";
  rect7_version2 = createSprite(585,120,70,10);
  rect7_version2.shapeColor = "green";

  rect3_version2_fake = createSprite(175,120,70,10)
  rect3_version2_fake.shapeColor = "red";
  rect6_version2_fake = createSprite(515,120,70,10);
  rect6_version2_fake.shapeColor = "blue"

  rect1_version3 = createSprite(35,-25,70,10);
  rect1_version3.shapeColor = "green";
  rect2_version3 = createSprite(105,-25,70,10);
  rect2_version3.shapeColor = "blue";
  rect3_version3 = createSprite(175,-25,70,10);
  rect3_version3.shapeColor = "red";
  rect4_version3 = createSprite(310,-25,200,10);
  rect4_version3.shapeColor = "pink";
  rect5_version3 = createSprite(445,-25,70,10);
  rect5_version3.shapeColor = "red";
  rect6_version3 = createSprite(515,-25,70,10);
  rect6_version3.shapeColor = "blue";
  rect7_version3 = createSprite(585,-25,70,10);
  rect7_version3.shapeColor = "green";

  rect2_version3_fake = createSprite(105,-25,70,10);
  rect2_version3_fake.shapeColor = "blue";
  rect7_version3_fake = createSprite(585,-25,70,10);
  rect7_version3_fake.shapeColor = "green";

  invisible_line_1 = createSprite(300,280,600,10);
  invisible_line_1.visible = false;

  invisible_line_2 = createSprite(separation_line_1.x, separation_line_1.y, separation_line_1.width, separation_line_1.height);
  invisible_line_2.visible = false;



}

function draw() 
{
  background(0,0,0);

  Engine.update(engine);  
  camera.y = Hercule.y - 5;

  seed1.x = poacher2.x;
  seed1.y = poacher2.y;

  seed2.x = poacher1.x;
  seed2.y = poacher1.y;

  seed3.x = poacher3.x;
  seed3.y = poacher3.y;



  if(Hercule.isTouching(poacher1))
  {
    Hercule.destroy();
    Hercule_IMG.destroy();
    law.destroy();
  }

  if(Hercule.isTouching(poacher2))
  {
    Hercule.destroy();
    Hercule_IMG.destroy();
    law.destroy();
  }

  if(Hercule.isTouching(poacher3))
  {
    Hercule.destroy();
    Hercule_IMG.destroy();
    law.destroy();
  }

  if(rect1.isTouching(law))
    {
      rect1.destroy();
      rect1_fake.destroy();
      law.x = 10000;
      law.y = 10000;
    }
  
  if(rect5.isTouching(law))
  {
    rect5.destroy();
    rect5_fake.destroy();
    law.x = 10000;
    law.y = 10000;
  }

  if(rect3_version2.isTouching(law))
  {
    rect3_version2.destroy();
    rect3_version2_fake.destroy();
    law.x = 10000;
    law.y = 10000;
  }
  
  if(rect6_version2.isTouching(law))
  {
    rect6_version2.destroy();
    rect6_version2_fake.destroy();
    law.x = 10000;
    law.y = 10000;
  }

  if(rect2_version3.isTouching(law))
  {
    rect2_version3.destroy();
    rect2_version3_fake.destroy();
    law.x = 10000;
    law.y = 10000;
  }

  if(rect7_version3.isTouching(law))
  {
    rect7_version3.destroy();
    rect7_version3_fake.destroy();
    law.x = 10000;
    law.y = 10000;
  }

  if(Hercule.y < separation_line_1.y && Hercule.y < separation_line_2.y && Hercule.y > separation_line_3.y)
  {
    rect1_version2.y = 209;
    rect2_version2.y = 209;
    rect3_version2.y = 209;
    rect3_version2_fake.y = 209;
    rect4_version2.y = 209;
    rect5_version2.y = 209;
    rect6_version2.y = 209;
    rect6_version2_fake.y = 209;
    rect7_version2.y = 209;
    separation_line_1.visible = false;
    separation_line_1.y = 209;
    Hercule.collide(separation_line_1);
    seed1.destroy();
    poacher2.destroy();


    textFont("Arial");
    textSize(20);
    fill("white");
    text("Level 2", 530, 179.625);
  }

  if(Hercule.y < separation_line_2.y )
  {
    rect1.y = 360;
    rect1_fake.y = 360;
    rect5.y = 360;
    rect5_fake.y = 360;
    rect2.y = 360;
    rect3.y = 360;
    rect4.y = 360;
    rect6.y = 360;
    rect7.y = 360;
    separation_line_2.visible = false;
    separation_line_2.y = 360;
    Hercule.collide(separation_line_2);

    textFont("Arial");
    textSize(20);
    fill("white");
    text("Level 1", 530, 340.625);

    bullet.x = poacher3.x;
    bullet.y = poacher3.y;
  } 

  if(Hercule.y < separation_line_3.y)
  {
    rect1_version3.y = 30;
    rect2_version3.y = 30;
    rect2_version3_fake.y = 30; 
    rect3_version3.y = 30;
    rect4_version3.y = 30;
    rect5_version3.y = 30;
    rect6_version3.y = 30;
    rect7_version3.y = 30;
    rect7_version3_fake.y = 30; 
    separation_line_3.visible = false;
    separation_line_3.y = 30;
    Hercule.collide(separation_line_3);

    seed2.destroy();
    poacher1.destroy();

    bullet.velocityX = 2;
    bullet.velocityY = 3;
    bullet.y = Hercule.y;


  }

  if(bullet.collide(Hercule))
  {
    bullet.visible = false;
    Hercule_IMG.destroy();
    bullet_IMG.destroy();
    

  }
  
  poacher1.bounceOff(left_LINE);
  poacher1.bounceOff(right_LINE); 
  poacher1.bounceOff(up_LINE);
  poacher1.bounceOff(separation_line_1);

  poacher2.bounceOff(left_LINE);
  poacher2.bounceOff(right_LINE);
  poacher2.bounceOff(up_LINE);
  poacher2.bounceOff(down_LINE);
  poacher2.bounceOff(separation_line_1);
  poacher2.bounceOff(separation_line_2);
  poacher2.bounceOff(invisible_line_1);
  poacher3.bounceOff(left_LINE);
  poacher3.bounceOff(right_LINE);

 
  Hercule.collide(rect1_fake);
  Hercule.collide(rect5_fake);
  Hercule.collide(rect2);
  Hercule.collide(rect3);
  Hercule.collide(rect4);
  Hercule.collide(rect6);
  Hercule.collide(rect7);

  Hercule.collide(rect1_version2);
  Hercule.collide(rect3_version2_fake);
  Hercule.collide(rect6_version2_fake);
  Hercule.collide(rect2_version2);
  Hercule.collide(rect4_version2);
  Hercule.collide(rect5_version2);
  Hercule.collide(rect7_version2);

  Hercule.collide(rect1_version3);
  Hercule.collide(rect2_version3);
  Hercule.collide(rect3_version3);
  Hercule.collide(rect4_version3);
  Hercule.collide(rect5_version3);
  Hercule.collide(rect6_version3);
  Hercule.collide(rect7_version3);

  Hercule.collide(left_LINE);
  Hercule.collide(right_LINE);
 // Hercule.collide(up_LINE);
  Hercule.collide(down_LINE);

  if(keyDown(UP_ARROW))
  {
   Hercule.y = Hercule.y - 10;
  }

  if(keyDown(LEFT_ARROW))
  {
   Hercule.x = Hercule.x - 10;
  }

  if(keyDown(RIGHT_ARROW))
  {
   Hercule.x = Hercule.x + 10;
  }

  if(keyDown(DOWN_ARROW))
  {
   Hercule.y = Hercule.y + 10;
  }

  if(keyWentDown("space"))
  {
    law.visible = true;
    law.scale = 0.25;
    law.x = Hercule.x;
    law.y = Hercule.y;
    law.velocityY = -10;
   // law.lifetime = 30;
  }

  if(rect2.isTouching(law) || rect3.isTouching(law) || rect4.isTouching(law) || rect6.isTouching(law) || rect7.isTouching(law) || separation_line_1.isTouching(law))
  {
    law.x = 100000;
    law.y = 100000;
  }

  if(rect1_version2.isTouching(law) || rect2_version2.isTouching(law) || rect4_version2.isTouching(law) || rect5_version2.isTouching(law) || separation_line_2.isTouching(law))
  {
    law.x = 10000;
    law.y = 10000;
  }

  if(rect1_version3.isTouching(law) || rect3_version3.isTouching(law) || rect4_version3.isTouching(law) || rect5_version3.isTouching(law) || rect6_version3.isTouching(law) || separation_line_3.isTouching(law))
  {
    law.x = 1000;
    law.y = 1000;
  } 

  if(law.isTouching(poacher1))
  {
    poacher1.destroy();
    seed1.visible = true;
  }

  if(seed1.isTouching(Hercule))
  {
    seed1.destroy();
    //score will be added by 1. 
  }

  if(law.isTouching(poacher2))
  {
    poacher2.destroy();
    seed2.visible = true;
  }

  if(seed2.isTouching(Hercule))
  {
    seed2.destroy();
  }

  if(law.isTouching(poacher3))
  {
    poacher3.destroy();
    seed3.visible = true;
    bullet.destroy();
  }

  if(seed3.isTouching(Hercule))
  {
    seed3.destroy();
  }





  
  drawSprites();


}