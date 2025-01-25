import { MovableTile } from './MovableTile';
import { MovementStrategy } from './movement/MovementStrategy';
import { Position } from './movement/Position';

export enum ShipColor {
  RED = 'RED',
  BLUE = 'BLUE',
  PURPLE = 'PURPLE',
  BLACK = 'BLACK',
}

export class Ship extends MovableTile {
  constructor(public shipColor: ShipColor, initialPosition: Position) {
    super(initialPosition, MovementStrategy.orthogonalDirections);
  }

  isMoveValid(newPosition: Position, boardSize: number): boolean {
    const min = 0; // Top/Left boundary
    const max = boardSize - 1; // Bottom/Right boundary

    return (
      (newPosition.x === min || newPosition.x === max || newPosition.y === min || newPosition.y === max) &&
      newPosition.x >= min &&
      newPosition.x <= max &&
      newPosition.y >= min &&
      newPosition.y <= max
    );
  }
}
