function setup() {
  createCanvas(400,400);
}

function draw() {
  var cx = map(mouaeX, 0, width, 0, 255);
  var cy = map(mouaeY, 0, height, 0, 255);
  var nsize = width/8+cos(mouseY*PI/180)*width/16;
  fill(cx,cy,150,50);
  circle(mouseX,mouseY,nsize);
  console.log(cx);
}
