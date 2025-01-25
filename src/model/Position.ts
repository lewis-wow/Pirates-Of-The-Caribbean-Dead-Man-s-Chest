export class Position {
  constructor(public x: number, public y: number) {}

  checkBoardBoundaries(boardSize: number): boolean {
    return this.x >= 0 && this.x < boardSize && this.y >= 0 && this.y < boardSize;
  }
}
