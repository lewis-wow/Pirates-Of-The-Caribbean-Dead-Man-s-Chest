import { Board } from './components/Board';
import { JackSparrowCard } from './model/cards/JackSparrowCard';
import { TwoCoinsCard } from './model/cards/TwoCoinsCard';
import { Player, PlayerInitialPosition } from './model/Player';
import { ShipColor } from './model/Ship';
import { random } from 'lodash-es';

const boardSize = 9;

const cards = Array.from({ length: 200 }, () => (random(0, 1) ? new JackSparrowCard() : new TwoCoinsCard()));

const players = [
  new Player('Player 1', ShipColor.BLACK, PlayerInitialPosition.TOP),
  new Player('Player 2', ShipColor.RED, PlayerInitialPosition.BOTTOM),
];

export const App = () => {
  return <Board boardSize={boardSize} cards={cards} players={players} />;
};
