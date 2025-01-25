import { Board } from './Board';
import { GameProvider } from './GameContext';
import { JackSparrowCard } from './model/cards/JackSparrowCard';

const boardSize = 9;

const cards = Array.from({ length: 200 }, () => new JackSparrowCard());

export const App = () => {
  return (
    <GameProvider boardSize={boardSize} cards={cards}>
      <Board />
    </GameProvider>
  );
};
