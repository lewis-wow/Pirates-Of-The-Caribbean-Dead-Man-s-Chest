import { createContext, useContext } from 'react';
import { useBoard, UseBoardPayload } from '../hooks/useBoard';
import { Card } from '../model/cards/Card';

export type GameContext = {
  boardSize: number;
  board: UseBoardPayload;
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
  boardSize: number;
  cards: Card[];
  children?: React.ReactNode;
};

export const GameProvider = ({ boardSize, cards, children }: GameProviderProps) => {
  const board = useBoard({ boardSize, cards });

  return <GameContext.Provider value={{ boardSize, board }}>{children}</GameContext.Provider>;
};
