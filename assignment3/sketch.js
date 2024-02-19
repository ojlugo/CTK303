let cars = [] ;

function setup() {
  createCanvas(windowWidth, windowHeight);

   for (let i = 0; i<100; i++) {
  cars.push(new Car()) ;
   }
}

function draw() {
  background(100);

  for (let i = 0; i<cars.length ; i++){
    cars[i]. display();
    cars[i].move();
  }
  

}

class Car {
  // The class's constructor and attributes
  constructor() {
    this.pos = createVector(random(width),random(height)) ;
    this.vel = createVector(0, random(-10,-2))  ;
    this.r =(156) ;
    this.g =(199) ;
    this.b =(250) ;
    this.o =random(100) ;
    this.size = random(10,80) ;
    
  }

  // methods - these get called with a dot after the variable

  display() {
    fill(this.r, this.g, this.b, this.o) ;
   // rect(this.pos.x, this.pos.y, 50, 25);
    circle(this.pos.x, this.pos.y,50,25);
   // textSize(this.size) ;
    //text("bubbles",this.pos.x, this.pos.y) ;
  }
  
  move(){
   this.pos.add(this.vel) ;
  
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width ;
    if (this.pos.y > height) this.pos.y = 0 ;
    if (this.pos.y < 0) this.pos.y = height ;
  }
}