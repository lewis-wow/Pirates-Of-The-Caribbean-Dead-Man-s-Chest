import { Coin } from '../Coin';
import { Card } from './Card';

export class ThreeCoinsCard extends Card {
  tooltip = 'Karta s mincemi';
  coins = [new Coin(), new Coin(), new Coin()];
}
