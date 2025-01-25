import { Pirate } from '../Pirate';
import { Card } from './Card';

export abstract class PlayableCard extends Card {
  abstract image: string;

  constructor() {
    super('assets/card_back.png');
  }

  flip(pirate: Pirate): void {
    super.flip(pirate);

    this.src = this.image;
  }
}
