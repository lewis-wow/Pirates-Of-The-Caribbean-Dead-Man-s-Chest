import { PlayerColor } from '../Player';
import { Card } from './Card';

export class Ship extends Card {
  isFlipped = true;

  constructor(opts: { color: PlayerColor }) {
    super({
      src: `/assets/ship/ship_${opts.color}.png`,
    });
  }
}
