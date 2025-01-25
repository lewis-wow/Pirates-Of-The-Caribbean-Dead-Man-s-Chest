import { Direction } from './movement/Direction';
import { MovableObject } from './movement/MovableObject';
import { MovementStrategy } from './movement/MovementStrategy';
import { Position } from './movement/Position';
import { ShipColor } from './Ship';

export class Pirate extends MovableObject {
  constructor(public shipColor: ShipColor, initialPosition: Position) {
    super(initialPosition, [...MovementStrategy.orthogonalDirections, ...MovementStrategy.diagonalDirections]);
  }

  setMovementRules(newRules: Direction[]): void {
    this.movementRules = newRules;
  }
}
