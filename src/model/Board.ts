import { match } from 'ts-pattern';
import { Card } from './cards/Card';
import { EmptyCard } from './cards/EmptyCard';
import { random } from 'lodash-es';
import { Position } from './movement/Position';
import { Ship } from './Ship';

export class Board {
  public grid: any[][];

  constructor(public boardSize: number, public cards: Card[]) {
    this.grid = Array.from({ length: boardSize }, (_, rowIndex) =>
      Array.from({ length: boardSize }, (_, colIndex) =>
        match({ rowIndex, colIndex })
          .with(
            { rowIndex: 0 },
            { colIndex: 0 },
            { rowIndex: boardSize - 1 },
            { colIndex: boardSize - 1 },
            () => new EmptyCard()
          )
          .otherwise(() => {
            const randomIndex = random(0, this.cards.length - 1);
            const card = this.cards[randomIndex];
            this.cards.splice(randomIndex, 1);

            return card;
          })
      )
    );
  }

  addPlayerShip(position: Position) {
    const ship = new Ship(position);

    this.grid[position.x][position.y] = ship;
  }
}
