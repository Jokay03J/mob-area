import { Scene } from "phaser";

export class UIScene extends Scene {
  score = 0;
  scoreText;
  constructor() {
    super("ui-scene");
  }

  create() {
    this.scoreText = this.add.text(20, 20, this.score);
    this.game.events.on("increaseScore", (args) => {
      this.increase(args);
    });
  }

  /**
   *
   * @param {number} amount amount to decrease
   */
  decrease(amount) {
    this.score -= amount;
    this.scoreText.setText(this.score);
  }
  /**
   *
   * @param {number} amount amount to increase
   */
  increase(amount) {
    this.score += amount;
    this.scoreText.setText(this.score);
  }
}
