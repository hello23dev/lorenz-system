var sigma = 10;
var gamma = 8.0/3.0;
var rho = 28;



var x = 0.01;
var y = 0.1;
var z = 0.0;

var dt = 0.01;

var points = [];

function setup() {
  createCanvas(700, 500);
  background(60);
}

function draw() {

  var dx = (sigma * (y - x))*dt;
  var dy = dy = (x * (rho - z) - y)*dt;
  var dz = dz = (x * y - gamma * z)*dt;

  x = x + dx;
  y = y + dy;
  z = z + dz;
  translate(width/2, height/2);


  points.push(createVector(x,y,z));
  beginShape();
  noFill();
  scale(5);
  for(var i = 0;i < points.length; i ++) {
    stroke(255, 255, 255);
    vertex(points[i].x, points[i].y);
}

  endShape();


}
