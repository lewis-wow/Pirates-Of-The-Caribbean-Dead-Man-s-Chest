import { match } from 'ts-pattern';
import { Card } from '../model/cards/Card';
import { Model } from '../model/Model';
import { Player } from '../model/Player';
import { Ship } from '../model/Ship';
import { random } from 'lodash-es';
import { EmptySpace } from '../model/EmptySpace';

export type CreateBoardArgs = {
  boardSize: number;
  cards: Card[];
  players: Player[];
};

export type CreateBoardPayload = Model[][];

export const createBoard = ({ boardSize, cards, players }: CreateBoardArgs): CreateBoardPayload => {
  const ships = players.map(
    (player) => new Ship(player.shipColor, player.generateRandomInitializationShipPosition(boardSize))
  );

  const board = Array.from({ length: boardSize }, (_, rowIndex) =>
    Array.from({ length: boardSize }, (_, colIndex) => {
      // Check if this position matches any ship's position
      const ship = ships.find((s) => s.getPosition().x === rowIndex && s.getPosition().y === colIndex);
      if (ship) return ship;

      return match({ rowIndex, colIndex })
        .with(
          { rowIndex: 0 },
          { colIndex: 0 },
          { rowIndex: boardSize - 1 },
          { colIndex: boardSize - 1 },
          () => new EmptySpace()
        )
        .otherwise(() => {
          const randomIndex = random(0, cards.length - 1);
          const card = cards[randomIndex];
          cards.splice(randomIndex, 1);

          return card;
        });
    })
  );

  return board;
};
