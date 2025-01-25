import { Coin } from '../Coin';
import { Model } from '../Model';
import { Pirate } from '../Pirate';

export class Card extends Model {
  tooltip?: string;
  isFlipped = false;
  pirates: Pirate[] = [];
  coins: Coin[] = [];
  image?: string;

  addPirate(pirate: Pirate): void {
    this.pirates.push(pirate);

    if (!this.isFlipped) {
      this.flip(pirate);
    }
  }

  removePirate(pirate: Pirate): void {
    this.pirates = this.pirates.filter((p) => p !== pirate);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFlip(_pirate: Pirate): void {}

  flip(pirate: Pirate): void {
    this.isFlipped = true;
    this.onFlip(pirate);
  }
}
