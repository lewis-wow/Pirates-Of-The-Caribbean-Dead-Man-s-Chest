import { Card } from './Card';

export class EmptyCard extends Card {
  isFlipped = true;

  constructor() {
    super(undefined);
  }
}
