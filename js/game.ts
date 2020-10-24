class Game {
  game: Phaser.Game;
  frame: number = 0;
  ct: CrispyText;

  constructor() {
    this.game = new Phaser.Game(256, 16 * 10, Phaser.AUTO, "game", {
      preload: () => this.preload(),
      init: () => this.init(),
      create: () => this.create(),
      update: () => this.update(),
      render: () => this.render(),
    });
  }

  preload() {}

  init() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.renderer.renderSession.roundPixels = true;
  }

  create() {
    this.ct = new CrispyText(
      this.game,
      0,
      48,
      "helloworld 안녕하세요 다람쥐 헌 쳇바퀴에 타고파",
      "12px",
      "#ffffff"
    );

    const text = this.game.add.text(0, 32, "helloworld 안녕하세요 다람쥐 헌 쳇바퀴에 타고파", {
      font: "12px",
      fill: "#ffffff",
      // fontStyle: "bold",
    });

    {
      const text = this.game.add.text(0, 64, "helloworld 안녕하세요 다람쥐 헌 쳇바퀴에 타고파", {
        font: "12px Spoqa Han Sans",
        fill: "#ffffff",
      });

      const ct2 = new CrispyText(
        this.game,
        0,
        80,
        "helloworld 안녕하세요 다람쥐 헌 쳇바퀴에 타고파",
        "12px Spoqa Han Sans",
        "#ffffff"
      );
    }
  }

  update() {}

  render() {
    this.game.debug.text(this.game.time.fps.toString(), 2, 14, "#00ff00");
  }
}

var g_game;
window.onload = function () {
  g_game = new Game();
};
