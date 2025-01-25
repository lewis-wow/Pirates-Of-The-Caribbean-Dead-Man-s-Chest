import { Coin } from '../Coin';
import { Card } from './Card';

export class TwoCoinsCard extends Card {
  tooltip = 'Karta s mincema';
  image = 'assets/card/jack_sparrow.png';
  coins = [new Coin(), new Coin()];
  isFlipped = true;
}
