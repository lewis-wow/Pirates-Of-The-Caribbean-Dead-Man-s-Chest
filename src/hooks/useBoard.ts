import { useState } from 'react';
import { Board } from '../model/Board';
import { Player } from '../model/Player';

export type UseBoardProps = {
  size: number;
  players: Player[];
};

export const useBoard = ({ size, players }: UseBoardProps) => {
  const [board, setBoard] = useState(Board.generateRandomBoard({ size, players }));

  const flipCard = (x: number, y: number) => {
    const card = board.grid.get(x)!.get(y)!;

    if (card.isPlayable()) {
      card.flip();
      const newGrid = board.grid.setIn([x, y], card);

      console.log('newGrid', newGrid);

      setBoard(new Board({ size, grid: newGrid }));
    }
  };

  return { board, flipCard };
};
