import { Scene } from "phaser";

export class MainActivity extends Scene {
  constructor() {
    super("main-activity");
  }

  create() {
    this.scene.start("home");
    this.scene.start("ui-scene");
  }
}
