import Phaser from "phaser";
import { Enemy } from "../classes/Enemy";
import { Player } from "../classes/Player";
import { Utils } from "../classes/Utils";

export class HomeScene extends Phaser.Scene {
  player;
  text;
  score = 0;
  level = 1;
  constructor() {
    super("home");
  }

  preload() {
    this.load.setPath("./assets/");
    this.load.image("base_tiles", "tiles.png");
    this.load.tilemapTiledJSON("tilemap", "maps/area.json");
    this.load.image("wizzard", "frames/wizzard_m_idle_anim_f0.png");
    this.load.image("goblin", "frames/goblin_idle_anim_f0.png");
  }

  create() {
    const map = this.make.tilemap({
      key: "tilemap",
      tileHeight: 16,
      tileWidth: 16,
    });
    const tileset = map.addTilesetImage("tiles", "base_tiles");
    map.createLayer("background", tileset, 0, 0);
    this.player = new Player(this, 400, 300);
    const FirstEnemyPosition = Utils.getRandomPosition(
      0,
      this.game.canvas.height,
      1
    )[0];
    const FirstEnemy = new Enemy(
      this,
      FirstEnemyPosition.x,
      FirstEnemyPosition.y,
      "goblin",
      this.player
    );

    this.physics.add.collider(FirstEnemy, this.player, (enemy, player) => {
      enemy.destroy();
      this.generateEnemys();
    });
  }

  update() {
    this.player.update();
    this.cameras.main.setSize(this.game.scale.width, this.game.scale.height);
    this.cameras.main.startFollow(this.player, true, 0.09, 0.09);
    this.cameras.main.setZoom(2);
  }

  generateEnemys() {
    const EnemysPosition = Utils.getRandomPosition(
      0,
      this.game.canvas.height,
      this.level
    );

    const EnemysMapped = EnemysPosition.map(
      (item) => new Enemy(this, item.x, item.y, "goblin", this.player)
    );

    this.physics.add.collider(EnemysMapped, this.player, (enemy, player) => {
      this.game.events.emit("increaseScore", 20);
      this.level += 1;
      enemy.destroy();
      this.generateEnemys();
    });
  }
}
