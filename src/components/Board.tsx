import { BoardGrid } from './BoardGrid';
import { TileRenderer } from './TileRenderer';
import { Player } from '../model/Player';
import { Card } from '../model/cards/Card';
import { useState } from 'react';
import { createBoard } from './createBoard';
import { Model } from '../model/Model';

export type BoardProps = {
  boardSize: number;
  cards: Card[];
  players: Player[];
};

export const Board = ({ boardSize, cards, players }: BoardProps) => {
  const [board] = useState<Model[][]>(createBoard({ boardSize, cards, players }));

  return (
    <BoardGrid boardSize={boardSize}>
      {board.map((row, rowIndex) =>
        row.map((tile, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              gridArea: `${rowIndex + 1} / ${colIndex + 1} / ${rowIndex + 2} / ${colIndex + 2}`,
            }}
          >
            <TileRenderer model={tile} />
          </div>
        ))
      )}
    </BoardGrid>
  );
};
