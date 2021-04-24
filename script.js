// let fade;
// let fadeAmnt = 1;
let button;
let ply;
let rain;
let song;

function preload() {
  song = loadSound('ladidie.mp3'); //loads mp3 file
}


function setup() {
  rain = new Rain();
  createCanvas(windowWidth, windowHeight);

  ply = song.isPlaying();

  //creates a button
  button = createButton('Play');
  button.position(windowWidth / 2, windowHeight / 2);
  button.mousePressed(start);
  // fade = 255;
}

//starts the song and hides the button after clicked
function start() {
  button.hide();
  song.setVolume(0.2);
  song.play();
  song.stop([55]);
}


function draw() {
  background(0);
  // background(0, 0, 0, fade);
  // fill(255, 255, 255, fade);
  // textSize(80);
  // textAlign(CENTER, CENTER);
  // text("La Di Die", width / 2, height / 2 - 30);
  // text("Nessa Barret", width / 2, height / 2 + 80);
  // if (fade >= 255) fadeAmnt = -0.5;
  // fade += fadeAmnt;

  if (ply == true) {
    rain.display();
  }

}
