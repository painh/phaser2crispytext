class Game {
    constructor() {
        this.frame = 0;
        this.game = new Phaser.Game(256, 16 * 10, Phaser.AUTO, "game", {
            preload: () => this.preload(),
            init: () => this.init(),
            create: () => this.create(),
            update: () => this.update(),
            render: () => this.render(),
        });
    }
    preload() { }
    init() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.renderer.renderSession.roundPixels = true;
    }
    create() {
        this.ct = new CrispyText(this.game, 32, 48, "helloworld 안녕하세요", "12px", "#ffffff");
        const text = this.game.add.text(32, 32, "helloworld 안녕하세요", {
            font: "12px",
            fill: "#ffffff",
        });
        text.smoothed = true;
    }
    update() {
    }
    render() {
        this.game.debug.text(this.game.time.fps.toString(), 2, 14, "#00ff00");
    }
}
var g_game;
window.onload = function () {
    g_game = new Game();
};
//# sourceMappingURL=game.js.map