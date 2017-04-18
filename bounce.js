var context;
// global variable coordinates
var x = 100;
var y = 200;
var dx = 5;
var dy = 5;

// function to iniatiate the drawing of circle.
function init() {
  // getContext method returns an object context, that provides the methods and properties for drawingon the canvas, ('2d') is a context type parameter
  context= myCanvas.getContext('2d');
  // call the draw function every 10ms using setInterval method
  setInterval(draw,10);
}

function draw() {
  // clearReact method clears the previous circle before it draws a new one.
  context.clearRect(0,0,800,600);
  context.beginPath();
  context.fillStyle="orange";
  // Draw a circle of radius 20 at the coordinates 100,200 on the canvas using the arc and fill methods
  context.arc(x,y,20,0,Math.PI*2,false);
  context.closePath();
  context.fill();
  // Boundary logic, check if x and y are beyond the canvas dimensions. If so, then we reverse the direction by setting values of dx and dy to the negative values.
  if(x<0 || x>800) dx=-dx;
  if(y<0 || y>600) dy=-dy;
  x+=dx;
  y+=dy;
}
