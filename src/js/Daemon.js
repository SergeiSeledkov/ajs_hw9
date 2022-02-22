import MathCharacter from './Math';

export default class Daemon extends MathCharacter {
  constructor(name) {
    super(name, 'Daemon');
    this.defence = 40;
    this.attack = 10;
  }
}
