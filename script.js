let button;
let hw;
let stars;
let song;
let rain;
let girl;
let heart;
let rose;

function preload() {
  //song
  song = loadSound('ladidie.mp3');

  //backgrounds
  hw = loadImage('images/hollywood.png');
  stars = loadImage('images/stars.png');

  //animations
  rain = loadAnimation('images/rain_1.png', 'images/rain_2.png');
  girl = loadAnimation('images/girl_1.png', 'images/girl_5.png');
  heart = loadAnimation('images/heart_2.png', 'images/heart_13.png');
  rose = loadAnimation('images/rose_1.png', 'images/rose_12.png');

} //end of preload


function setup() {
  createCanvas(windowWidth, windowHeight);

  //slows the speed of animation
  rain.frameDelay = 10;
  girl.frameDelay = 15;
  heart.frameDelay = 13;
  rose.frameDelay = 13;

  //creates a button
  let col = color(188, 143, 143);
  button = createButton('Play');
  button.size(200, 100);
  button.style("font-family", "Knewave");
  button.style("font-size", "48px");
  button.style("background-color", col);
  button.position(windowWidth / 2 - 80, windowHeight / 2 - 50);
  button.mousePressed(start);

} //end of setup


//starts the song and hides the button after clicked
function start() {
  button.hide();
  song.setVolume(0.2);
  song.play();
  song.stop([24]);
} //end of start


function draw() {
  background(0);

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
    scale(0.5);
    animation(heart, windowWidth / 2 + 700, windowHeight / 2 + 400);
  }

  if (song.currentTime() > 12 && song.currentTime() <= 17) {
    scale(0.5);
    animation(rose, windowWidth / 2 + 700, windowHeight / 2 + 400);
  }

} //end of draw
