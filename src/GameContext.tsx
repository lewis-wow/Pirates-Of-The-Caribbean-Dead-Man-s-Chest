import { createContext, useContext } from 'react';
import { Player } from './model/Player';
import { Board } from './model/Board';
import { useBoard } from './hooks/useBoard';

export type GameContext = {
  players: Player[];
  size: number;
  board: Board;
  flipCard: (x: number, y: number) => void;
};

export const GameContext = createContext<GameContext | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }

  return context;
};

export type GameProviderProps = {
  players: Player[];
  size: number;
  children?: React.ReactNode;
};

export const GameProvider = ({ players, size, children }: GameProviderProps) => {
  const { board, flipCard } = useBoard({ size, players });

  return <GameContext.Provider value={{ players, size, board, flipCard }}>{children}</GameContext.Provider>;
};
