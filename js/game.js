class Game {
    constructor() {
        this.frame = 0;
        this.game = new Phaser.Game(256, 16 * 10, Phaser.AUTO, "game", {
            preload: () => this.preload(),
            init: () => this.init(),
            create: () => this.create(),
            update: () => this.update(),
            render: () => this.render(),
        }, false, false);
    }
    preload() { }
    init() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.renderer.renderSession.roundPixels = true;
        this.game.stage.smoothed = false;
    }
    create() {
        const size = 12;
        let ypos = 0;
        this.ct = new CrispyText(this.game, 0, (ypos += size), "helloworld 안녕하세요 다람쥐 헌 쳇바퀴에 타고파", `${size}px`, "#ffffff");
        const text = this.game.add.text(0, (ypos += size), "helloworld 안녕하세요 다람쥐 헌 쳇바퀴에 타고파", {
            font: `${size}px`,
            fill: "#ffffff",
        });
        const font = ` ${size}px`;
        {
            const text = this.game.add.text(0, (ypos += size), "helloworld 안녕하세요 다람쥐 헌 쳇바퀴에 타고파", {
                font: font,
                fill: "#ffffff",
            });
            const ct2 = new CrispyText(this.game, 0, (ypos += size), "helloworld 안녕하세요 다람쥐 헌 쳇바퀴에 타고파", font, "#ffffff", 150);
        }
        {
            const ct2 = new CrispyText2(this.game, 0, (ypos += size), "helloworld 안녕하세요 다람쥐 헌 쳇바퀴에 타고파", "", size, "#ffffff");
        }
    }
    update() { }
    render() {
        this.game.debug.text(this.game.time.fps.toString(), 2, 14, "#00ff00");
    }
}
var g_game;
window.onload = function () {
    g_game = new Game();
};
//# sourceMappingURL=game.js.map