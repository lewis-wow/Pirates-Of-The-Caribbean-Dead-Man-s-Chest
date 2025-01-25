import { Model } from '../Model';
import { Direction } from './Direction';
import { Position } from './Position';

export class MovableObject extends Model {
  protected position: Position;
  protected movementRules: Direction[];

  constructor(initialPosition: Position, initialMovementRules: Direction[]) {
    super();

    this.position = initialPosition;
    this.movementRules = initialMovementRules;
  }

  isMoveValid(newPosition: Position, boardSize: number): boolean {
    return newPosition.checkBoardBoundaries(boardSize);
  }

  getPosition(): Position {
    return this.position;
  }

  getMovementRules(): Direction[] {
    return this.movementRules;
  }

  getPossibleMoves(boardSize: number): Position[] {
    const moves: Position[] = [];

    for (const direction of this.movementRules) {
      const newPosition = new Position(this.position.x + direction.x, this.position.y + direction.y);

      if (this.isMoveValid(newPosition, boardSize)) {
        moves.push(newPosition);
      }
    }

    return moves;
  }

  move(newPosition: Position, boardSize: number): boolean {
    const possibleMoves = this.getPossibleMoves(boardSize);

    // Check if the target position is a valid move
    const isValidMove = possibleMoves.some((move) => move.x === newPosition.x && move.y === newPosition.y);

    if (isValidMove) {
      this.position = newPosition;
      return true;
    }

    return false;
  }
}
