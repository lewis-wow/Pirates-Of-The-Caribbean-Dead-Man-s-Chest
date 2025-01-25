import { Coin } from '../Coin';
import { Pirate } from '../Pirate';
import { Tile } from '../tiles/Tile';

export class Card extends Tile {
  tooltip?: string;
  isFlipped = false;
  pirates: Pirate[] = [];
  coins: Coin[] = [];

  override addPirate(pirate: Pirate): void {
    super.addPirate(pirate);

    if (!this.isFlipped) {
      this.flip(pirate);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFlip(_pirate: Pirate): void {}

  flip(pirate: Pirate): void {
    this.isFlipped = true;
    this.onFlip(pirate);
  }
}
