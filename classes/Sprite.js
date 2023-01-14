import { Physics } from "phaser";

export class Sprite extends Physics.Arcade.Sprite {
  hp = 100;

  /**
   *
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   * @param {string} texture
   * @param {string | number} frame
   */
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.getBody().setCollideWorldBounds(true);
  }

  /**
   *
   * @returns {Physics.Arcade.Body} body
   */
  getBody() {
    return this.body;
  }

  getHPValue() {
    return this.hp;
  }
}
