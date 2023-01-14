import Phaser from "phaser";
import { HomeScene } from "./Scene/Home";
import { MainActivity } from "./Scene/MainActivity";
import { UIScene } from "./Scene/UIScene";

export class Game extends Phaser.Game {
  constructor() {
    super({
      type: Phaser.AUTO,
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
        },
      },
      height: 640,
      width: 800,
      scene: [MainActivity, HomeScene, UIScene],
    });
  }
}
