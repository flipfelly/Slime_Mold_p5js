let molds = []; let num =4000; let d;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  
  d = pixelDensity();
  
  for (let i = 0; i < num; i++){
    molds[i] = new Mold();
  }
  
}
//number of pixels = 4*density*width*density*height
//in my case density=1
// d stands for density from now on

// It's important to know that in p5.js pixels are read as arrays, to be more specific an one dimensional array that contains the colors stored as numbers, representing red, green, blue, and alpha (RGBA) 

//when using the pixels its necessary to convert the position to an index, the formula is index = 4*(d*y)*(d*width)+4*(d*x)

// In this case we're gonna use  index = 4*(d* floor(this.rsensorPos.y))*(d*width)+4*(d*floor(this.rsensorPos.x)), the function floor is used to convert the result to an integer and we add the sensor position of the coordinates that we began with


function draw() {
  background(0,5);
  loadPixels();
  
  for (let i = 0; i < num; i++){
      molds[i].update();
      molds[i].display();
  }

}