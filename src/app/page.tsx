import { Board } from '../components/Board';
import { AnchorCard } from '../server/model/cards/AnchorCard';
import { BlackPearlCard } from '../server/model/cards/BlackPearlCard';
import { Card } from '../server/model/cards/Card';
import { DaggerCard } from '../server/model/cards/DaggerCard';
import { JackSparrowCard } from '../server/model/cards/JackSparrowCard';
import { SixCoinsCard } from '../server/model/cards/SixCoinsCard';
import { SkullCard } from '../server/model/cards/SkullCard';
import { ThreeCoinsCard } from '../server/model/cards/ThreeCoinsCard';
import { TwoCoinsCard } from '../server/model/cards/TwoCoinsCard';
import { Player, PlayerInitialPosition } from '../server/model/Player';
import { ShipColor } from '../server/model/tiles/Ship';
import { random } from 'lodash-es';

const boardSize = 9;

const cardsClasses: (typeof Card)[] = [
  JackSparrowCard,
  TwoCoinsCard,
  ThreeCoinsCard,
  SixCoinsCard,
  AnchorCard,
  SkullCard,
  DaggerCard,
  BlackPearlCard,
];

const cards = Array.from({ length: 200 }, () => new cardsClasses[random(0, cardsClasses.length - 1)]());

const players = [
  new Player('Player 1', ShipColor.BLACK, PlayerInitialPosition.TOP),
  new Player('Player 2', ShipColor.RED, PlayerInitialPosition.BOTTOM),
];

const App = () => {
  return <Board boardSize={boardSize} cards={cards} players={players} />;
};

export default App;
