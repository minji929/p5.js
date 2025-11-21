function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#ffcccc');
  stroke('#ff9933');
  strokeWeight(20);
  line(0, 185, 600, 185);

  
  stroke('#0099ff');
  strokeWeight(30);
  fill('#99ccff')
  circle(700, -100, 1000);
  
  stroke('#99ffcc');
  strokeWeight(0);
  fill('#99ffcc')
  circle(250, 150, 100);
  circle(320, 150, 100);
  circle(250, 220, 100);
  circle(320, 220, 100);
  
  fill('#ffff99')
  triangle(600, 0, 550, 40, 600, 80);
  triangle(600, 80, 500, 120, 600, 160);
  triangle(600, 160, 550, 200, 600, 240);
  triangle(600, 240, 500, 280, 600, 320);
  triangle(600, 320, 550, 360, 600, 400);
  
  stroke('#e6d6f9');
  strokeWeight(40);
  point(285, 185);
  
  stroke('#f45f89');
  strokeWeight(10);
  line(0, 350, 600, 350);
  line(0, 370, 600, 370);
  line(30, 0, 30, 600);
  
  stroke('#ffff99');
  strokeWeight(3);
  fill('#7fba6f')
  ellipse(85, 300, 60, 40);
  
  stroke('#fcab97');
  strokeWeight(4);
  fill('#fcd297')
  rect(10, 20, 80, 60, 10);
  
  strokeWeight(0);
  fill('#fcab98')
  rect(70, 60, 80, 60, 10);

}