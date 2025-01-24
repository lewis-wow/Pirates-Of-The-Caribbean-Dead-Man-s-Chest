import { ReactNode } from 'react';

export type BoardProps = {
  size: number;
  children?: ReactNode;
};

export const Board = ({ size, children }: BoardProps) => {
  return (
    <div
      className="grid gap-4 p-4 w-full h-screen"
      style={{
        gridTemplateColumns: `repeat(${size + 2}, 1fr)`,
        gridTemplateRows: `repeat(${size + 2}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};
