let button;
let hw;
let stars;
let song;
let rain;
let girl;
let heart;
let rose;
let cover;
let thorns;
let clock;
let thanks;
let skull;
let moveX;
let moveY;
let speed = 30;


function preload() {
  //song
  song = loadSound('ladidie.mp3');

  //backgrounds
  hw = loadImage('images/hollywood.png');
  stars = loadImage('images/stars.png');
  cover = loadImage("images/cover.png");
  thorns = loadImage("images/thorns.png");
  thanks = loadImage('images/thanks.png');
  skull = loadImage('images/skull.png');

  //animations
  rain = loadAnimation('images/rain_1.png', 'images/rain_2.png');
  girl = loadAnimation('images/girl_1.png', 'images/girl_5.png');
  heart = loadAnimation('images/heart_2.png', 'images/heart_13.png');
  rose = loadAnimation('images/rose_1.png', 'images/rose_12.png');
  clock = loadAnimation('images/clock_1.png', 'images/clock_16.png');

} //end of preload


function setup() {
  createCanvas(windowWidth, windowHeight);

  background(color(64, 58, 55));
  image(cover, windowWidth / 2 - 150, windowHeight / 2 - 300, 400, 400);


  moveX = windowWidth / 2;
  moveY = windowHeight / 2;

  //slows the speed of animation
  rain.frameDelay = 10;
  girl.frameDelay = 13;
  heart.frameDelay = 13;
  rose.frameDelay = 13;
  clock.frameDelay = 10;

  angleMode(DEGREES);


  //creates a button
  let col = color(188, 143, 143);
  button = createButton('Play');
  button.size(200, 100);
  button.style("font-family", "Knewave");
  button.style("font-size", "48px");
  button.style("background-color", col);
  button.position(windowWidth / 2 - 80, windowHeight / 2 + 150);
  button.mousePressed(start);


} //end of setup


//starts the song and hides the button after clicked
function start() {
  button.hide();
  song.setVolume(0.2);
  song.play();
  song.stop([39]);
} //end of start


function draw() {

  if (song.currentTime() >= 1 && song.currentTime() <= 4) {
    image(hw, 0, 0, windowWidth, windowHeight);
    scale(0.4);
    animation(rain, windowWidth, windowHeight);
  }

  if (song.currentTime() > 4 && song.currentTime() <= 7) {
    image(stars, 0, 0, windowWidth, windowHeight);
    scale(0.4);
    animation(girl, windowWidth / 2 + 1100, windowHeight / 2 + 510);
  }

  if (song.currentTime() > 7 && song.currentTime() <= 12) {
    background(0);
    scale(0.5);
    animation(heart, windowWidth / 2 + 700, windowHeight / 2 + 400);
  }

  if (song.currentTime() > 12 && song.currentTime() <= 17) {
    background(thorns);
    scale(0.5);
    animation(rose, windowWidth / 2 + 700, windowHeight / 2 + 400);
  }

  if (song.currentTime() > 17 && song.currentTime() <= 24) {
    background(0);
    scale(0.2);
    animation(clock, windowWidth / 2 + 2900, windowHeight / 2 + 1600);
  }

  if (song.currentTime() > 24 && song.currentTime() <= 25) {
    background(0);
  }

  if (song.currentTime() > 25 && song.currentTime() <= 38) {

    // reference from rustyrobison's p5.js sketch of rainbow fog.
    // https://editor.p5js.org/rustyrobison/sketches/HylPsBaBG

    fill(moveY / 2, 40, 50, 10); //color of the fog
    noStroke();
    ellipse(moveX, moveY, 1000, 1000); // ellipse location and size
    moveX = moveX + random(speed * -2, speed * 2); //x coordinate movement
    moveY = moveY + random(speed * -2, speed * 2);  //y coordinate movement

    scale(0.2);
    imageMode(CORNER);
    image(skull, windowWidth + 400, windowHeight);
    image(skull, windowWidth + 1000, windowHeight);
    image(skull, windowWidth + 1600, windowHeight);
  }

  if (song.currentTime() > 38) {
    background(thanks);
  }


} //end of draw
