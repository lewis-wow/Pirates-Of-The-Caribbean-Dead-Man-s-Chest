import { match } from 'ts-pattern';
import { Card } from './cards/Card';
import { EmptyCard } from './cards/EmptyCard';
import { PlayableCard } from './cards/PlayableCard';
import { Model } from './Model';
import { Player } from './Player';
import { Ship } from './cards/Ship';

export class Board extends Model {
  size: number;
  grid: Card[][];

  constructor(opts: { size: number; grid: Card[][] }) {
    super();

    this.size = opts.size;
    this.grid = opts.grid;
  }

  static generateRandomBoard(opts: { size: number; players: Player[] }): Board {
    const grid: Card[][] = Array.from({ length: opts.size }, (_, rowIndex) =>
      Array.from({ length: opts.size }, (_, colIndex) =>
        match({ rowIndex, colIndex })
          .with(
            { rowIndex: 0 },
            { colIndex: 0 },
            { rowIndex: opts.size - 1 },
            { colIndex: opts.size - 1 },
            () => new EmptyCard()
          )
          .otherwise(() => new PlayableCard())
      )
    );

    const board = new Board({ size: opts.size, grid });

    opts.players.forEach((player) => {
      const { x, y } = player.position;

      board.grid[y][x] = new Ship({ color: player.color });
    });

    return board;
  }
}
