function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // perete
  fill(255);
  rect(100, 200, 200, 150);

  // acoperiș
  fill('red');
  triangle(100, 200, 300, 200, 200, 100);

  // ușă
  fill('brown');
  rect(170, 270, 60, 80);

  // ferestre
  fill('cyan');
  rect(250, 240, 50, 50);

  fill('cyan');
  rect(100, 240, 50, 50);

  // Soare
  fill(255, 255, 15);
  ellipse(350, 80, 60, 60);
}
