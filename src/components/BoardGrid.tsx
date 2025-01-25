import { ReactNode } from 'react';
import { useGameContext } from '../context/GameContext';

export type BoardGridProps = {
  children?: ReactNode;
};

export const BoardGrid = ({ children }: BoardGridProps) => {
  const gameContext = useGameContext();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div
        className="grid gap-[0.5px] h-full"
        style={{
          gridTemplateColumns: `repeat(${gameContext.boardSize}, 1fr)`,
          gridTemplateRows: `repeat(${gameContext.boardSize}, 1fr)`,
          width: `min(95vw, 95vh)`,
          height: `min(95vw, 95vh)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
