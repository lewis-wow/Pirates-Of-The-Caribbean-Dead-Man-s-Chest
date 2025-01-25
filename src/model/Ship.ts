import { MovableObject } from './movement/MovableObject';
import { MovementStrategy } from './movement/MovementStrategy';
import { Position } from './movement/Position';

export class Ship extends MovableObject {
  constructor(public color: 'red' | 'blue' | 'purple' | 'black', initialPosition: Position) {
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
