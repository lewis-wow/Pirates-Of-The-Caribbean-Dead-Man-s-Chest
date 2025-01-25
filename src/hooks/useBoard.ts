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

export type UseBoardProps = {
  boardSize: number;
  cards: Card[];
};

export type UseBoardPayload = {
  grid: List<List<Model>>;
  movePirateTo: (pirate: Pirate, rowIndex: number, colIndex: number) => void;
};

export const useBoard = ({ boardSize, cards }: UseBoardProps): UseBoardPayload => {
  const [grid, setGrid] = useState<List<List<Model>>>(generateRandomGrid({ boardSize, cards }));

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

const colors = ['red', 'blue', 'purple', 'black'] as const;

const generateRandomGrid = ({ boardSize, cards }: UseBoardProps) => {
  const shipPositions = {
    top: { rowIndex: 0, colIndex: random(1, boardSize - 2) },
    bottom: { rowIndex: boardSize - 1, colIndex: random(1, boardSize - 2) },
    left: { rowIndex: random(1, boardSize - 2), colIndex: 0 },
    right: { rowIndex: random(1, boardSize - 2), colIndex: boardSize - 1 },
  };

  const ships = Object.values(shipPositions).map(
    ({ rowIndex, colIndex }, index) => new Ship(colors[index], new Position(rowIndex, colIndex))
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
