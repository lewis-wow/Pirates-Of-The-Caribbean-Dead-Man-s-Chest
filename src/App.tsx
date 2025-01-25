import { Board } from './components/Board';
import { GameProvider } from './context/GameContext';
import { JackSparrowCard } from './model/cards/JackSparrowCard';
import { Player, PlayerInitialPosition } from './model/Player';
import { ShipColor } from './model/Ship';

const boardSize = 9;

const cards = Array.from({ length: 200 }, () => new JackSparrowCard());

const players = [
  new Player('Player 1', ShipColor.BLACK, PlayerInitialPosition.TOP),
  new Player('Player 2', ShipColor.RED, PlayerInitialPosition.BOTTOM),
];

export const App = () => {
  return (
    <GameProvider boardSize={boardSize} cards={cards} players={players}>
      <Board />
    </GameProvider>
  );
};
