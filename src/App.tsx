import { Board } from './Board';
import { GameProvider } from './GameContext';
import { Player } from './model/Player';

const boardSize = 9;

const players = [
  new Player({ name: 'Test', color: 'red', initialPosition: 'top', boardSize }),
  new Player({ name: 'Test 2', color: 'black', initialPosition: 'bottom', boardSize }),
];

export const App = () => {
  return (
    <GameProvider players={players} size={9}>
      <Board />
    </GameProvider>
  );
};
