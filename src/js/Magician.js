import MathCharacter from './Math';

export default class Magician extends MathCharacter {
  constructor(name) {
    super(name, 'Magician');
    this.defence = 40;
    this.attack = 10;
  }
}
