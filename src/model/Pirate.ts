import { Direction } from './Direction';
import { MovableObject } from './movement/MovableObject';
import { MovementStrategy } from './movement/MovementStrategy';
import { Position } from './Position';
import { ShipColor } from './tiles/Ship';

export class Pirate extends MovableObject {
  constructor(public shipColor: ShipColor, initialPosition: Position) {
    super(initialPosition, [...MovementStrategy.orthogonalDirections, ...MovementStrategy.diagonalDirections]);
  }

  setMovementRules(newRules: Direction[]): void {
    this.movementRules = newRules;
  }
}
