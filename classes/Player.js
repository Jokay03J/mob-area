import { Sprite } from "./Sprite";
import { Input } from "phaser";

export class Player extends Sprite {
  // controls
  keyQ;
  keyS;
  keyD;
  keyZ;
  /**
   *
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    super(scene, x, y, "wizzard");
    this.keyQ = this.scene.input.keyboard.addKey("Q");
    this.keyD = this.scene.input.keyboard.addKey("D");
    this.keyS = this.scene.input.keyboard.addKey("S");
    this.keyZ = this.scene.input.keyboard.addKey("Z");
  }

  update() {
    this.getBody().setVelocity(0, 0);
    if (this.keyZ?.isDown) {
      this.body.velocity.y = -110;
    }
    if (this.keyQ?.isDown) {
      this.body.velocity.x = -110;
    }
    if (this.keyS?.isDown) {
      this.body.velocity.y = 110;
    }
    if (this.keyD?.isDown) {
      this.body.velocity.x = 110;
    }
  }
}
