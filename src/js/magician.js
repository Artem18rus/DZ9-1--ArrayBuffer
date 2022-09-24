export default class Magician {
  constructor(distance, damage) {
    this.distance = distance;
    this.damage = damage;
  }

  get attack() {
    if (this.distance === 1) {
      this.damage = 0;
    }
    if (this.distance === 2) {
      this.damage *= 0.9;
    }
    if (this.distance === 3) {
      this.damage *= 0.8;
    }
    if (this.distance === 4) {
      this.damage *= 0.7;
    }
    if (this.distance === 5) {
      this.damage *= 0.6;
    }
    return this.damage;
  }

  get stoned() {
    this.damage = Math.round(this.attack - Math.log(this.distance) * 5);
    return this.damage;
  }
}
