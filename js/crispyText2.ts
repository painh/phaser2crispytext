class CrispyText2 {
  bitmap: Phaser.BitmapData;
  constructor(
    game: Phaser.Game,
    x: number,
    y: number,
    str: string = "hello world!",
    fontface: string = "",
    size: number = 12,
    color: string = "#ffffff",
    threshold: number = 150
  ) {
    const tempsize = 100;
    const text: Phaser.Text = game.make.text(0, 0, str, {
      font: `${size}px ${fontface}`,
      fill: color,
    });

    const text2: Phaser.Text = game.make.text(0, 0, str, {
      font: `${size * 10}px ${fontface}`,
      fill: color,
    });

    this.bitmap = new Phaser.BitmapData(
      game,
      "BITMAP",
      text.width,
      text.height
    );

    const re = text2.generateTexture();
    const spr = game.add.sprite(0, 0, re);
    spr.smoothed = false;

    // @ts-ignore
    spr.scale.set(0.1);

    this.bitmap = new Phaser.BitmapData(game, "BITMAP2", spr.width, spr.height);
    this.bitmap.smoothed = false;
    this.bitmap.draw(spr, 0, 0);

    text2.destroy();
    text.destroy();
    spr.destroy();
    re.destroy(true);

    this.bitmap.addToWorld(x, y);

    this.bitmap.update();

    this.bitmap.processPixelRGB((pixel) => {
      if (pixel.a > 0) {
        pixel.r = pixel.g = pixel.b = pixel.a = 255;
      } else {
        pixel.r = pixel.g = pixel.b = pixel.a = 0;
      }

      return pixel;
    }, this);

    this.bitmap.update();
  }

  Destroy() {
    this.bitmap.destroy();
  }
}
