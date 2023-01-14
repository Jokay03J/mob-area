import { Sprite } from "./Sprite";

export class Enemy extends Sprite {
  target;
  AGRESSOR_RADIUS = 200;
  constructor(scene, x, y, texture, target, frame) {
    super(scene, x, y, texture);
    this.target = target;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.getBody().setSize(16, 16);
    this.getBody().setOffset(0, 0);
  }
  preUpdate() {
    if (
      Phaser.Math.Distance.BetweenPoints(
        { x: this.x, y: this.y },
        { x: this.target.x, y: this.target.y }
      ) < this.AGRESSOR_RADIUS
    ) {
      this.getBody().setVelocityX(this.target.x - this.x);
      this.getBody().setVelocityY(this.target.y - this.y);
    } else {
      this.getBody().setVelocity(0);
    }
  }
  setTarget(target) {
    this.target = target;
  }
}
