class Rain {
  constructor() {
    rain = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
    rain.addAnimation('images/rain_1.png', 'images/rain_2.png', 'images/rain_3.png', 'images/rain_4.png');
  }

  display() {
    scale(0.4);
    drawSprites();
  }
}
