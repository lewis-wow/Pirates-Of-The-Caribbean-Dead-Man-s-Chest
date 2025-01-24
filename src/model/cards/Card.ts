import { Model } from '../Model';

export class Card extends Model {
  src?: string;
  isFlipped: boolean = false;

  constructor(opts: { src?: string }) {
    super();

    this.src = opts.src;
  }

  flip() {
    this.isFlipped = true;
  }
}
