import { useState } from 'react';
import { Card } from '../model/cards/Card';
import { random } from 'lodash-es';
import { List } from 'immutable';
import { Pirate } from '../model/Pirate';
import { Position } from '../model/movement/Position';
import { Ship } from '../model/Ship';
import { Model } from '../model/Model';
import { EmptyCard } from '../model/cards/EmptyCard';
import { match } from 'ts-pattern';
import { Player } from '../model/Player';

export type UseBoardProps = {
  boardSize: number;
  players: Player[];
  cards: Card[];
};

export type UseBoardPayload = {
  grid: List<List<Model>>;
  movePirateTo: (pirate: Pirate, rowIndex: number, colIndex: number) => void;
};

export const useBoard = ({ boardSize, cards, players }: UseBoardProps): UseBoardPayload => {
  const [grid, setGrid] = useState<List<List<Model>>>(generateRandomGrid({ boardSize, cards, players }));

  const movePirateTo = (pirate: Pirate, rowIndex: number, colIndex: number) => {
    setGrid((prevGrid) =>
      prevGrid.update(rowIndex, (row) =>
        row!.update(colIndex, (card) => {
          if (!(card instanceof Card)) {
            return;
          }

          const isSuccess = pirate.move(new Position(rowIndex, colIndex), boardSize);

          if (isSuccess) {
            card!.flip(pirate);
            card!.addPirate(pirate);
          }

          return card!;
        })
      )
    );
  };

  return { grid, movePirateTo };
};

const generateRandomGrid = ({ boardSize, cards, players }: UseBoardProps) => {
  const ships = players.map(
    (player) => new Ship(player.shipColor, player.generateRandomInitializationShipPosition(boardSize))
  );

  return List.of(
    ...Array.from({ length: boardSize }, (_, rowIndex) =>
      List.of(
        ...Array.from({ length: boardSize }, (_, colIndex) => {
          // Check if this position matches any ship's position
          const ship = ships.find((s) => s.getPosition().x === rowIndex && s.getPosition().y === colIndex);
          if (ship) return ship;

          return match({ rowIndex, colIndex })
            .with(
              { rowIndex: 0 },
              { colIndex: 0 },
              { rowIndex: boardSize - 1 },
              { colIndex: boardSize - 1 },
              () => new EmptyCard()
            )
            .otherwise(() => {
              const randomIndex = random(0, cards.length - 1);
              const card = cards[randomIndex];
              cards.splice(randomIndex, 1);

              return card;
            });
        })
      )
    )
  );
};
