export class Utils {
  /**
   *
   * @param {number} min the minimum number to be generated
   * @param {number} max the maximum number to be generated
   * @param {number} numberPositionToGen amount position to be generated
   * @returns {Array<object>}
   */
  static getRandomPosition(min, max, numberPositionToGen) {
    let results = [];
    for (let index = 0; index < numberPositionToGen; index++) {
      const y = Math.floor(Math.random() * max) + min;
      const x = Math.floor(Math.random() * max) + min;
      results.push({ y, x });
    }
    return results;
  }
}
