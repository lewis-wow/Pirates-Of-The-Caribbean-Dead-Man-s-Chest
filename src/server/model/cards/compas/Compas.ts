import { Card } from '../Card';

export enum CompasRotation {
  NORTH = 0,
  EAST = 90,
  SOUTH = 180,
  WEST = 270,
}

export class Compas extends Card {
  constructor(public rotation: CompasRotation) {
    super();
  }

  static createRandomCompasRotation(): CompasRotation {
    const randomRotation = Math.floor(Math.random() * 4) * 90;

    return randomRotation as CompasRotation;
  }
}
