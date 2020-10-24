class CrispyText {
  bitmap: Phaser.BitmapData;

  constructor(
    game: Phaser.Game,
    x: number,
    y: number,
    str: string = "hello world!",
    font: string = "12px",
    color: string = "#ffffff",
    threshold: number = 180
  ) {
    const text: Phaser.Text = game.make.text(0, 0, str, {
      font: font,
      fill: color,
    });
    const rt: Phaser.RenderTexture = text.generateTexture();
    this.bitmap = new Phaser.BitmapData(
      game,
      "BITMAP",
      text.width,
      text.height
    );

    this.bitmap.draw(text, 0, 0);
    this.bitmap.addToWorld(x, y);

    text.destroy();
    rt.destroy(false);

    this.bitmap.update();
    this.bitmap.processPixelRGB((pixel) => {
      if (pixel.a > threshold) {
        pixel.a = 255;
      } else {
        pixel.a = 0;
      }

      return pixel;
    }, this);
  }

  Destroy() {
    this.bitmap.destroy();
  }
}
