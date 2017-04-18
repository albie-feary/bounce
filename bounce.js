var context;
// global variable coordinates for three balls where initial x is start, y is finish (before it bounds), dx is speed and dy is angle of bounce
var x = 100;var y = 200;var dx = 5;var dy =5;
var x_1=500;var y_1=300;var dx_1=5;var dy_1=5;
var x_2=200;var y_2=500;var dx_2=5;var dy_2=5;
var x_3=300;var y_3=100;var dx_3=5;var dy_3=5;

// function to iniatiate the drawing of circle.
function init() {
  // getContext method returns an object context, that provides the methods and properties for drawingon the canvas, ('2d') is a context type parameter
  context= myCanvas.getContext('2d');
  // call the draw function every 20ms using setInterval method
  setInterval(draw,25);
}

function draw() {
  // clearReact method clears the previous circle before it draws a new one.
  context.clearRect(0,0,500,500);
  context.beginPath();
  context.fillStyle="orange";
  context.beginPath();
  context.arc(x,y,20,0,Math.PI*2,false);
  context.fill();
  context.beginPath();
  context.arc(x_1,y_1,10,0,Math.PI*2,false);
  context.fill();
  context.beginPath();
  context.arc(x_2,y_2,30,0,Math.PI*2,false);
  context.fill();
  context.beginPath();
  context.arc(x_3,y_3,40,0,Math.PI*2,false);
  context.fill();
  context.closePath();

  boundaryLogic();
}

// Boundary logic. Check if x and y are beyond the canvas dimensions then we reverse the direction by setting values of dx and dy to the negative values.
function boundaryLogic(){

  if (x<0 || x>500) dx=-dx;
  if (y<0 || y>500) dy=-dy;
  x+=dx;
  y+=dy;

  if (x_1<0 || x_1>500) dx_1 = -dx_1;
  if (y_1<0 || y_1>500) dy_1 = -dy_1;
  x_1 += dx_1;
  y_1 += dy_1;

  if (x_2<0 || x_2>500) dx_2 = -dx_2;
  if (y_2<0 || y_2>500) dy_2 = -dy_2;
  x_2 += dx_2;
  y_2 += dy_2;

  if (x_3<0 || x_3>500) dx_3 = -dx_3;
  if (y_3<0 || y_3>500) dy_3 = -dy_3;
  x_3 += dx_3;
  y_3 += dy_3;
}
