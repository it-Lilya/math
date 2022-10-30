import Math from './index';

export default class Magician extends Math {
  constructor(name, type, cell) {
    super(name, type, cell);
    this.attack = 10;
    this.defence = 40;
    this.cell = cell;
  }
}
