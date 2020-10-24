class CrispyText {
    constructor(game, x, y, str = "hello world!", font = "12px", color = "#ffffff", threshold = 180) {
        const text = game.make.text(0, 0, str, {
            font: font,
            fill: color,
        });
        const rt = text.generateTexture();
        this.bitmap = new Phaser.BitmapData(game, "BITMAP", text.width, text.height);
        this.bitmap.draw(text, 0, 0);
        this.bitmap.addToWorld(x, y);
        text.destroy();
        rt.destroy(false);
        this.bitmap.update();
        this.bitmap.processPixelRGB((pixel) => {
            if (pixel.a > threshold) {
                pixel.a = 255;
            }
            else {
                pixel.a = 0;
            }
            return pixel;
        }, this);
    }
    Destroy() {
        this.bitmap.destroy();
    }
}
//# sourceMappingURL=crispyText.js.map