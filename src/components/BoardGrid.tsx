'use client';

import { ReactNode } from 'react';

export type BoardGridProps = {
  boardSize: number;
  children?: ReactNode;
};

export const BoardGrid = ({ boardSize, children }: BoardGridProps) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div
        className="grid gap-[0.5px] h-full"
        style={{
          gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
          gridTemplateRows: `repeat(${boardSize}, 1fr)`,
          width: `min(95vw, 95vh)`,
          height: `min(95vw, 95vh)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
