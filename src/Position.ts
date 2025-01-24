import { random } from 'lodash-es';

export class CardPosition {
  x: number;
  y: number;

  constructor(opts: { x: number; y: number }) {
    this.x = opts.x;
    this.y = opts.y;
  }

  static generateRandomPosition(opts: {
    x: { from: number; to: number };
    y: { from: number; to: number };
  }): CardPosition {
    const randomX = random(opts.x.from, opts.x.to);
    const randomY = random(opts.y.from, opts.y.to);

    return new CardPosition({ x: randomX, y: randomY });
  }
}
