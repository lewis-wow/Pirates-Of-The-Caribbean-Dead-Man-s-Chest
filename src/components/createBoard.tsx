import { match } from 'ts-pattern';
import { Card } from '../model/cards/Card';
import { Player } from '../model/Player';
import { Ship } from '../model/Ship';
import { random } from 'lodash-es';
import { EmptySpace } from '../model/EmptySpace';
import { Pirate } from '../model/Pirate';
import { Position } from '../model/movement/Position';
import { Tile } from '../model/Tile';

export type CreateBoardArgs = {
  boardSize: number;
  cards: Card[];
  players: Player[];
};

export type CreateBoardPayload = Tile[][];

export const createBoard = ({ boardSize, cards, players }: CreateBoardArgs): CreateBoardPayload => {
  const ships = players.map(
    (player) => new Ship(player.shipColor, player.generateRandomInitializationShipPosition(boardSize))
  );

  const pirates = ships.map((ship) => [
    new Pirate(ship.shipColor, new Position(ship.getPosition().x, ship.getPosition().y)),
    new Pirate(ship.shipColor, new Position(ship.getPosition().x, ship.getPosition().y)),
    new Pirate(ship.shipColor, new Position(ship.getPosition().x, ship.getPosition().y)),
    new Pirate(ship.shipColor, new Position(ship.getPosition().x, ship.getPosition().y)),
  ]);

  ships.forEach((ship, index) => {
    ship.addPirate(pirates[index]);
  });

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
