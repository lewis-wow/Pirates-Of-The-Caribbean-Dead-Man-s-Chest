import { ReactNode } from 'react';
import { useGameContext } from './GameContext';

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
          gridTemplateColumns: `repeat(${gameContext.size}, 1fr)`,
          gridTemplateRows: `repeat(${gameContext.size}, 1fr)`,
          width: `min(90vw, 90vh)`,
          height: `min(90vw, 90vh)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
