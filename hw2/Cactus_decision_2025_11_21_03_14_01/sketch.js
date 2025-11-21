function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#ceedbb');
  
  strokeWeight(0);
  fill('#ffffff')
  rect(100, 350, 400, 100, 40);
  
  strokeWeight(0);
  fill('#f7e1be')
  ellipse(300, 250, 200,250);
  
  
  strokeWeight(0);
  fill('#453434')
  strokeWeight(0);
  ellipse(300, 150, 290,280);
  
  stroke('#453434');
  strokeWeight(90);
  bezier(200, 150, 150, 240, 290, 270, 180, 380);
  bezier(400, 150, 450, 240, 310, 270, 420, 380);
  
  strokeWeight(0);
  fill('#f7e1be')
  ellipse(300, 180, 200,250);
  ellipse(200, 190, 50,80);
  ellipse(400, 190, 50,80);
  
  
  fill('#453434')
  strokeWeight(30);
  curve(230, 40, 275, 40, 180, 165, 80, 200);
  strokeWeight(50);
  curve(370, 40, 275, 40, 420, 165, 520, 200);
  ellipse(360, 90, 45,50);
  
  stroke('#bdbdbd')
  strokeWeight(14);
  point(195, 215);
  point(405, 215);

  fill('#000000')
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
  
  stroke('#ffffff')
  strokeWeight(9);
  point(275, 195);
  point(335, 195);
  
  fill('#ffb0c5')
  strokeWeight(0);
  triangle(260, 250, 300, 270, 340, 250);
}