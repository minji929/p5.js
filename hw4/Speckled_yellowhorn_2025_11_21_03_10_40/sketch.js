let c1, c2;

function setup() {
  createCanvas(600, 400);
  
  c1 = color('#ffcccc');
  c2 = color('#ccccff');
}

function draw() {
  let t = frameCount * 0.02;

  let amt = (sin(t * 0.5) + 1) / 2;
  let bgColor = lerpColor(c1, c2, amt);
  background(bgColor);


  stroke('#ff9933');
  strokeWeight(20);
  line(0, 185, 600, 185);

  stroke('#0099ff');
  strokeWeight(30);
  fill('#99ccff')
  circle(700, -100, 1000);
  
  fill('#ffff99')
  triangle(600, 0, 550, 40, 600, 80);
  triangle(600, 80, 500, 120, 600, 160);
  triangle(600, 160, 550, 200, 600, 240);
  triangle(600, 240, 500, 280, 600, 320);
  triangle(600, 320, 550, 360, 600, 400);
  
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

  
  let cloverSize = 100 + sin(t * 1.5) * 30; 
  
  let moveX = cos(t) * 15;
  let moveY = sin(t) * 15;

  stroke('#99ffcc');
  strokeWeight(0);
  fill('#99ffcc')
  circle(250 + moveX, 150 + moveY, cloverSize);
  circle(320 + moveX, 150 + moveY, cloverSize);
  circle(250 + moveX, 220 + moveY, cloverSize);
  circle(320 + moveX, 220 + moveY, cloverSize);
  
  stroke(random(150, 250), random(100, 200), random(200, 255));
  strokeWeight(40);
  point(285 + moveX, 185 + moveY);
}
