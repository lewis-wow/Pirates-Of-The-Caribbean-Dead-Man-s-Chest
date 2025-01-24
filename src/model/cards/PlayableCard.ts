import { Card } from './Card';

export class PlayableCard extends Card {
  constructor() {
    super({
      src: 'assets/card_back.png',
    });
  }
}
