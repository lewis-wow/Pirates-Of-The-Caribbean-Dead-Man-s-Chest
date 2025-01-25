import { Pirate } from '../Pirate';

export class Card {
  tooltip?: string;
  isFlipped = false;

  constructor(public src?: string) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFlip(_pirate: Pirate): void {}

  flip(pirate: Pirate): void {
    this.isFlipped = true;
    this.onFlip(pirate);
  }
}
