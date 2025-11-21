let clothingColor;
let eyeColor;

let highlightX = 0;
let highlightY = 0;

function setup() {
    
  createCanvas(600, 400);
  clothingColor = color('#ffffff');
  eyeColor = color('#000000');
}

function draw() {
  background('#ceedbb');


  highlightX = map(mouseX, 0, width, -6, 6);
  highlightY = map(mouseY, 0, height, -4, 4);

  

  strokeWeight(0);
  fill(clothingColor);
  rect(100, 350, 400, 100, 40);
  

  strokeWeight(0);
  fill('#f7e1be');
  ellipse(300, 250, 200, 250);
  

  strokeWeight(0);
  fill('#453434');
  ellipse(300, 150, 290, 280);
  
  // 양갈래 머리
  stroke('#453434');
  strokeWeight(90);
  bezier(200, 150, 150, 240, 290, 270, 180, 380);
  bezier(400, 150, 450, 240, 310, 270, 420, 380);
  

  strokeWeight(0);
  fill('#f7e1be');
  ellipse(300, 180, 200, 250);
  ellipse(200, 190, 50, 80);
  ellipse(400, 190, 50, 80);
  

  fill('#453434');
  strokeWeight(30);
  curve(230, 40, 275, 40, 180, 165, 80, 200);
  strokeWeight(50);
  curve(370, 40, 275, 40, 420, 165, 520, 200);
  ellipse(360, 90, 45, 50);
  
 
  stroke('#bdbdbd');
  strokeWeight(14);
  point(195, 215);
  point(405, 215);


  fill(eyeColor);
  strokeWeight(0);
  ellipse(270, 200, 30, 40);
  ellipse(330, 200, 30, 40);

 
  stroke('#000000');
  strokeWeight(5);
  line(230, 155, 280, 150);
  line(320, 150, 370, 155);
  strokeWeight(3);
  line(250, 180, 265, 185);
  line(245, 185, 260, 190);
  line(335, 185, 350, 180);
  line(340, 190, 355, 185);
  
  
  stroke('#ffffff');
  strokeWeight(9);
  point(275 + highlightX, 195 + highlightY);
  point(335 + highlightX, 195 + highlightY);
  
  
  fill('#ffb0c5');
  strokeWeight(0);
  triangle(260, 250, 300, 270, 340, 250);
}

function keyPressed() {
  clothingColor = color(random(255), random(255), random(255));
  eyeColor = color(random(255), random(255), random(255));
}