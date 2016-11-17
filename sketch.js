var square;

function setup() {
  createCanvas(800, 800);

  square = {

    x: random(0, width),
    y: random(0, height),
    width: 100,
    height: 100,
    colour: (random(100, 50, 20)),

    //display function here
    display: function() {
      fill(this.colour);
      rect(this.x, this.y, this.width, this.height);
    },
    //move function here
    move: function() {
      this.x = this.x + (random(-5, 5));
      this.y = this.y + (random(-5, 5));
    }, 
   
  };
  
}

function draw() {
  background(255);
  square.display();
  square.move();

}