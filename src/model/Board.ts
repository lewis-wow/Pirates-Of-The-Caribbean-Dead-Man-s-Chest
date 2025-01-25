import { match } from 'ts-pattern';
import { Card } from './cards/Card';
import { EmptySpace } from './EmptySpace';
import { random } from 'lodash-es';
import { Model } from './Model';

export class Board {
  public grid: Model[][];

  constructor(public boardSize: number, public cards: Card[]) {
    this.grid = Array.from({ length: boardSize }, (_, rowIndex) =>
      Array.from({ length: boardSize }, (_, colIndex) =>
        match({ rowIndex, colIndex })
          .with(
            { rowIndex: 0 },
            { colIndex: 0 },
            { rowIndex: boardSize - 1 },
            { colIndex: boardSize - 1 },
            () => new EmptySpace()
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
}
