import { Board } from './components/Board';
import { Card } from './model/cards/Card';
import { JackSparrowCard } from './model/cards/JackSparrowCard';
import { SixCoinsCard } from './model/cards/SixCoinsCard';
import { ThreeCoinsCard } from './model/cards/ThreeCoinsCard';
import { TwoCoinsCard } from './model/cards/TwoCoinsCard';
import { Player, PlayerInitialPosition } from './model/Player';
import { ShipColor } from './model/tiles/Ship';
import { random } from 'lodash-es';

const boardSize = 9;

const cardsClasses: (typeof Card)[] = [JackSparrowCard, TwoCoinsCard, ThreeCoinsCard, SixCoinsCard];

const cards = Array.from({ length: 200 }, () => new cardsClasses[random(0, cardsClasses.length - 1)]());

const players = [
  new Player('Player 1', ShipColor.BLACK, PlayerInitialPosition.TOP),
  new Player('Player 2', ShipColor.RED, PlayerInitialPosition.BOTTOM),
];

export const App = () => {
  return <Board boardSize={boardSize} cards={cards} players={players} />;
};
